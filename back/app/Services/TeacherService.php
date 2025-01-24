<?php

namespace App\Services;

use App\Repositories\UserRepository;

class TeacherService extends BaseService
{
    public $repo;
    
    public function __construct(UserRepository $userRepository)
    {
        $this->repo = $userRepository;
    }

    public function getTeachersWithSubjects()
    {
        return $this->repo->getAllTeachersWithSubjects();
    }
}