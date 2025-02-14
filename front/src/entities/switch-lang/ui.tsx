'use client'

import { Locale } from '@/i18n/config'
import { setUserLocale } from '@/i18n/locale'
import { useLocale, useTranslations } from 'next-intl'
import { useRouter } from 'next/router'

export default function SwitchLang() {
	const t = useTranslations('HomePage')
	const locale = useLocale()
	// const { locale, push, pathname, query, asPath } = useRouter()

	const switchLanguage = (value: string) => {
		const locale = value as Locale
		// startTransition(() => {
		setUserLocale(locale)
		// })
	}

	return (
		<div>
			<p>
				{t('title')} {locale}
			</p>
			<button onClick={() => switchLanguage('en')}>English</button>
			<button onClick={() => switchLanguage('ru')}>Русский</button>
		</div>
	)
}
