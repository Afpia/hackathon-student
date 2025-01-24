'use client'

import { usePathname } from 'next/navigation'

export function BreadcrumbCurrent({ first, second }: { first?: boolean; second?: boolean }) {
	const pathname = usePathname()

	const breadcrumb = (() => {
		switch (pathname) {
			case '/profile':
				return ['Пользователь', 'Профиль']
			case '/teachers':
				return ['Пользователь', 'Преподаватели']
			case '/teachers':
				return ['Пользователь', 'Преподаватели']
			case '/news':
				return ['Пользователь', 'Новости']
			default:
				return ['Пользователь', 'Неизвестная страница']
		}
	})()

	return (
		<>
			{first && <span>{breadcrumb[0]}</span>}
			{second && <span>{breadcrumb[1]}</span>}
		</>
	)
}
