import { getUserRole } from "@/modules/auth/actions";
import Navbar from "@/modules/home/components/navbar";
import React from "react";

const RootLayout = async ({ children }) => {
  const userRole = await getUserRole();
  console.log("User Role in Layout:", userRole);
  return (
    <main className="flex flex-col min-h-screen max-h-screen">
      <Navbar userRole={userRole.role} />
      <div className="flex-1 flex flex-col px-4 pb-4">
        <div className="fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] bg-size-[20px_20px]" />

        {children}
      </div>
    </main>
  );
};

export default RootLayout;
