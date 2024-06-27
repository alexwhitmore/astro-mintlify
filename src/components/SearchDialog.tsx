import { Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import { Input } from './ui/input'

export const SearchDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Search className='h-5 w-5' />
        </button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <Input
          id='search'
          type='search'
          placeholder='Search or ask for anything...'
          className='w-full'
        />
      </DialogContent>
    </Dialog>
  )
}
