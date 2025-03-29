import Userscard from '@/components/cards/userscard'
import Addmember from '@/components/forms/addmember'
import Pageheader from '@/components/layouts/pageheader'

const MembersPage = () => {
    return (
        <div className="page-body">
            <Pageheader title="Members">
                <Addmember />
            </Pageheader>
            <div className="relative">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <Userscard />
                </div>
            </div>
        </div>
    )
}

export default MembersPage
