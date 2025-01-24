<?php

namespace App\Repositories;

use App\Models\Grade;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class GradeRepository extends BaseRepository
{
    public function __construct()
    {
        //
    }

    public function getAverageGradesForGroup()
    {
        $userId = Auth::id();
        $now = Carbon::now();


        if ($now->month >= 1 && $now->month <= 6) {
            $startDate = Carbon::create($now->year - 1, 9, 1);
            $endDate = Carbon::create($now->year, 6, 30);
        } else {
            $startDate = Carbon::create($now->year, 9, 1);
            $endDate = Carbon::create($now->year + 1, 6, 30);
        }

        $user = User::findOrFail($userId);

        $group = $user->groups()->first();

        if (!$group) {
            return [
                'group_id' => null,
                'group_name' => null,
                'group_average_grades' => [],
                'user_average_grade' => 0,
            ];
        }

        $students = User::whereHas('groups', function ($query) use ($group) {
            $query->where('groups.id', $group->id);
        })->get();

        $averageGrades = $students->map(function ($student) use ($startDate, $endDate) {
            $averageGrade = Grade::where('student_id', $student->id)
                ->whereBetween('created_at', [$startDate, $endDate])
                ->avg('grade');

            return [
                'student_id' => $student->id,
                'student_name' => $student->name,
                'average_grade' => $averageGrade ?: 0,
            ];
        });

        $userAverageGrade = Grade::where('student_id', $userId)
            ->whereBetween('created_at', [$startDate, $endDate])
            ->avg('grade');

        $sortedGrades = $averageGrades->sortByDesc('average_grade')->values();

        $userData = $sortedGrades->firstWhere('student_id', $userId);
        if ($userData) {
            $sortedGrades = $sortedGrades->filter(function ($item) use ($userId) {
                return $item['student_id'] !== $userId;
            });
            $sortedGrades->prepend($userData);
        }

        return [
            'group_id' => $group->id,
            'group_name' => $group->name,
            'group_average_grades' => $sortedGrades,
            'user_average_grade' => $userAverageGrade ?: 0,
        ];
    }
}