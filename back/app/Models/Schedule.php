<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject_id',
        'teacher_id',
        'group_id',
        'day',
        'pair_number',
    ];

    public function notes()
    {
        return $this->hasMany(Note::class, 'schedule_id');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function teacher()
    {
        return $this->belongsTo(User::class, 'teacher_id')->where('type', 'teacher');
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }
}
