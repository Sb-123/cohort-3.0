import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      Todo application
      <br />

      <Link href="/signin">Sign in to Todo app</Link>
      <Link href="/signup">Sign up to Todo app</Link>
    </div>
    
  )
}
