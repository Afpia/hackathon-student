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
        $userId = Auth::id();

        return $this->model->with([
            'subject:id,name',
            'teacher:id,name,email',
            'group:id,name',
            'grades' => function ($query) use ($userId) {
                $query->where('student_id', $userId);
            },
            'notes' => function ($query) use ($userId) {
                $query->where('student_id', $userId);
            },
            'notes.student:id,name,email'
        ])
            ->whereHas('group.students', function ($query) use ($userId) {
                $query->where('student_id', $userId);
            })
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
                    'notes' => $schedule->notes,
                    'grades' => $schedule->grades->map(function ($grade) {
                        return [
                            'grade' => $grade->grade,
                            'comment' => $grade->comment
                        ];
                    }),
                ];
            });
    }
}