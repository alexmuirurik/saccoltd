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
})

export const CreatePaymentSchema = z.object({
    savingsAccountId: z.string(),
    totalRepaid: z.number(),
    sharesBroughtForward: z.number(),
    loansBroughtForward: z.number(),
    advancesBroughtForward: z.number(),
    shareCapital: z.number(),
    loanPrinciple: z.number(),
    interest: z.number(),
    walfare: z.number(),
    sharesCarriedForward: z.number(),
    loansCarriedForward: z.number(),
    advancesCarriedForward: z.number(),
    monthlySavings: z.number(),
})

export const CreateLoanSchema = z.object({
    principle: z.string(),
    loanType: z.string(),
    
})