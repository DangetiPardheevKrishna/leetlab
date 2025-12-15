"use server";

import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function onboardUser() {
  try {
    const clerkUser = await currentUser();
    if (!clerkUser) throw new Error("User not found");
    const { id } = clerkUser;
    const email = clerkUser.emailAddresses[0]?.emailAddress;
    if (!email) throw new Error("Email missing");

    const newUser = await prisma.user.upsert({
      where: { clerkId: id },
      update: {
        email,
        firstName: clerkUser.firstName ?? null,
        lastName: clerkUser.lastName ?? null,
        imageUrl: clerkUser.imageUrl ?? null,
      },
      create: {
        clerkId: id,
        email,
        firstName: clerkUser.firstName ?? null,
        lastName: clerkUser.lastName ?? null,
        imageUrl: clerkUser.imageUrl ?? null,
        // role defaults to USER
      },
    });

    return { success: true, user: newUser, message: "User onboarded" };
  } catch (error) {
    console.log(error.message);
    return { success: false, message: error.message };
  }
}
