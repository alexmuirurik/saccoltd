'use server'
import { z } from 'zod'
import { CreateMemberSchema } from '../../prisma/schema'
import { prisma } from '../../prisma/prisma'

export const createMember = async (
    data: z.infer<typeof CreateMemberSchema>,
) => {
    try {
        const member = await getMemberByEmail(data.email)

        const createMemba = await prisma.member.create({ data })

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
            include: {
                savingsAccounts: true
            },
        })
        return member
    } catch (error) {
        console.error(`Error Getting Member By Mobile ${error}`)
    }
}

export const getMembers = async () => {
    try {
        const members = await prisma.member.findMany({
            include: {
                savingsAccounts: true
            },
        })
        return members
    } catch (error) {
        console.log(`Error Getting Members ${error}`)
    }
}
