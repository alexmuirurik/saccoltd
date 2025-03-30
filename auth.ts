import NextAuth, { NextAuthConfig } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from './prisma/prisma'

const secret = process.env.NEXTAUTH_SECRET

const config = {
    adapter: PrismaAdapter(prisma),
    providers: [GoogleProvider, GitHubProvider],
    callbacks: {
        signIn: ({profile}) => {
            const isAlex = profile?.email?.endsWith('alexmuiruri.com') ?? false
            return isAlex
        },
    },
    pages: {
        error: '/get-started'
    },
    session: {
        strategy: 'jwt',
    },
    secret: secret,
} satisfies NextAuthConfig

export const { handlers, signIn, signOut, auth } = NextAuth(config)
