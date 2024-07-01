import {
  Lightbulb as Callout,
  Info,
  TriangleAlert as Warning,
} from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../../components/ui/alert'

interface Props {
  alertTitle: string
  alertDescription: string
  variant: 'note' | 'warning' | 'info' | 'callout'
}

const iconMapping = {
  callout: <Callout className='h-4 w-4' />,
  warning: <Warning className='h-4 w-4' />,
  info: <Info className='h-4 w-4' />,
  note: <Info className='h-4 w-4' />,
}

const AlertComponent = ({ alertTitle, alertDescription, variant }: Props) => {
  const IconComponent = iconMapping[variant]

  return (
    <Alert
      variant={variant}
      className={`flex ${!alertTitle ? 'items-center' : ''}`}>
      {IconComponent}
      <div>
        <AlertTitle className='mt-1'>{alertTitle}</AlertTitle>
        <AlertDescription>{alertDescription}</AlertDescription>
      </div>
    </Alert>
  )
}

export default AlertComponent
