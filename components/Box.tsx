import { FC, ReactNode} from 'react'
import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: ReactNode;
  classname?: string;
}

const Box : FC<BoxProps> = ({children, classname}) => {
  return (
    <div className={twMerge(`
    bg-neutral-900
    rounded-lg
    h-fit
    w-full
    `, classname)}>{children}</div>
  )
}

export default Box