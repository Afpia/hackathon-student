import { type NextRequest, NextResponse } from 'next/server'
import Cookies from 'js-cookie'

export default function middleware(request: NextRequest) {
	const { url, cookies } = request

	const session = cookies.get('token')?.value

	const isAuthPage = url.includes('/auth')

	if (request.nextUrl.pathname === '/') {
		return NextResponse.redirect(new URL('/personal', url))
	}

	if (isAuthPage) {
		if (session) {
			return NextResponse.redirect(new URL('/personal', url))
		}

		return NextResponse.next()
	}

	if (!session) {
		return NextResponse.redirect(new URL('/auth/login', url))
	}
}

export const config = {
	// matcher: ['/auth/login', '/']
	matcher: ['/auth/login', '/personal', '/schedule', '/stats', '/news', '/teachers', '/']
}
