import AddPayment from '@/components/forms/addpayment'
import Pageheader from '@/components/layouts/pageheader'
import TransactionTable from '@/components/tables/transactions'
import React from 'react'

const PaymentsPage = () => {
    return (
        <div className="page-body">
            <Pageheader title="Payments">
                <AddPayment />
            </Pageheader>
            <div className="relative">
                <TransactionTable />
            </div>
        </div>
    )
}

export default PaymentsPage
