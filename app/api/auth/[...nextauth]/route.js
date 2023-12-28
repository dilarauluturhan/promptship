import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // kullanıcı oturumunu korumak için
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    // kullanıcının oturum açmasını sağlıyoruz
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        // burada kontrol etmem gereken 2 durum var
        //  1-kullanıcı zaten oturum açmış olabilir
        const userExists = await User.findOne({ email: profile.email });
        // 2-oturum açmamışsa kullanıcı oluşturup database'e kaydedicez
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true; // başarılı bir şekilde oturum açmışsak
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false; // oturum açma başarısızsa
      }
    },
  },
});

export { handler as GET, handler as POST };
