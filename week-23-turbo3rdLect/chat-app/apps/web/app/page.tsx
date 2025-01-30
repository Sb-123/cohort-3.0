"use client";
import Input from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <div>
        <Input
          placeholder="Enter Room name"
          size="small"
          
        ></Input>
        <button
          onClick={() => {
            router.push("/chat/123")
        }}
        >Join the room</button>
      </div>
    </div>
  )
}