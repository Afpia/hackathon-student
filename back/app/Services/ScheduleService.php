<?php

namespace App\Services;

use App\Repositories\ScheduleRepository;

class ScheduleService extends BaseService
{
    public $repo;

    public function __construct(ScheduleRepository $scheduleRepository)
    {
        $this->repo = $scheduleRepository;
    }

    public function getSchedulesWithNotes(string $startDate, string $endDate)
    {
        return $this->repo->getSchedulesWithNotes($startDate, $endDate);
    }
}