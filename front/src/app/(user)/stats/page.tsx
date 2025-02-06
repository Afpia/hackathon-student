import { Metadata } from 'next'

import React, { Suspense } from 'react'
import { BarChartStats } from '@/widgets/bar-chart'

export const metadata: Metadata = {
	title: 'Статистика'
}

export const revalidate = 60

export default async function Stats() {
	const data = await fetch(`${process.env.SERVER_URL}/grades/average`).then((res) => res.json())

	console.log(data)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BarChartStats data={data} />
		</Suspense>
	)
}
