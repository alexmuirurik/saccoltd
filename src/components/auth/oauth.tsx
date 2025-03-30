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
        setLoading(false)
    }
    return (
        <form className="w-full" action={onFormSubmit}>
            <LoadingButton
                className="gap-2 w-full cursor-pointer"
                loading={Loading}
            >
                {provider === 'google' ? <FcGoogle /> : <FaGithub />} Sign in
                with {title}
            </LoadingButton>
        </form>
    )
}

export default OauthForm
