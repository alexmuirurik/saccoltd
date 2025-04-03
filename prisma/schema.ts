import { any, z } from 'zod'

export const CreateMemberSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    surName: z.string(),
    mobileNumber: z.string(),
    IdNumber: z.string(),
    email: z.string(),
    address: z.string(),
    occupation: z.string(),
    payment: z.string(),
    savings: z.string(),
})

export const CreatePaymentSchema = z.object({
    payment: z.number(),
    savings: z.number(),
    deductions: z.any(),
    memberId: z.string()
})

export const CreateLoanSchema = z.object({
    principle: z.string(),
    loanType: z.string(),
    
})