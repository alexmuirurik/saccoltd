import { Prisma } from "@prisma/client";

export type MemberSavingsAccounts = Prisma.MemberGetPayload<{
    include: {
        savingsAccounts: true
    }
}>