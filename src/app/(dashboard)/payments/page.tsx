import { getMembers } from '@/actions/memberController'
import { getPayments } from '@/actions/paymentController'
import PaymentsCard from '@/components/cards/paymentscard'
import AddPayment from '@/components/forms/addpayment'
import Pageheader from '@/components/layouts/pageheader'

const PaymentsPage = async () => {
    const payments = await getPayments() ?? []
    const members = await getMembers() ?? []
    return (
        <div className="page-body">
            <Pageheader title="Payments">
                <AddPayment members={members} />
            </Pageheader>
            <div className="relative">
                <PaymentsCard payments={payments} />
            </div>
        </div>
    )
}

export default PaymentsPage
