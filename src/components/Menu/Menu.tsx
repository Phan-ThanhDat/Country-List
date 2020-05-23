import React, { ReactNode, AllHTMLAttributes } from 'react'
import Typo, { TypoColors } from '../Typo'
import clsx from 'clsx'

import styles from './Menu.module.css'
export interface IMenuProps extends AllHTMLAttributes<HTMLUListElement> {
  color: TypoColors
  children: ReactNode
}

export const Menu: React.FC<IMenuProps> = ({
  children,
  className,
  color,
  ...others
}: IMenuProps) => {
  return (
    <Typo
      tag="ul"
      className={clsx(styles.wrap, className)}
      color={color}
      {...others}
    >
      {children}
    </Typo>
  )
}
