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
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { LoadingButton } from '../ui/loadingbutton'

const FormDialog = ({
    open,
    onOpenChange,
    title,
    description,
    children,
}: {
    open: boolean
    onOpenChange: Dispatch<SetStateAction<boolean>>
    title: string
    description: string
    children: ReactNode
}) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
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
            </DialogContent>
        </Dialog>
    )
}

export default FormDialog
