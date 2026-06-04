import NextAuth, {
  type NextAuthOptions,
} from "next-auth";

import CredentialsProvider
from "next-auth/providers/credentials";

export const authOptions:
NextAuthOptions = {

  providers: [

    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {
          label: "Username",
          type: "text",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(
        credentials
      ) {

        const res =
          await fetch(
            "https://django-backend-production-5bc6.up.railway.app/api/token/",
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body:
                JSON.stringify({
                  username:
                    credentials?.username,

                  password:
                    credentials?.password,
                }),
            }
          );

        const data =
          await res.json();

        console.log(
          "DJANGO LOGIN:",
          data
        );

        if (!res.ok) {
          return null;
        }

        return {
          id:
            String(
              data.user_id
            ),

          username:
            data.username,

          role:
            data.role,

          access:
            data.access,

          refresh:
            data.refresh,
        };
      },
    }),
  ],

  session: {
    strategy:
      "jwt",
  },

  secret:
    process.env
      .NEXTAUTH_SECRET,

  callbacks: {

    async jwt({
      token,
      user,
    }) {

      if (user) {

        token.username =
          (
            user as any
          ).username;

        token.role =
          (
            user as any
          ).role;

        token.access =
          (
            user as any
          ).access;

        token.refresh =
          (
            user as any
          ).refresh;
      }

      return token;
    },

    async session({
      session,
      token,
    }) {

      (
        session as any
      ).username =
        token.username;

      (
        session as any
      ).role =
        token.role;

      (
        session as any
      ).access =
        token.access;

      (
        session as any
      ).refresh =
        token.refresh;

      return session;
    },
  },

  pages: {
    signIn:
      "/login",
  },
};

const handler =
  NextAuth(
    authOptions
  );

export {
  handler as GET,
  handler as POST,
};