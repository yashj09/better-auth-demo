"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Plane } from "lucide-react";
// import { signIn } from "@/lib/auth-client";
import { client } from "@/lib/auth-client";
export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  const signin = async () => {
    const data = await client.signIn.social(
      {
        provider: "google",
      },
      {
        onSuccess: (e) => {
          if (e.request.redirect) {
            router.push("/session");
          }
        },
      }
    );
  };
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div
        className="absolute inset-0 md:w-[8rem] w-full h-12 text-gray-800 cursor-pointer bg-white/10 backdrop-blur-lg rounded-xl m-2 p-4 items-center justify-center flex hover:text-black"
        onClick={() => {
          router.push("/");
        }}
      >
        &lt;--go back
      </div>
      <Card
        className={`w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl transition-all duration-500 ease-in-out ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2">
              <Plane className="h-10 w-10 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-800">
                AI Travel Planner
              </h1>
            </div>
            <p className="text-gray-600 text-center">
              Your intelligent companion for seamless travel experiences
            </p>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
              onClick={() => {
                signin();
              }}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
                <path fill="none" d="M1 1h22v22H1z" />
              </svg>
              <span>Login with Google</span>
            </Button>
            <div className="flex items-center space-x-2 text-gray-500">
              <MapPin className="h-5 w-5" />
              <span>Explore the world with AI</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
