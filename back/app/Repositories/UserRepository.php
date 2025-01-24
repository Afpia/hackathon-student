<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserRepository extends BaseRepository
{
    public $model;

    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function findOnEmail($email)
    {
        return $this->model->where('email', $email)->first();
    }

    public function getAllTeachersWithSubjects()
    {
        return $this->model->where('role', 'teacher')
            ->select(['id', 'name', 'email', 'phone', 'image_url'])
            ->with([
                'subjects:id,name'
            ])
            ->get();
    }

    public function getUserProfileWithGroup()
    {
        $userId = Auth::id();

        return User::with('groups:id,name')
            ->select('id', 'name', 'email', 'role')
            ->where('id', $userId)
            ->first();
    }
}
