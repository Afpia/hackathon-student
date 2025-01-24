<?php

namespace App\Services;

use App\Repositories\UserRepository;

class StudentService extends BaseService
{   
    public $repo;

    public function __construct(UserRepository $userRepository)
    {
        $this->repo = $userRepository;
    }

    public function getUserProfileWithGroup()
    {
        return $this->repo->getUserProfileWithGroup();
    }
}