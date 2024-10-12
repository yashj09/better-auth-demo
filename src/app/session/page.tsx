"use client";
import React from "react";
import { createAuthClient } from "better-auth/react";
import { client } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Page = () => {
  const { useSession } = createAuthClient();
  const router = useRouter();

  const signout = async () => {
    const data = await client.signOut({ fetchOptions: { redirect: "manual" } });
    router.push("/");
  };

  // Fetch the session data
  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = useSession();

  // Display error or loading state (if necessary)
  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button
        onClick={() => {
          signout();
        }}
      >
        sign Out
      </button>
    </>
  );
};

export default Page;
