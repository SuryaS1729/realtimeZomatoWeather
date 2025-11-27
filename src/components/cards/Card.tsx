import React, { type ReactNode } from 'react'

type Props = {
  title:string
    children: ReactNode
}

export default function Card({children, title}: Props) {
  return (
    <div className='p-4 rounded-xl bg-zinc-900 flex flex-col gap-4'>
      <h1 className='text-2xl font-semibold '>{title}</h1>
      <div>{children}</div>
    </div>
  )
}