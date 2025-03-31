'use client'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { ReactNode } from 'react'
import { LoadingButton } from '../ui/loadingbutton'

const FormDialog = ({
    title,
    description,
    children,
    onSubmit,
}: {
    title: string
    description: string
    children: ReactNode
    onSubmit: () => void
}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <LoadingButton className="bg-teal-600 hover:bg-teal-500 cursor-pointer py-1">
                    {title}
                </LoadingButton>
            </DialogTrigger>
            <DialogContent className=" border border-teal-600 sm:min-w-2xl ">
                <DialogHeader>
                    <DialogTitle className="text-center">{title}</DialogTitle>
                    <DialogDescription className="text-center">
                        {description}
                    </DialogDescription>
                </DialogHeader>
                {children}
                <DialogFooter className="sm:justify-center">
                    <LoadingButton
                        className="bg-teal-600 hover:bg-teal-500 cursor-pointer"
                        onClick={onSubmit}
                    >
                        {title}
                    </LoadingButton>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default FormDialog
