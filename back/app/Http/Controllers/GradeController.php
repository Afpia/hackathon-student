<?php

namespace App\Http\Controllers;

use App\Services\GradeService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class GradeController extends Controller
{
    use ApiResponse;

    private $service;

    public function __construct(GradeService $gradeService)
    {
        $this->service = $gradeService;
    }

    public function getAverageGradesForGroup()
    {
        $data = $this->service->getAverageGradesForGroup();

        return $this->success([
            'group_id' => $data['group_id'],
            'group_name' => $data['group_name'],
            'group_average_grades' => $data['students'],
        ]);
    }
}
