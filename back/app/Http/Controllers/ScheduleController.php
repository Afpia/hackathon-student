<?php

namespace App\Http\Controllers;

use App\Services\ScheduleService;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    use ApiResponse;
    
    private $service;

    public function __construct(ScheduleService $scheduleService)
    {
        $this->service = $scheduleService;
    }

    public function getSchedulesWithNotes(Request $request)
    {
        $startDate = $request->query('start_date');
        $endDate = $request->query('end_date');

        $schedules = $this->service->getSchedulesWithNotes($startDate, $endDate);

        return $this->success(['schedules' => $schedules]);
    }
}
