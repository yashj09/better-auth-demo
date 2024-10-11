import { createAuthClient } from "better-auth/react";
import { redirect } from "next/navigation";

export const client = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
});
export const { signUp, signIn, signOut, useSession, user } = client;
