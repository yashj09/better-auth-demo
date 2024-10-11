"use client";
import React from "react";
import { createAuthClient } from "better-auth/react";
import { signOut } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";
import { client } from "@/lib/auth-client";

const { useSession } = createAuthClient();
const page = () => {
  const router = useRouter();
  const signout = async () => {
    const data = await client.signOut({ fetchOptions: { redirect: "manual" } });
    router.push("/");
  };
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = useSession();
  //   const sessions = await client.user.listSessions();
  return (
    <>
      {JSON.stringify(session)}
      <button
        onClick={() => {
          signout();
        }}
      >
        signOut
      </button>
    </>
  );
};

export default page;
