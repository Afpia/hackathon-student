import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Cookies from 'js-cookie'

import { toastMessageHandler } from '@/shared/utils'

import type { TypeLoginSchema } from '../scheme'

import axios from 'axios'

export function useLoginMutation() {
	const router = useRouter()

	const { mutate: login, isPending: isLoadingLogin } = useMutation({
		mutationKey: ['login user'],
		mutationFn: async ({ values }: { values: TypeLoginSchema }) => {
			const response = await axios.post(`${process.env.SERVER_URL}/login`, {
				...values
			})
			return response.data
		},
		onSuccess(data: any) {
			if (data.message) {
				toastMessageHandler(data)
			} else {
				router.push('/personal')
				
				Cookies.set('token', data.data.access_token, {
					expires: 7,
					sameSite: 'Strict'
				})

				toast.success('Успешная авторизация')
			}
		},
		onError(error) {
			toastMessageHandler(error)
		}
	})

	return { login, isLoadingLogin }
}
