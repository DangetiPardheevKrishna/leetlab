import { onboardUser } from "@/modules/auth/actions";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  await onboardUser();
  return <UserButton />;
}
