"use client";

import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG, isEmailJSConfigured } from "./constants";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  if (!isEmailJSConfigured()) {
    console.warn("[EmailJS] Not configured. Message would have been:", data);
    return { success: false, error: "Email service not configured. Please email directly." };
  }

  try {
    const result = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: EMAILJS_CONFIG.toEmail,
      },
      EMAILJS_CONFIG.publicKey
    );

    if (result.status === 200) return { success: true };
    return { success: false, error: "Failed to send. Try again." };
  } catch (err) {
    console.error("[EmailJS] Send error:", err);
    return { success: false, error: "Something went wrong. Please email directly." };
  }
}