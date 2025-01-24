<?php

namespace App\Services;

use App\Repositories\GroupRepository;

class GroupService extends BaseService
{
    public $repo;

    public function __construct(GroupRepository $groupRepository)
    {
        $this->repo = $groupRepository;
    }

    public function getStudentsInGroup(int $groupId)
    {
        return $this->repo->getStudentsInGroup($groupId);
    }
}