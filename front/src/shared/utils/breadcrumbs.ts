export function breadcrumbs(pathname: string): { href?: string; label: string }[] {
	switch (pathname) {
		case '/stats':
			return [{ href: '/personal', label: 'Профиль' }, { label: 'Статистика' }]
		case '/teachers':
			return [{ label: 'Преподаватели' }]
		case '/personal':
			return [{ href: '/personal', label: 'Профиль' }, { label: 'Личные данные' }]
		case '/schedule':
			return [{ href: '/personal', label: 'Профиль' }, { label: 'Расписание' }]
		case '/news':
			return [{ label: 'Новости' }]
		default:
			return [{ label: 'Неизвестная страница' }]
	}
}
