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
    <section id="contact" className="py-28">
      <div className="max-w-5xl mx-auto px-8 lg:px-16">
        <FadeIn>
          <h2 className="text-4xl font-bold tracking-tight mb-3">
            Work With Me
          </h2>
          <div className="w-14 h-0.5 bg-foreground mb-10" />
          <p className="text-lg text-muted-foreground mb-14">
            Building something interesting? I&apos;m always open to conversations about architecture, AI, and developer tooling.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-muted-foreground" />
                <a
                  href="mailto:email2devam@gmail.com"
                  className="text-base hover:text-foreground transition-colors text-muted-foreground"
                >
                  email2devam@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <LinkedinIcon size={20} className="text-muted-foreground" />
                <a
                  href="https://linkedin.com/in/devam-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-foreground transition-colors text-muted-foreground"
                >
                  linkedin.com/in/devam-kumar
                </a>
              </div>
              <div className="flex items-center gap-4">
                <GithubIcon size={20} className="text-muted-foreground" />
                <a
                  href="https://github.com/DevamKumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-foreground transition-colors text-muted-foreground"
                >
                  github.com/DevamKumar
                </a>
              </div>
              <div className="flex items-center gap-4">
                <BookOpen size={20} className="text-muted-foreground" />
                <a
                  href="https://medium.com/@devamkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:text-foreground transition-colors text-muted-foreground"
                >
                  medium.com/@devamkumar
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input name="name" placeholder="Name" required className="h-12 text-base" />
              <Input name="email" type="email" placeholder="Email" required className="h-12 text-base" />
              <Input name="company" placeholder="Company (optional)" className="h-12 text-base" />
              <Textarea name="message" placeholder="Message" rows={5} required className="text-base" />
              <Button type="submit" disabled={status === "loading"} size="lg" className="w-full">
                <Send size={18} />
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && (
                <p className="text-base text-green-600">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-base text-red-600">
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
