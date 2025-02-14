import { ScheduleList } from '@/widgets/schedule'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Расписание'
}

export default function Schedule() {
	return <ScheduleList />
}
