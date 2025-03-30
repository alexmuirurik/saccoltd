import { Input } from '@/components/ui/input'
import { LoadingButton } from '@/components/ui/loadingbutton'
import { Separator } from '@/components/ui/separator'
import { auth } from '../../../auth'
import { redirect } from 'next/navigation'
import OauthForm from '@/components/auth/oauth'
import Error from '@/components/auth/error'

const GetStartedPage = async () => {
    const session = await auth()
    if (session?.user) return redirect('/')
    return (
        <main className="h-svh w-svw overflow-hidden">
            <div className="flex items-center justify-center gap-8 h-full">
                <div className="border border-neutral-200 rounded-2xl shadow-2xl w-full md:w-7/12 xl:w-5/12 space-y-6 p-24">
                    <Error />
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold font-serif">
                            Welcome to Jikuze Sacco
                        </h1>
                        <p className="text-sm">
                            Enter your email below to receive a one-time
                            passcode
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Input className="p-5" placeholder="Email" />
                        <div className="flex items-center gap-2">
                            <Input
                                className="h-4 w-4 cursor-pointer"
                                type="checkbox"
                            />
                            <span className="text-xs text-neutral-500">
                                Remember me
                            </span>
                        </div>
                        <LoadingButton className="bg-teal-600 hover:bg-teal-500 w-full cursor-pointer">
                            Send One-time Code
                        </LoadingButton>
                    </div>
                    <div className="flex justify-between items-center gap-2 w-full">
                        <Separator className="w-1/2 shrink" />
                        <span>or</span>
                        <Separator className="w-1/2 shrink" />
                    </div>
                    <div className="sm:flex justify-between items-center gap-2 space-y-4 sm:space-y-0">
                        <OauthForm title="Github" provider="github" />
                        <OauthForm title="Google" provider="google" />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GetStartedPage
