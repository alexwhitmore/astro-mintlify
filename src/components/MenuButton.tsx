import { Menu, Orbit } from 'lucide-react'
import { Icon } from '../components/Icon'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/Sheet'
import { ScrollArea } from './ui/scroll-area'
const siteConfig = import.meta.env.SITE_CONFIG

const { anchors, navigation } = siteConfig

export const MenuButton = ({ path }: { path: string }) => {
  return (
    <div className='lg:hidden flex'>
      <Sheet>
        <SheetTrigger asChild>
          <button aria-label='Menu'>
            <Menu className='w-5 h-5' />
          </button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader>
            <SheetTitle className='text-left flex gap-2 items-center'>
              <Orbit className='w-6 h-6' />
              astro docs
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className='h-[calc(100vh-5rem)] mt-5'>
            <ul
              role='list'
              className='flex flex-1 flex-col gap-y-7 pl-2 mr-5 mb-10'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                  {anchors.map((anchor) => (
                    <li key={anchor.url}>
                      <a
                        href={anchor.url}
                        className='group flex gap-x-3 rounded-md py-1 text-sm font-medium leading-6 items-center text-muted-foreground hover:text-foreground'>
                        <div className='border rounded-md p-1 group-hover:bg-primary/30 group-hover:text-primary'>
                          <Icon iconName={anchor.icon} className='h-4 w-4' />
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
                    <div className='text-sm font-medium'>{group}</div>
                    <ul className='space-y-1'>
                      {pages.map((page) => (
                        <li key={page.url} className='relative'>
                          <a
                            href={page.url}
                            className={
                              path === `/${page.url}`
                                ? 'text-primary bg-primary/30 block -ml-2 pl-2 py-1 pr-2 rounded-md text-sm font-light'
                                : 'block -ml-2 pl-2 hover:bg-primary/30 py-1 pr-2 rounded-md text-sm font-light hover:text-primary text-muted-foreground'
                            }>
                            {page.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  )
}
