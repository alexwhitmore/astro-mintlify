import type { Anchor, NavigationItem } from '../types'
import { Icon } from './Icon'
import { ScrollArea } from './ui/scroll-area'

interface SidebarContentProps {
  anchors: Anchor[]
  navigation: NavigationItem[]
  currentPath: string
}

function isActive(pageUrl: string, currentPath: string) {
  const normalizedPageUrl = pageUrl === '/' ? '/' : pageUrl.replace(/\/$/, '')
  const isExactMatch = currentPath === normalizedPageUrl
  const isParentMatch = currentPath.startsWith(normalizedPageUrl + '/')
  return isExactMatch || isParentMatch
}

export function SidebarContent({
  anchors,
  navigation,
  currentPath,
}: SidebarContentProps) {
  return (
    <ScrollArea className='h-[calc(100vh-8rem)] pr-8'>
      <nav className='flex flex-1 flex-col'>
        <ul role='list' className='flex flex-1 flex-col gap-y-7 mb-10'>
          <li>
            <ul role='list' className='space-y-1'>
              {anchors.map((anchor) => (
                <li key={anchor.url}>
                  <a
                    href={anchor.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group flex gap-x-3 rounded-md py-1 px-2 text-sm font-medium leading-6 items-center text-muted-foreground hover:text-foreground'>
                    <div className='border rounded-md p-1 group-hover:bg-primary/30'>
                      <Icon
                        iconName={anchor.icon}
                        className={`${
                          anchor.icon === 'discord'
                            ? 'group-hover:fill-primary'
                            : 'group-hover:text-primary'
                        } h-4 w-4 text-muted-foreground`}
                      />
                    </div>
                    {anchor.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          {navigation.map(({ pages, group }) => (
            <li key={group}>
              <div className='flex flex-col gap-y-2'>
                <div className='text-sm font-medium px-2'>{group}</div>
                <ul className='space-y-1'>
                  {pages.map((page) => {
                    const active = isActive(page.url, currentPath)
                    return (
                      <li key={page.url} className='relative'>
                        <a
                          href={page.url}
                          className={`block px-2 py-1 rounded-md text-sm font-light ${
                            active
                              ? 'text-primary bg-primary/10'
                              : 'hover:bg-primary/10 hover:text-primary text-muted-foreground'
                          }`}>
                          {page.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </ScrollArea>
  )
}
