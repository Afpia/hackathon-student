'use client'

import {
	Button,
	Calendar,
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
	Popover,
	PopoverContent,
	PopoverTrigger,
	Separator,
	Skeleton,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/ui'
import { cn } from '@/shared/utils'
import { CalendarIcon } from 'lucide-react'
import { ru } from 'date-fns/locale'
import { addDays, format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { Fragment, useState } from 'react'
import { useProfile } from './hooks/useSchedule'
import Image from 'next/image'

const pairTimes = {
	1: '7:50',
	2: '9:30',
	3: '11:15',
	4: '12:45',
	5: '13:35',
	6: '15:10',
	7: '16:50',
	8: '18:20'
}

export function ScheduleList() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 6)
	})

	const { schedule, isLoading, refetch } = useProfile(date)

	const onSubmit = () => {
		refetch()
	}

	const uniqueDays = [...new Set(schedule?.data?.schedules.map((item: any) => item.day))].slice(0, 3) as string[]

	return (
		<>
			<div className='mb-4 flex gap-2'>
				<Popover>
					<PopoverTrigger asChild>
						<Button
							id='date'
							variant={'outline'}
							className={cn('w-[300px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
						>
							<CalendarIcon />
							{date?.from ? (
								date.to ? (
									<>
										{format(date.from, 'd.MM.y', { locale: ru })} - {format(date.to, 'd.MM.y', { locale: ru })}
									</>
								) : (
									format(date.from, 'd.MM.y', { locale: ru })
								)
							) : (
								<span>Выбрать дату</span>
							)}
						</Button>
					</PopoverTrigger>
					<PopoverContent className='w-auto p-0' align='start'>
						<Calendar
							initialFocus
							mode='range'
							defaultMonth={date?.from}
							selected={date}
							onSelect={setDate}
							max={7}
							locale={ru}
						/>
					</PopoverContent>
				</Popover>
				<Button onClick={onSubmit}>Получить расписание</Button>
			</div>
			{!isLoading && uniqueDays.length === 0 && (
				<div className='flex h-[500px] w-full items-center justify-center'>
					<Image src={'no-data.svg'} alt='no-data' width={250} height={250} />
				</div>
			)}
			<div className='grid grid-cols-2 gap-2'>
				{isLoading &&
					Array.from({ length: 4 }).map((_, index) => (
						<div key={index}>
							<Skeleton className='h-[360px] w-[100%] rounded-xl' />
						</div>
					))}
				{!isLoading &&
					uniqueDays?.map((item: string, index) => (
						<Card className='w-[100%]' key={index}>
							<CardHeader className='space-y-2'>
								<CardTitle>
									{item} - {format(new Date(item), 'EEEE', { locale: ru })}{' '}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead className='w-[100px]'>№</TableHead>
											<TableHead className='text-right'>Начало</TableHead>
											<TableHead>Предмет</TableHead>
											<TableHead>Преподаватель</TableHead>
											<TableHead className='text-right'>Оценка</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{schedule?.data?.schedules
											.filter((schedule: any) => schedule.day.includes(item))
											.map((item: any) => (
												<TableRow key={item.id}>
													<TableCell className='font-medium'>{item.pair_number}</TableCell>
													<TableHead className='text-right'>{pairTimes[item.pair_number as keyof typeof pairTimes]}</TableHead>
													<TableCell>{item.subject}</TableCell>
													<TableCell>{item.teacher}</TableCell>
													<TableCell className='flex justify-end gap-2'>
														{item?.grades?.map((gradeMap: any, indexMap: number) => (
															<Fragment key={indexMap}>
																<span>{gradeMap.grade}</span>
																{indexMap < item.grades.length - 1 && <span>|</span>}
															</Fragment>
														))}
													</TableCell>
												</TableRow>
											))}
									</TableBody>
								</Table>
							</CardContent>
							<CardFooter>
								<Button>Сделать заметку</Button>
							</CardFooter>
						</Card>
					))}
			</div>
		</>
	)
}
