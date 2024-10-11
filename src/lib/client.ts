import { createAuthClient } from "better-auth/client";
import { redirect, RedirectType, useRouter } from "next/navigation";
export const client = createAuthClient();

export const signin = async () => {
  const data = await client.signIn.social(
    {
      provider: "google",
    },
    {
      onSuccess: (e) => {
        if (e.request.redirect) {
          redirect("/session");
        }
      },
    }
  );
};

// const handleSignIn = async () => {
//   await authClient.signIn.email(
//     {
//       // [!code highlight]
//       email: $email, // [!code highlight]
//       password: $password, // [!code highlight]
//     },
//     {
//       // [!code highlight]
//       onRequest: () => {
//         // [!code highlight]
//         //show loading // [!code highlight]
//       }, // [!code highlight]
//       onSuccess: () => {
//         // [!code highlight]
//         //redirect to dashboard // [!code highlight]
//       }, // [!code highlight]
//       onError: (ctx) => {
//         // [!code highlight]
//         alert(ctx.error.message); // [!code highlight]
//       }, // [!code highlight]
//     }
//   ); // [!code highlight]
// };
