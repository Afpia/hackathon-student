import { Metadata } from 'next'
import { cookies } from 'next/headers'

import React, { Suspense } from 'react'
import { BarChartStats } from '@/widgets/bar-chart'

export const metadata: Metadata = {
	title: 'Статистика'
}

export const revalidate = 60

export default async function Stats() {
	const cookieStore = await cookies()
	const token = cookieStore.get('token')?.value

	const data = await fetch(`${process.env.SERVER_URL}/grades/average`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then((res) => res.json())
		.catch((error) => console.error(error)) // убрать catch

	console.log(data)

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<BarChartStats data={data} />
		</Suspense>
	)
}
