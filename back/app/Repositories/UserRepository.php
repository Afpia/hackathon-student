<?php

namespace App\Repositories;

use App\Models\User;

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
        return User::where('type', 'teacher') 
            ->select(['id', 'name', 'email', 'phone', 'image_url']) 
            ->with([
                'subjects:id,name' 
            ])
            ->get();
    }
}
