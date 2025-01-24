'use client'

import { useQuery } from '@tanstack/react-query'
import { Metadata } from 'next'
import { fetchNews } from './_services/news'
import { toast } from 'sonner'
import { Skeleton } from '@/shared/ui'
import Image from 'next/image'

// export const metadata: Metadata = {
// 	title: 'Главная'
// }

export default function Home() {
	const {
		data: posts,
		isLoading,
		isError
	} = useQuery({
		queryKey: ['news'],
		queryFn: fetchNews
	})

	// if (isLoading) {
	// 	return (
	// 		<div className='flex flex-col space-y-3'>
	// 			<Skeleton className='h-[125px] w-[250px] rounded-xl' />
	// 			<div className='space-y-2'>
	// 				<Skeleton className='h-4 w-[250px]' />
	// 				<Skeleton className='h-4 w-[200px]' />
	// 			</div>
	// 		</div>
	// 	)
	// }

	if (isError) {
		toast.error('Ошибка загрузки новостей')
	}

	return (
		<>
			<h1 className='text-center text-[30px]'>Новости колледжа</h1>
			<div className='grid grid-cols-2 gap-4'>
				{isLoading &&
					Array.from({ length: 4 }).map((_, index) => (
						<div key={index} className='flex flex-col space-y-3 py-3'>
							<Skeleton className='h-[225px] w-[100%] rounded-xl' />
							<div className='space-y-2'>
								<Skeleton className='h-6 w-[400px]' />
								<Skeleton className='h-[80px] w-[350px]' />
							</div>
							<div className='flex items-center justify-between'>
								<Skeleton className='h-6 w-[100px]' />
								<Skeleton className='h-6 w-[50px]' />
							</div>
						</div>
					))}
				{!isLoading &&
					posts.map((post) => (
						<div key={post.id} className='flex flex-col space-y-3 py-3'>
							<Image src={post.image} alt={post.title} height={225} />
							<h2>{post.title}</h2>
							<p>{post.body}</p>
						</div>
					))}
			</div>
		</>
	)
}
