// @ts-nocheck
import { Check, Copy } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

export const CodeTabs = ({ tabs }: any) => {
  return (
    <Tabs className='w-full'>
      <div className='flex justify-between items-center border-b'>
        <TabsList className='flex'>
          {tabs.map((tab) => (
            <TabsTrigger
              value={tab.label}
              className='px-4 py-2 text-sm text-gray-400 relative group'>
              <span className='relative z-10 text-xs'>{tab.label}</span>
              <span className='absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 rounded-md m-[6px] mb-[6px]' />
              <span className='absolute bottom-0 left-0 w-full h-[1px] bg-green-400 hidden data-[state=active]:block' />
            </TabsTrigger>
          ))}
        </TabsList>
        <button className='copy-button rounded text-sm z-10 mr-2 flex items-center hover:text-muted-foreground'>
          <span className='copy-text'>
            <Copy className='w-4 h-4' />
          </span>
          <span className='check-icon hidden'>
            <Check className='w-4 h-4 text-green-700' />
          </span>
        </button>
      </div>
      {tabs.map((tab) => (
        <TabsContent value={tab.label}>
          test
          {/* <Code
            code={tab.code}
            lang={tab.lang}
            theme='dark-plus'
            className='pb-3 pt-3 pl-2 bg-rose-400'
          /> */}
        </TabsContent>
      ))}
    </Tabs>
  )
}
