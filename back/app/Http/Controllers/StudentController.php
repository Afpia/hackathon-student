<?php

namespace App\Http\Controllers;

use App\Services\StudentService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    use ApiResponse;
    
    private $service;

    public function __construct(StudentService $studentService)
    {
        $this->service = $studentService;
    }

    public function show($id)
    {
        $student = $this->service->find($id);

        return $this->success(['student' => $student]);
    }

    public function profile()
    {
        $student = $this->service->getUserProfileWithGroup();

        return $this->success(['student' => $student]);
    }
}
