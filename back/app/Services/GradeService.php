<?php

namespace App\Services;

use App\Repositories\GradeRepository;

class GradeService extends BaseService
{
    public $repo;

    public function __construct(GradeRepository $gradeRepository)
    {
        $this->repo = $gradeRepository;
    }

    public function getAverageGradesForGroup()
    {
        return $this->repo->getAverageGradesForGroup();
    }
}