import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
  <div className="flex justify-center  gap-4 p-10"> 
    <SignIn />
  </div>
  );
}   