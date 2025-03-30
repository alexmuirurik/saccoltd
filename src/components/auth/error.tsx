'use client'
import { useSearchParams } from 'next/navigation'

const Error = () => {
    const searchParams = useSearchParams()
    const error = searchParams.get('error')
    const accessDenied = error === 'AccessDenied' && 'Sorry access Was Denied'
    return (
        error && (
            <div className="bg-red-400 rounded-lg text-center p-4">
                <span className="text-white">{accessDenied}</span>
            </div>
        )
    )
}

export default Error
