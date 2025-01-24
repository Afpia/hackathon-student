import { PersonalForm } from '@/entities/personal-form'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Личные данные'
}

export default function Personal() {
	return (
		<div className='flex justify-center h-full items-center'>
			<PersonalForm />
		</div>
	)
}
