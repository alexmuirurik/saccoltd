'use client'
import FormDialog from './formdialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { CreateLoanSchema } from '../../../prisma/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { LoadingButton } from '../ui/loadingbutton'

const Offerloan = () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof CreateLoanSchema>>({
        resolver: zodResolver(CreateLoanSchema),
    })
    const onFormSubmit = () => {}
    return (
        <FormDialog
            open={open}
            title="Offer a Loan"
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
                            name="loanType"
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
                            name="principle"
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
                    <div className="flex justify-center">
                        <LoadingButton
                            loading={loading}
                            className="bg-teal-600 hover:bg-teal-500 cursor-pointer"
                            type="submit"
                        >
                            Offer a Loan
                        </LoadingButton>
                    </div>
                </form>
            </Form>
        </FormDialog>
    )
}

export default Offerloan
