"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as validate from "@packages/validate";
import { contactAction } from "@/actions/contact";
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
  const [state, formAction] = useFormState(contactAction, {
    message: "Submit 💨",
  });

  const form = useForm<validate.Contact>({
    resolver: zodResolver(validate.contact),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Section id="contact">
      <div className="flex justify-between gap-6">
        <div className="pb-8">
          <Heading id="locations">Get in touch</Heading>
          <p className="mb-4 text-lg">
            Haulin Hatchets LLC is available in the surrounding area. Please{" "}
            <Link
              href="tel:2527146343"
              title="Call Haulin' Hatchets"
              className="underline"
            >
              call
            </Link>
            ,{" "}
            <Link
              href="mailto:services@haulinhatchets.com"
              title="Email Haulin' Hatchets"
              className="underline"
            >
              email
            </Link>{" "}
            or fill out the form below to verify your location.
          </p>
        </div>
        <p className="text-right text-[5rem] leading-none">📨</p>
      </div>

      <Form {...form}>
        <form
          ref={formRef}
          action={formAction}
          onSubmit={(evt) => {
            evt.preventDefault();
            form.handleSubmit(() => {
              formAction(new FormData(formRef.current!));
            })(evt);
          }}
          className="space-y-4 sm:space-y-8"
        >
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
            <Button type="submit" className="mt-4 w-full sm:mt-0 sm:w-auto">
              {state.message}
            </Button>
          </div>
        </form>
      </Form>
    </Section>
  );
};
