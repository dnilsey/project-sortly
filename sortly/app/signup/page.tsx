import { Metadata } from "next";
import Signup from "./_components";

export const metadata: Metadata = {
  title: 'Sortly - Signup',
  description: 'Signup Page'
}

export default function SignupPage() {
  return (
    <Signup />
  )
}