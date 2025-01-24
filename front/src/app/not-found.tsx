import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Страница не найдена'
}

export default function NotFound() {
	return <div className='space-y-5 text-center'>Такой страницы не существует</div>
}
