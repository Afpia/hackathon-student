import { Metadata } from 'next'
import { TeacherCard } from '@/entities/teacher-card'

export const metadata: Metadata = {
	title: 'Преподаватели'
}

export default function Teachers() {
	return <TeacherCard />
}
