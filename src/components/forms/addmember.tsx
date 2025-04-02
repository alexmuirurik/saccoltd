'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormDialog from './formdialog'
import { Input } from '../ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { LoadingButton } from '../ui/loadingbutton'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateMemberSchema } from '../../../prisma/schema'
import { createMember } from '@/actions/memberController'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const Addmember = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof CreateMemberSchema>>({
        resolver: zodResolver(CreateMemberSchema),
    })
    const handleFormSubmit = async (
        data: z.infer<typeof CreateMemberSchema>,
    ) => {
        setLoading(true)
        if (Number(data.payment) < 1500) {
            setLoading(false)
            return toast.error(
                'The user must make a payment of over 1500 Ksh',
                {
                    style: {
                        background: 'darkred',
                        borderColor: 'darkorange',
                        color: 'white'
                    },
                },
            )
        }

        if (Number(data.payment) < Number(data.savings)) {
            setLoading(false)
            return toast.error(
                'User savings cannot exceed the payment amount',
                {
                    style: {
                        background: 'red',
                    },
                },
            )
        }

        const member = await createMember(data)

        if (member) {
            toast.success('User Created Successfully')
            form.reset({})
            router.refresh()
            setOpen(false)
        }

        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    return (
        <FormDialog
            open={open}
            onOpenChange={setOpen}
            title="Add Member"
            description="Add a member or chama to the sacco"
        >
            <Form {...form}>
                <form
                    className="w-full space-y-6"
                    onSubmit={form.handleSubmit(handleFormSubmit)}
                >
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="First Name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Last Name"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="surName"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Surname</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Surname"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="IdNumber"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>ID Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="ID Number"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Email"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="mobileNumber"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="ID Number"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="occupation"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Occupation</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Occupation"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="payment"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Payment</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Payment"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="savings"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Savings</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Savings"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2 w-full">
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Address"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-center w-full">
                        <LoadingButton
                            loading={loading}
                            className="bg-teal-600 hover:bg-teal-500 cursor-pointer"
                            type="submit"
                        >
                            Add Member
                        </LoadingButton>
                    </div>
                </form>
            </Form>
        </FormDialog>
    )
}

export default Addmember
