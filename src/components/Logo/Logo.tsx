import React, { AllHTMLAttributes } from 'react'
import clsx from 'clsx'

import styles from './Logo.module.css'
import Typo, { TypoVariants, TypoColors, TypoAlignment } from '../Typo'

export interface ILogoProps extends AllHTMLAttributes<HTMLDivElement> {
  logo?: string
  company: string
  className?: string
}

const Logo: React.FC<ILogoProps> = ({
  logo,
  company,
  className,
  ...others
}: ILogoProps) => {
  return (
    <div className={className} {...others}>
      {logo ? (
        <img
          className={clsx(styles.logo, styles.logoWithIcon)}
          src={logo}
          alt={company}
        />
      ) : (
        <Typo
          variant={TypoVariants.h4}
          color={TypoColors.white}
          align={TypoAlignment.middle}
          className={clsx(styles.logo, styles.logoDefault)}
        >
          {company[0].toUpperCase()}
        </Typo>
      )}
    </div>
  )
}
export default Logo
