import { Metadata } from "next";
import Login from "./_components";

export const metadata: Metadata = {
  title: 'Sortly - Login',
  description: 'Login Page'
}

export default function LoginPage() {
  return (
    <Login />
  )
}