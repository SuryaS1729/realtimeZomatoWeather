import  { type ReactNode } from 'react'

type Props = {
  title:string
    children: ReactNode
    childrenClassName?: string
}

export default function Card({children, title, childrenClassName}: Props) {
  return (
    <div className='p-4 rounded-xl bg-zinc-900 flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold '>{title}</h1>
      <div className={childrenClassName}>{children}</div>
    </div>
  )
}