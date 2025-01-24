import { ToggleTheme } from '@/shared/ui'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from '@/shared/ui/NavigationMenu'
import Link from 'next/link'

export function Header() {
	return (
		<>
			<NavigationMenu className='gap-3'>
				<NavigationMenuList className='gap-3'>
					<NavigationMenuItem>
						<Link href='/home' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>Главная</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href='/profile' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>Профиль</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href='/teachers' legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>Преподаватели</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	)
}
