import React, { ReactNode, AllHTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from './Topbar.module.css'

export interface ITopBarProps extends AllHTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

const TopBar: React.FC<ITopBarProps> = ({
  className,
  children,
}: ITopBarProps) => {
  return <div className={clsx(styles.topbar, className)}>{children}</div>
}

export default TopBar
