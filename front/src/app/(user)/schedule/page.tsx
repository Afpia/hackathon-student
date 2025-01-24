import { ScheduleList } from '@/widgets/schebule'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Расписание'
}

export default function Schedule() {
	return <ScheduleList />
}
