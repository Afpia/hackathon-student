import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { MainProvider } from '@/shared/providers'
import { ToggleTheme } from '@/shared/ui'

import '@/shared/styles/globals.css'
import { Header } from '@/entities/header'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: {
		absolute: 'Личный кабинет пользователя',
		template: '%s | Личный кабинет пользователя'
	},
	description: 'Это хакатон проект, созданный для победы в хакатоне'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={geistSans.variable}>
				<MainProvider>
					<div className='h-screen w-full'>{children}</div>
				</MainProvider>
			</body>
		</html>
	)
}
