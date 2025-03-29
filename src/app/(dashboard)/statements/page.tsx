import Pageheader from '@/components/layouts/pageheader'
import TransactionTable from '@/components/tables/transactions'
import React from 'react'

const StatementsPage = () => {
    return (
        <div className="page-body">
            <Pageheader title="Statements">
                <div></div>
            </Pageheader>
            <div className="relative">
                <TransactionTable />
            </div>
        </div>
    )
}

export default StatementsPage
