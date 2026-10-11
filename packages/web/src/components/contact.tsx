"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as validate from "@packages/validate";
import { Heading } from "@/components/heading";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => {
  const form = useForm<validate.Contact>({
    disabled: true,
    resolver: zodResolver(validate.contact),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  return (
    <Section id="contact">
      <div className="flex justify-between gap-6">
        <div className="pb-8">
          <Heading id="locations">Get in touch</Heading>
          <p className="mb-4 text-lg">
            This site is for demonstration purposes only. The contact form is
            disabled and does not send messages.
          </p>
        </div>
        <p className="text-right text-[5rem] leading-none">📨</p>
      </div>

      <Form {...form}>
        <form onSubmit={(evt) => evt.preventDefault()}>
          <fieldset disabled className="space-y-4 sm:space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-foreground text-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@company.com"
                        className="bg-foreground text-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123-456-7890"
                        className="bg-foreground text-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="My event is..."
                        className="bg-foreground text-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled
                className="mt-4 w-full bg-gray-600 text-white disabled:opacity-100 sm:mt-0 sm:w-auto"
              >
                Disabled
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </Section>
  );
};
