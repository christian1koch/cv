/* eslint-disable react/no-unescaped-entities -- Weird */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendContactFormEmail } from "@/app/api/api";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CkP } from "@/components/ui/typography";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "Name is too short").max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  subject: z
    .string()
    .min(1, "Subject is too short")
    .max(50, "Subject is too long"),
  message: z.string(),
});

export function ContactForm() {
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const formdata = new FormData();
    formdata.append("name", values.name);
    formdata.append("email", values.email);
    formdata.append("subject", values.subject);
    formdata.append("message", values.message);
    try {
      const response = await sendContactFormEmail(formdata);
      if (response.ok) {
        toast({ title: "Message sent successfully" });
        // form.reset();
      } else {
        const errormsg = await response.text();
        toast({
          title: "Failed to send message",
          description: errormsg,
          variant: "destructive",
        });
      }
    } catch (e) {
      let message = "";
      if (typeof e === "string") {
        message = e.toUpperCase(); // works, `e` narrowed to string
      } else if (e instanceof Error) {
        message = e.message; // works, `e` narrowed to Error
      }
      toast({
        title: "Failed to send message",
        description: message,
        variant: "destructive",
      });
    }
  }
  return (
    <div className="mb-8">
      <CkP className="mb-4">
        Fill out the form below and I'll get back to you as soon as possible.
      </CkP>
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea className="h-32" placeholder="Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
