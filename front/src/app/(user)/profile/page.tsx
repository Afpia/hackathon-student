import { Metadata } from 'next'
import { TeacherCard } from '@/entities/teacher-card'

export const metadata: Metadata = {
	title: 'Профиль'
}

export default function Teachers() {
	return (
		<>
			<h1 className='text-center text-[30px]'></h1>
		</>
	)
}
