'use client'
import FormDialog from './formdialog'
import { useState } from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../ui/form'
import { useForm } from 'react-hook-form'
import { CreatePaymentSchema } from '../../../prisma/schema'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { LoadingButton } from '../ui/loadingbutton'
import { Avatar, AvatarImage } from '../ui/avatar'
import { MemberSavingsAccounts } from '../../../prisma/types'
import { config } from '@/lib/config'
import PopoverSelect from './popoverselect'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select'
import Link from 'next/link'

const AddPayment = ({ members }: { members: MemberSavingsAccounts[] }) => {
    const [member, setMember] = useState<MemberSavingsAccounts>()
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const form = useForm<z.infer<typeof CreatePaymentSchema>>({
        resolver: zodResolver(CreatePaymentSchema),
    })

    const showMember = (member: MemberSavingsAccounts | undefined) => {
        return (
            member && (
                <div className="flex items-center gap-2 py-2">
                    <Avatar>
                        <AvatarImage
                            src={`https://randomuser.me/api/portraits/men/${members.indexOf(
                                member,
                            )}.jpg`}
                        />
                    </Avatar>
                    <span>{`${member?.firstName} ${member?.lastName}`}</span>
                </div>
            )
        )
    }

    const onFormChange = () => {
        const savingsAccount = member?.savingsAccounts.find(
            (save) => save.id === member.activeAccountId,
        )

        const payments: z.infer<typeof CreatePaymentSchema> = {
            savingsAccountId: member?.activeAccountId as string,
            totalRepaid: form.getValues('totalRepaid'),
            sharesBroughtForward: savingsAccount?.shareCapital ?? 0,
            loansBroughtForward: savingsAccount?.loanBalance ?? 0,
            advancesBroughtForward: savingsAccount?.advanceBalance ?? 0,
            shareCapital: form.getValues('shareCapital'),
            loanPrinciple: savingsAccount?.loanBalance ?? 0,
            interest: (savingsAccount?.loanBalance ?? 0) * config.loanInterest,
            walfare: config.walfareCapital,
            sharesCarriedForward:
                (savingsAccount?.shareCapital ?? 0) +
                form.getValues('shareCapital'),
            loansCarriedForward: savingsAccount?.loanBalance ?? 0,
            advancesCarriedForward: savingsAccount?.advanceBalance ?? 0,
            monthlySavings: form.getValues('shareCapital'),
        }
    }

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
                    onChange={onFormChange}
                    onSubmit={form.handleSubmit(onFormSubmit)}
                >
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="savingsAccountId"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Member ID</FormLabel>
                                    <PopoverSelect
                                        field={field}
                                        data={members}
                                        selected={member}
                                        onItemSelect={setMember}
                                    >
                                        {member ? (
                                            <div className="flex items-center gap-2">
                                                <Avatar>
                                                    <AvatarImage
                                                        src={
                                                            'https://randomuser.me/api/portraits/men/' +
                                                            0 +
                                                            '.jpg'
                                                        }
                                                    />
                                                </Avatar>
                                                <span>{`${member.firstName} ${member.lastName}`}</span>
                                            </div>
                                        ) : (
                                            'Select a member'
                                        )}
                                    </PopoverSelect>
                                    <FormDescription>
                                        This is the language that will be used
                                        in the dashboard.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="savingsAccountId"
                            render={({ field }) => (
                                <FormItem className='w-full'>
                                    <FormLabel>Email</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className='w-full'>
                                                <SelectValue placeholder="Select a verified email to display" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className='w-full'>
                                            <SelectItem value="m@example.com">
                                                m@example.com
                                            </SelectItem>
                                            <SelectItem value="m@google.com">
                                                m@google.com
                                            </SelectItem>
                                            <SelectItem value="m@support.com">
                                                m@support.com
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        You can manage email addresses in your{' '}
                                        <Link href="/examples/forms">
                                            email settings
                                        </Link>
                                        .
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="totalRepaid"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Total Repaid</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={100}
                                            step={100}
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Total Repaid"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="shareCapital"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Share Capital</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            min={0.01}
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Share Capital"
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
                            name="sharesCarriedForward"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>
                                        Shares Carried Forward
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Shares Carried Forward"
                                            {...field}
                                            disabled
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex gap-2">
                        <FormField
                            control={form.control}
                            name="loansCarriedForward"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Loan Balance</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Loans Carried Forward"
                                            disabled
                                            value={(0).toFixed(2)}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="advancesCarriedForward"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Advances Balance</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="focus-visible:ring-0 focus-visible:border-teal-400"
                                            placeholder="Advances Carried Forward"
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
