<?php

namespace App\Repositories;

use App\Models\Group;

class GroupRepository extends BaseRepository
{
    public $model;

    public function __construct(Group $group)
    {
        $this->model = $group;
    }

    public function getStudentsInGroup(int $groupId)
    {
        $group = $this->model->with('students:id,name,email,phone,image_url')->findOrFail($groupId);

        return $group->students; 
    }
}