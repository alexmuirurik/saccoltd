'use client'
import { useState } from 'react'
import { LoadingButton } from '../ui/loadingbutton'
import { signInAction } from './signin'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa6'

const OauthForm = ({
    provider,
    title,
}: {
    provider: string
    title: string
}) => {
    const [Loading, setLoading] = useState(false)
    const onFormSubmit = async () => {
        setLoading(true)
        await signInAction(provider)
        setTimeout(() => setLoading(false), 5000)
    }
    return (
        <LoadingButton
            loading={Loading}
            className="gap-2 w-full cursor-pointer"
            onClick={onFormSubmit}
        >
            {provider === 'google' ? <FcGoogle /> : <FaGithub />} Sign in with{' '}
            {title}
        </LoadingButton>
    )
}

export default OauthForm
