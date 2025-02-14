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
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarRail,
	ToggleTheme
} from '@/shared/ui'
import { ChevronRight, CircleUserRound, GraduationCap, Newspaper } from 'lucide-react'
import Link from 'next/link'
import SwitchLang from '@/entities/switch-lang/ui'

const data = {
	main: [
		{
			name: 'Профиль',
			icon: CircleUserRound,
			items: [
				{
					title: 'Личные данные',
					url: '/personal'
				},
				{
					title: 'Расписание',
					url: '/schedule'
				},
				{
					title: 'Статистика',
					url: '/stats'
				}
			]
		}
	],
	second: [
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
						{data.main.map((item) => (
							<Collapsible key={item.name} asChild defaultOpen className='group/collapsible'>
								<SidebarMenuItem>
									<CollapsibleTrigger asChild>
										<SidebarMenuButton tooltip={item.name}>
											{item.icon && <item.icon />}
											<span>{item.name}</span>
											<ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
										</SidebarMenuButton>
									</CollapsibleTrigger>
									<CollapsibleContent>
										<SidebarMenuSub>
											{item.items?.map((subItem) => (
												<SidebarMenuSubItem key={subItem.title}>
													<SidebarMenuSubButton asChild>
														<Link href={subItem.url}>
															<span>{subItem.title}</span>
														</Link>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											))}
										</SidebarMenuSub>
									</CollapsibleContent>
								</SidebarMenuItem>
							</Collapsible>
						))}
						{data.second.map((item) => (
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
					<SwitchLang />
				</SidebarGroup>
				<SidebarGroup className='p-0 group-data-[collapsible=icon]:block'>
					<SidebarGroupLabel>Смена темы</SidebarGroupLabel>
					<ToggleTheme />
				</SidebarGroup>
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
