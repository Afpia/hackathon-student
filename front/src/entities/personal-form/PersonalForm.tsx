'use client'

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input
} from '@/shared/ui'
import { useForm } from 'react-hook-form'

export function PersonalForm() {
	const form = useForm<any>({
		// resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: ''
		}
	})
	// const { login, isLoadingLogin } = useLoginMutation(setIsShowFactor)

	const onSubmit = (values: any) => {
		console.log(values)
	}

	return (
		<Card className='w-[400px]'>
			<CardHeader className='space-y-2'>
				<CardTitle>Личные данные пользователя</CardTitle>
				<CardDescription>Можно просмотреть свои данные</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex justify-center'>
					<Avatar className='h-24 w-24'>
						<AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>

				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-2 space-y-2'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }: any) => (
								<FormItem>
									<FormLabel>Почта</FormLabel>
									<FormControl>
										<Input placeholder='Почта кента' disabled={true} type='email' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='group'
							render={({ field }: any) => (
								<FormItem>
									<FormLabel>Инициалы</FormLabel>
									<FormControl>
										<Input placeholder='Никита Галкин' disabled={true} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='group'
							render={({ field }: any) => (
								<FormItem>
									<FormLabel>Группа</FormLabel>
									<FormControl>
										<Input placeholder='21веб-2' disabled={true} {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* <FormField
							control={form.control}
							name='password'
							render={({ field }: any) => (
								<FormItem>
									<FormLabel>Пароль</FormLabel>
									<FormControl>
										<Input placeholder='******' disabled={true} type='password' {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/> */}
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
