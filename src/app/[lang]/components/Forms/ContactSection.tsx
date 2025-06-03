"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ContactSectionProps = {
  title: string;
  description: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formData: {
    name: string;
    email: string;
    message: string;
  };
  errors: {
    name: string;
    email: string;
    message?: string;
  };
  showPopup?: boolean;
  setShowPopup?: (show: boolean) => void;
  isLoading?: boolean;
  setIsLoading?: (loading: boolean) => void;
  setFormData?: (data: {
    name: string;
    email: string;
    message: string;
  }) => void;
  setErrors?: (errors: {
    name: string;
    email: string;
    message?: string;
  }) => void;
};

const ContactSection = ({
  title,
  description,
  handleSubmit,
  handleChange,
  formData,
  errors,
}: ContactSectionProps) => {
  return (
    <section className="container mx-auto py-20 relative">
      <div className="flex flex-col md:flex-row gap-8 rounded-xl overflow-hidden shadow-xl border bg-gradient-to-r from-primary/50 to-secondary/30">
        {/* Left: Contact Info */}
        <div className="md:w-1/2  p-8 flex flex-col justify-center ">
          <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg mb-6">{description}</p>

          <ul className="space-y-2 text-sm text-white">
            <li>
              <strong>📞 Phone:</strong> +1 123 456 7890
            </li>
            <li>
              <strong>✉️ Email:</strong> contact@example.com
            </li>
            <li>
              <strong>🏢 Address:</strong> Kyiv City
            </li>
          </ul>
        </div>

        {/* Right: Form */}
        <div className="md:w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-sm font-medium mb-1 block">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-destructive mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-medium mb-1 block">
                Email *
              </label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium mb-1 block"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
            </div>

            <Button
              variant="ghost"
              type="submit"
              className={cn(
                "w-full px-5 py-3 rounded-md shadow-sm font-bold bg-primary text-white hover:bg-primary/90 focus:outline-none uppercase focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              )}
            >
              Send email
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
