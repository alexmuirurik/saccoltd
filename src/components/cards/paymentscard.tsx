import { Payment } from '@prisma/client'

const PaymentsCard = ({ payments }: { payments: Payment[] }) => {
    return payments.map((payment, index) => (
        <div key={payment.id}>
            {payment.payment}
            <span>{payment.savings}</span>
        </div>
    ))
}

export default PaymentsCard
