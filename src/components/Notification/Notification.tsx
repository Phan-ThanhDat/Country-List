import React, { ReactNode } from 'react'
import clsx from 'clsx'

import styles from './Notification.module.css'

export interface INotificationProps {
  children: ReactNode
  className?: string
}

const Notification: React.FC<INotificationProps> = ({
  children,
  className,
}: INotificationProps) => {
  return (
    <span className={clsx(styles.notification, className)}>{children}</span>
  )
}
export default Notification
