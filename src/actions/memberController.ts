'use server'
import { z } from 'zod'
import { CreateMemberSchema } from '../../prisma/schema'
import { prisma } from '../../prisma/prisma'
import { createPayment } from './paymentController'

export const createMember = async (
    data: z.infer<typeof CreateMemberSchema>,
) => {
    try {
        const member = await getMemberByEmail(data.email)

        const createMemba = await prisma.member.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                surName: data.surName,
                email: data.email,
                mobileNumber: data.mobileNumber,
                address: data.address,
                IdNumber: data.IdNumber,
                occupation: data.occupation,
            },
        })

        if (createMemba) {
            const payment = await createPayment({
                payment: Number(data.payment) - 500,
                savings: Number(data.savings),
                deductions: {
                    registration: 500,
                },
                memberId: createMemba.id,
            })
        }

        return createMemba
    } catch (error) {
        console.log(`Error creating member ${error}`)
    }
}

export const getMemberByEmail = async (email: string) => {
    try {
        const member = await prisma.member.findFirst({
            where: {
                email: email,
            },
        })
        return member
    } catch (error) {
        console.error(`Error Getting Member By Mobile ${error}`)
    }
}

export const getMembers = async () => {
    try {
        const members = await prisma.member.findMany()
        return members
    } catch (error) {
        console.log(`Error Getting Members ${error}`)
    }
}
