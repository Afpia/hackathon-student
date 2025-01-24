'use client'

import { TrendingUp } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from 'recharts'

import {
	Card,
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui'

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

export function BarChartStats() {
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
						<XAxis dataKey='element' tickLine={false} axisLine={false} tickMargin={20} />
						<ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
						<Bar dataKey='assessment' radius={8}>
							{chartData.map((_, index) => (
								<Cell cursor='pointer' fill={index === 0 ? '#82ca9d' : 'var(--color-desktop)'} key={`cell-${index}`} />
							))}
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
