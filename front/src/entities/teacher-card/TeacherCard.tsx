import { Avatar, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/ui'

export function TeacherCard() {
	return (
		<div className='grid grid-cols-4 pt-4'>
			<Card className='w-[300px]'>
				<CardHeader>
					<CardTitle className='flex flex-col items-center justify-center'>
						<Avatar className='h-24 w-24' />
						<p>Зина Ивановна</p>
					</CardTitle>
				</CardHeader>
				<CardContent className='flex flex-col'>
					<p>Предмет: Математика</p>
					<p>Телефон: +7 (999) 999-99-99</p>
					<p>Почта: zina@bk.ru</p>
				</CardContent>
			</Card>
			<Card className='w-[300px]'>
				<CardHeader>
					<CardTitle className='flex justify-center'>
						<Avatar className='h-24 w-24' />
					</CardTitle>
				</CardHeader>
				<CardContent className='text-center'>
					<p>Зина Ивановна</p>
					<p>+7 (999) 999-99-99</p>
				</CardContent>
			</Card>
			<Card className='w-[300px]'>
				<CardHeader>
					<CardTitle className='flex justify-center'>
						<Avatar className='h-24 w-24' />
					</CardTitle>
				</CardHeader>
				<CardContent className='text-center'>
					<p>Зина Ивановна</p>
					<p>+7 (999) 999-99-99</p>
				</CardContent>
			</Card>
			<Card className='w-[300px]'>
				<CardHeader>
					<CardTitle className='flex justify-center'>
						<Avatar className='h-24 w-24' />
					</CardTitle>
				</CardHeader>
				<CardContent className='text-center'>
					<p>Зина Ивановна</p>
					<p>+7 (999) 999-99-99</p>
				</CardContent>
			</Card>
		</div>
	)
}
