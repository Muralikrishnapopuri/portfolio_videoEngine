"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { sendContactEmail } from "@/lib/emailjs";

const schema = z.object({
  name: z.string().min(2, "Name too short").max(60),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "At least 10 characters").max(2000),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    const result = await sendContactEmail(data);
    if (result.success) {
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 4000);
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Failed to send.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="mono-caps text-text-dim block mb-2">Name</label>
        <input
          {...register("name")}
          className="w-full bg-void border border-crimson/20 rounded px-4 py-3 text-text-primary focus:border-crimson focus:outline-none transition-colors"
          placeholder="Your name"
        />
        {errors.name && <p className="text-xs text-crimson mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="mono-caps text-text-dim block mb-2">Email</label>
        <input
          type="email"
          {...register("email")}
          className="w-full bg-void border border-crimson/20 rounded px-4 py-3 text-text-primary focus:border-crimson focus:outline-none transition-colors"
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-xs text-crimson mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="mono-caps text-text-dim block mb-2">Message</label>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full bg-void border border-crimson/20 rounded px-4 py-3 text-text-primary focus:border-crimson focus:outline-none transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
        {errors.message && <p className="text-xs text-crimson mt-1">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full bg-crimson hover:bg-crimson-glow text-white border-0 h-12"
      >
        <AnimatePresence mode="wait">
          {status === "idle" && (
            <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
              Send Message <Send className="ml-2 h-4 w-4" />
            </motion.span>
          )}
          {status === "sending" && (
            <motion.span key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center">
              Sending... <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            </motion.span>
          )}
          {status === "success" && (
            <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center">
              Sent! <Check className="ml-2 h-4 w-4" />
            </motion.span>
          )}
          {status === "error" && (
            <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {errorMsg}
            </motion.span>
          )}
        </AnimatePresence>
      </Button>
    </form>
  );
}