
import { Metadata } from 'next'
import { cookies } from 'next/headers'
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts'

import {
	Card,
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/shared/ui'
import React from 'react'

export const metadata: Metadata = {
	title: 'Статистика'
}

interface GradeData {
	id: number;
	name: string;
	average_grade: string; // Поскольку в вашем примере это строка
  }

export const revalidate = 60

const chartData = Array.from({ length: 20 }, (_, i) => ({
	element: i + 1,
	assessment: Math.random() * 5 + 1
}))

const chartConfig = {
	assessment: {
		label: 'Средняя оценка: ',
		color: 'hsl(var(--chart-1))'
	}
} satisfies ChartConfig

export default async function Stats() {
	const cookieStore = await cookies()
  	const token = cookieStore.get('token')?.value

	const { data } = await fetch(`${process.env.SERVER_URL}/grades/average`, {
		method: 'GET',
		headers: {
			'Authorization': `Bearer ${token}`,
		}
	})
		.then((res) => res.json())
		.catch((error) => console.error(error))

	
	// const chartData = data.group_average_grades
	// console.log(chartData)
	// const chartData = Object.values(data?.group_average_grades || {})

	// console.log(chartData)


	return (
		<Card>
			<CardHeader>
				<CardTitle>Итоговый рейтинг за год</CardTitle>
				<CardDescription>
					{new Date().getFullYear()} - {new Date().getFullYear() + 1}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<YAxis tickLine={false} domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} axisLine={false} tickMargin={20} />
						<XAxis dataKey='id' tickLine={false} axisLine={false} tickMargin={20} />
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Bar dataKey='average_grade' radius={8}>
							{chartData?.map((_, index) => (
								<Cell cursor='pointer' fill={index === 0 ? '#82ca9d' : 'hsl(var(--chart-1))'} key={`cell-${index}`} />
							))}
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
