"use client";

import { useState } from "react";
import { Send, Mail, BookOpen } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/components/motion";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Get in Touch
          </h2>
          <div className="w-12 h-0.5 bg-foreground mb-8" />
          <p className="text-muted-foreground mb-12">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-muted-foreground" />
                <a
                  href="mailto:email2devam@gmail.com"
                  className="text-sm hover:text-foreground transition-colors text-muted-foreground"
                >
                  email2devam@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <LinkedinIcon size={18} className="text-muted-foreground" />
                <a
                  href="https://linkedin.com/in/devam-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-foreground transition-colors text-muted-foreground"
                >
                  linkedin.com/in/devam-kumar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <GithubIcon size={18} className="text-muted-foreground" />
                <a
                  href="https://github.com/DevamKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-foreground transition-colors text-muted-foreground"
                >
                  github.com/DevamKumar
                </a>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-muted-foreground" />
                <a
                  href="https://medium.com/@devamkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-foreground transition-colors text-muted-foreground"
                >
                  medium.com/@devamkumar
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Name" required />
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="company" placeholder="Company (optional)" />
              <Textarea name="message" placeholder="Message" rows={4} required />
              <Button type="submit" disabled={status === "loading"} className="w-full">
                <Send size={16} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-sm text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Failed to send. Please try emailing directly.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
