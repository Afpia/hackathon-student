import type { Metadata } from 'next'

import { LoginForm } from '@/entities/login-form'

export const metadata: Metadata = {
	title: 'Войти в аккаунт'
}

export default function LoginPage() {
	return (
		<div className='flex h-full items-center justify-center'>
			<LoginForm />
		</div>
	)
}
