'use client'
import FormDialog from './formdialog'
import { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { useForm } from 'react-hook-form'
import { CreatePaymentSchema } from '../../../prisma/schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { LoadingButton } from '../ui/loadingbutton'

const AddPayment = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof CreatePaymentSchema>>({
        resolver: zodResolver(CreatePaymentSchema),
    })
    const onFormSubmit = () => {}
    return (
        <FormDialog
            open={open}
            title="Add Payment"
            description="Add a Payment or chama to the sacco"
            onOpenChange={setOpen}
        >
            <Form {...form}>
                <form
                    className="w-full space-y-6"
                    onSubmit={form.handleSubmit(onFormSubmit)}
                >
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="payment"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Payment</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={100}
                                            step={100}
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
                                            type="number"
                                            min={0.01}
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Savings"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="deductions"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Penalties</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Penalties"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="payment"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Loan Repayment</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Loan Repayment"
                                            disabled
                                            value={(0).toFixed(2)}
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
                                    <FormLabel>Service Fee</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Service Fee"
                                            disabled
                                            value={(500).toFixed(2)}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex justify-center">
                        <LoadingButton
                            loading={loading}
                            className="bg-teal-600 hover:bg-teal-500 cursor-pointer"
                            type="submit"
                        >
                            Add Payment
                        </LoadingButton>
                    </div>
                </form>
            </Form>
        </FormDialog>
    )
}

export default AddPayment
