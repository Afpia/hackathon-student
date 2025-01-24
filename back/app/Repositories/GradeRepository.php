<?php

namespace App\Repositories;

use App\Models\Grade;
use App\Models\User;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Auth;

class GradeRepository extends BaseRepository
{
    public function __construct()
    {
        //
    }

    public function getAverageGradesForGroup()
    {
        $user = Auth::user();
        $userId = $user->id;
        $now = Carbon::now();

        if ($now->month >= 1 && $now->month <= 6) {
            $startDate = Carbon::create($now->year - 1, 9, 1);
            $endDate = Carbon::create($now->year, 6, 30);
        } else {
            $startDate = Carbon::create($now->year, 9, 1);
            $endDate = Carbon::create($now->year + 1, 6, 30);
        }

        $group = $user->groups()->first();

        if (!$group) {
            return null;
        }

        $studentsInGroup = DB::table('group_student')
            ->join('users', 'group_student.student_id', '=', 'users.id')
            ->join('grades', 'grades.student_id', '=', 'users.id')
            ->join('schedules', 'grades.schedule_id', '=', 'schedules.id')
            ->where('group_student.group_id', $group->id)
            ->whereBetween('schedules.day', [$startDate, $endDate])
            ->select('users.id', 'users.name', DB::raw('AVG(grades.grade) as average_grade'))
            ->groupBy('users.id')
            ->orderByDesc('average_grade')
            ->get();

        $studentsInGroup = $studentsInGroup->sortByDesc(function ($student) use ($userId) {
            return $student->id === $userId ? 1 : 0;
        });

        return [
            'group_id' => $group->id,
            'group_name' => $group->name,
            'students' => $studentsInGroup,
        ];
    }
}