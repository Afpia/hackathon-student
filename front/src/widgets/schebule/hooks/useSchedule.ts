import { toastMessageHandler } from '@/shared/utils'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { DateRange } from 'react-day-picker'

export function useProfile(date: DateRange | undefined) {
	const {
		data: schedule,
		isLoading,
		refetch
	} = useQuery({
		queryKey: ['schedule'],
		queryFn: async () => {
			const startDate = date?.from?.toISOString().split('T')[0]
			const endDate = date?.to?.toISOString().split('T')[0]

			const response = await axios.post(`${process.env.SERVER_URL}/schedules/notes?start_date=${startDate}&end_date=${endDate}`)
			return response.data
		}
	})

	return {
		schedule,
		isLoading,
		refetch
	}
}
