import { getMembers } from '@/actions/memberController'
import Userscard from '@/components/cards/userscard'
import Addmember from '@/components/forms/addmember'
import Pageheader from '@/components/layouts/pageheader'
import { Input } from '@/components/ui/input'

const MembersPage = async () => {
    const members = await getMembers() ?? []
    return (
        <div className="page-body">
            <Pageheader title="Members">
                <Input
                    className="focus-visible:ring-0 focus-visible:border-teal-400 p-4 w-xs"
                    placeholder="Search"
                />
                <Addmember />
            </Pageheader>
            <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <Userscard members={members} />
                </div>
            </div>
        </div>
    )
}

export default MembersPage
