"use client";

import { Button } from "./ui/button";
import { GitIcon, VercelIcon, HomeIcon } from "./icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-end gap-2 p-2">
        <Link href="https://proofofme.fun">
          <Button>
            <HomeIcon size={16}/> Back to Web
          </Button>
        </Link>
    </div>
  );
};
