import { BarChartStats } from '@/widgets/bar-chart'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Статистика'
}

export default function Stats() {
	return (
		<div className='w-[50%] h-[50%]'>
			<BarChartStats />
		</div>
	)
}
