import * as React from 'react'

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarRail,
	ToggleTheme
} from '@/shared/ui'
import { ChevronRight, CircleUserRound, GraduationCap, Newspaper } from 'lucide-react'
import Link from 'next/link'

const data = {
	projects: [
		{
			name: 'Профиль',
			url: '/profile',
			icon: CircleUserRound
		},
		{
			name: 'Преподаватели',
			url: '/teachers',
			icon: GraduationCap
		},
		{
			name: 'Новости',
			url: '/news',
			icon: Newspaper
		}
	]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible='icon' {...props}>
			<SidebarContent>
				<SidebarGroup className='group-data-[collapsible=icon]:block'>
					<SidebarGroupLabel>Главное</SidebarGroupLabel>
					<SidebarMenu>
						{data.projects.map((item) => (
							<SidebarMenuItem key={item.name}>
								<SidebarMenuButton asChild>
									<Link href={item.url}>
										<item.icon />
										<span>{item.name}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>
				<SidebarGroup className='p-0 group-data-[collapsible=icon]:block'>
					<SidebarGroupLabel>Смена темы</SidebarGroupLabel>
					<ToggleTheme />
				</SidebarGroup>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
