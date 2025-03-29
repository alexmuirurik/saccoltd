'use client'
import FormDialog from './formdialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

const Addmember = () => {
    return (
        <FormDialog
            title="Add Member"
            description="Add a member or chama to the sacco"
            onSubmit={() => console.log('clicked')}
        >
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input
                        id="name"
                        defaultValue="Pedro Duarte"
                        className="col-span-3"
                    />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Username
                    </Label>
                    <Input
                        id="username"
                        defaultValue="@peduarte"
                        className="col-span-3"
                    />
                </div>
            </div>
        </FormDialog>
    )
}

export default Addmember
