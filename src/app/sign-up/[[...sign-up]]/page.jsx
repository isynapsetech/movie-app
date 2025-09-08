import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
  <div className="flex justify-center gap-4 p-10"> 
    <SignUp />
  </div>
  );
}   