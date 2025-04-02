'use server'
import { z } from 'zod'
import { prisma } from '../../prisma/prisma'
import { CreatePaymentSchema } from '../../prisma/schema'

export const createPayment = async (
    data: z.infer<typeof CreatePaymentSchema>,
) => {
    try {
        console.log('started')
        const payment = await prisma.payment.create({
            data: {
                payment: data.payment,
                savings: data.savings,
                shareCapital: data.payment - data.savings,
                deductions: data.deductions,
                memberId: data.memberId,
            },
        })

        return payment
    } catch (error) {
        console.error(`Error Creating Payment ${error}`)
    }
}

export const getPayments = async () => {
    try {
        const payments = await prisma.payment.findMany()
        return payments
    } catch (error) {
        console.error(`Error getting Payments ${error}`)
    }
}
