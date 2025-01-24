<?php

namespace App\Http\Controllers;

use App\Services\GroupService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class GroupController extends Controller
{
    use ApiResponse;

    private $service;

    public function __construct(GroupService $groupService)
    {
        $this->service = $groupService;
    }
    public function getStudentsInGroup(int $groupId)
    {
        $students = $this->service->getStudentsInGroup($groupId);

        return $this->success(['students' => $students]);
    }
}
