import React, { ReactNode, AllHTMLAttributes } from 'react'

import styles from './Card.module.css'
import clsx from 'clsx'

export interface ICardProps extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Card: React.FC<ICardProps> = ({
  children,
  className,
  ...others
}: ICardProps) => {
  return (
    <div className={clsx(styles.card, className)} {...others}>
      {children}
    </div>
  )
}
