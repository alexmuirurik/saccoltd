'use client'
import FormDialog from './formdialog'
import { Input } from '../ui/input'
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

const Addmember = () => {
    const form = useForm()
    const handleFormSubmit = () => {}
    return (
        <FormDialog
            title="Add Member"
            description="Add a member or chama to the sacco"
            onSubmit={() => console.log('clicked')}
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
                                        <Input placeholder="Email" {...field} />
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
                            name="address"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Address"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>
                </form>
            </Form>
        </FormDialog>
    )
}

export default Addmember
