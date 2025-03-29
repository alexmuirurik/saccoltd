import Addmember from '@/components/forms/addmember'
import Offerloan from '@/components/forms/offerloan'
import Pageheader from '@/components/layouts/pageheader'
import TransactionTable from '@/components/tables/transactions'
import React from 'react'

const LoansPage = () => {
    return (
        <div className="page-body">
            <Pageheader title="Loan Applications">
                <Offerloan />
            </Pageheader>
            <div className="relative">
                <TransactionTable />
            </div>
        </div>
    )
}

export default LoansPage
