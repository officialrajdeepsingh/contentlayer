import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"


export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    secret: process.env.SECRET_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/'

    },
    session: {
        strategy: 'jwt'
    },
    jwt: {
        secret: process.env.SECRET_ID,
    },
}

export default NextAuth(authOptions)