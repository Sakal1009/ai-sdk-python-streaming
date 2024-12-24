import { motion } from "framer-motion";
import Link from "next/link";

import { MessageIcon } from "./icons";
import { LogoPython } from "@/app/icons";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex flex-col max-w-xl gap-8 p-6 leading-relaxed text-center rounded-xl">
        <p className="flex flex-row items-center justify-center gap-4">
          <LogoPython size={32} />
          <span>+</span>
          <img src="@/app/favicon.ico" className='w-8'/>
        </p>
        <p>
          This is an{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://github.com/vercel-labs/ai-sdk-preview-python-streaming"
            target="_blank"
          >
            open source
          </Link>{" "}
          template that demonstrates the usage of{" "}
            Data Stream Protocol
          {" "}
          to stream chat completions from a Python function using
          <Link
            className="font-medium underline underline-offset-4"
            href="https://fastapi.tiangolo.com"
            target="_blank"
          >
            the PoM unified API
          </Link>
          ) along with 
          <code className="rounded-md bg-muted px-1 py-0.5">theuseChat</code> hook
          on the client to create a seamless chat experience.
        </p>
        <p>
          You can learn more about the AI SDK by visiting the{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://sdk.vercel.ai/docs"
            target="_blank"
          >
            docs
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
