'use client'

import { DatePickerWithRange } from '@/entities/data-picker'
import { Button, Calendar, Form, FormField, Popover, PopoverContent, PopoverTrigger } from '@/shared/ui'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/shared/utils'
import { CalendarIcon } from 'lucide-react'
import { ru } from 'date-fns/locale'
import { addDays, format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { useState } from 'react'
import { useProfile } from './hooks/useSchedule'

const FormSchema = z.object({
	from: z.date({
		required_error: 'Дата обязательна'
	}),
	to: z.date({
		required_error: 'Дата обязательна'
	})
})

export function ScheduleList() {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 7)
	})

	const { schedule, isLoading, refetch } = useProfile(date)

	const onSubmit = () => {
		refetch()
	}

	console.log(schedule, isLoading)

	return (
		<div className='flex gap-2'>
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
							<span>Выбрать день</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<Calendar initialFocus mode='range' defaultMonth={date?.from} selected={date} onSelect={setDate} max={7} locale={ru} />
				</PopoverContent>
			</Popover>
			<Button onClick={onSubmit}>Получить расписание</Button>
		</div>
	)
}
