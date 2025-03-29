'use client'
import { ReactNode } from 'react'

const Pageheader = ({
    title,
    children,
}: {
    title: string
    children?: ReactNode
}) => {
    return (
        <div className="flex justify-between items-center min-h-16">
            <span className="text-lg font-mono font-semibold">{title}</span>
            <div className="flex gap-2 items-center">{children}</div>
        </div>
    )
}

export default Pageheader
