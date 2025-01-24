import { DatePickerWithRange } from '@/entities/data-picker'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Расписание'
}

export default function Schedule() {
	return (
		<div className=''>
			<DatePickerWithRange />
		</div>
	)
}
