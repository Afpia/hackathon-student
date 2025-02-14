import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { MainProvider } from '@/shared/providers'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import '@/shared/styles/globals.css'

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

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={geistSans.variable}>
				<MainProvider messages={messages} locale={locale}>
					<div className='h-screen w-full'>{children}</div>
				</MainProvider>
			</body>
		</html>
	)
}
