<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StudentController extends Controller
{
    private $service;

    public function __construct(StudentService $studentService)
    {
        $this->service = $studentService;
    }

    public function show()
    {
        $student = $this->service->getStudentWithSubjects();
    }

    
}
