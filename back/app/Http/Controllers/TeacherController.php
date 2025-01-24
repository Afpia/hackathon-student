<?php

namespace App\Http\Controllers;

use App\Services\TeacherService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    use ApiResponse;

    private $service;

    public function __construct(TeacherService $teacherService)
    {
        $this->service = $teacherService;
    }

    public function index()
    {
        $teachers = $this->service->getTeachersWithSubjects();

        return $this->success(['teachers' => $teachers], 200);
    }
}
