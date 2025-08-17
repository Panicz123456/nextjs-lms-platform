"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const { data: session } = authClient.useSession();

  const signOut = async () => {
    await authClient.signOut({ 
      fetchOptions: { 
        onSuccess: () => { 
          toast.success("Logout successfully")
        }
      }
    })
  }

  return (
    <div>
      <ThemeToggle />

      {session ? (
        <div>
          <p>{session.user.name}</p>
          <Button onClick={signOut}>Logout</Button>
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}
