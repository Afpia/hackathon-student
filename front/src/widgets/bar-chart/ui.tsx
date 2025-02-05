'use client'

import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/shared/ui'

const chartData = Array.from({ length: 20 }, (_, i) => ({
	id: i + 1,
	average_grade: Math.floor(Math.random() * 5 + 1)
}))

const chartConfig = {
	assessment: {
		label: 'Средняя оценка'
	}
} satisfies ChartConfig

export function BarChartStats({ data }: any) {
	const chartData = Object.values(data?.group_average_grades || {})

	console.log(chartData)

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
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel hideIndicator />} />
						<Bar dataKey='average_grade' name='assessment' radius={8}>
							{chartData?.map((_, index) => (
								<Cell cursor='pointer' fill={index === 0 ? '#82ca9d' : 'hsl(var(--chart-1))'} key={`${index}-cell`} />
							))}
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
