import { Book, Newspaper, Slack } from 'lucide-react'
import React from 'react'

const iconMapping: { [key: string]: React.ComponentType<any> } = {
  book: Book,
  slack: Slack,
  newspaper: Newspaper,
}

interface IconComponentProps {
  iconName: string
  className?: string
}

export const Icon: React.FC<IconComponentProps> = ({ iconName, className }) => {
  const Icon = iconMapping[iconName.toLowerCase()]
  return Icon ? <Icon className={className} aria-hidden='true' /> : null
}
