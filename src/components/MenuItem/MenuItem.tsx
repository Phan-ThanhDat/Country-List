import React, { AllHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

import Typo, { TypoColors } from '../Typo'
import styles from './MenuItem.module.css'

export interface IMenuItemProps extends AllHTMLAttributes<HTMLLIElement> {
  color?: TypoColors
  children: ReactNode
  selected?: boolean
}

const MenuItem: React.FC<IMenuItemProps> = ({
  color,
  children,
  selected,
  className,
  ...others
}: IMenuItemProps) => {
  return (
    <Typo
      tag="li"
      className={clsx(styles.wrap, className, selected && styles.selected)}
      color={color}
      {...others}
    ></Typo>
  )
}

export default MenuItem
