import { SignInBtn } from "../components/SignInBtn";
import type { User } from "@clerk/nextjs/api";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
// import { SignOutBtn } from "../components/SignOutBtn";


export default async function Home() {
  const user: User | null = await currentUser();

  return (
    <main className="w-full flex h-screen items-center justify-center">
      {!!user ? (
        <>
          <UserProfile />
          <UserButton />
        </>
      ) : (
        <SignInBtn />
      )}

    </main>
  );
}
