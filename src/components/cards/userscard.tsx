'use client'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { LoadingButton } from '../ui/loadingbutton'
import { Member } from '@prisma/client'

const Userscard = ({ members }: { members: Member[] }) => {
    return members.map((member, index) => (
        <Link
            key={member.id}
            href={`/writers/${member.id}`}
            className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-md shadow-sm"
        >
            <Avatar className="bg-teal-500 h-12 w-12">
                <AvatarImage
                    src={
                        'https://randomuser.me/api/portraits/men/' +
                        index +
                        '.jpg'
                    }
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h4 className="text-base font-bold text-gray-800 mt-4">
                {`${member.firstName} ${member.lastName}`}
            </h4>
            <p className="font-bold text-xs">{member.mobileNumber}.</p>
            <div className="flex gap-2 items-center justify-center mt-4">
                <div className="first rounded-md p-1 px-4">
                    <LoadingButton variant={'outline'} className="">
                        Invoices
                    </LoadingButton>
                </div>
                <div className="first rounded-md p-1 px-4">
                    <LoadingButton variant={'outline'} className="">
                        <span className="text-nowrap">Tasks</span>
                    </LoadingButton>
                </div>
            </div>
        </Link>
    ))
}

export default Userscard
