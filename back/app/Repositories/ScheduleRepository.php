<?php

namespace App\Repositories;

use App\Models\Schedule;
use Illuminate\Support\Facades\Auth;

class ScheduleRepository extends BaseRepository
{
    public $model;

    public function __construct(Schedule $schedule)
    {
        $this->model = $schedule;
    }

    public function getSchedulesWithNotes(string $startDate, string $endDate)
    {
        return $this->model->with([
            'subject:id,name',
            'teacher:id,name,email',
            'group:id,name',
            'notes' => function ($query) {
                $query->where('student_id', Auth::id());
            },
            'notes.student:id,name,email'
        ])
            ->whereBetween('day', [$startDate, $endDate])
            ->orderBy('day')
            ->orderBy('pair_number')
            ->get()
            ->map(function ($schedule) {
                return [
                    'id' => $schedule->id,
                    'day' => $schedule->day,
                    'pair_number' => $schedule->pair_number,
                    'subject' => $schedule->subject ? $schedule->subject->name : null,
                    'teacher' => $schedule->teacher ? $schedule->teacher->name : null,
                    'group' => $schedule->group ? $schedule->group->name : null,
                    'notes' => $schedule->notes
                ];
            });
    }
}