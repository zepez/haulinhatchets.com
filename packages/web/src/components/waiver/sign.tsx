"use client";

import { useFormState } from "react-dom";
import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as validate from "@packages/validate";
import { waiverAction } from "@/actions/waiver";
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
import { Checkbox } from "@/components/ui/checkbox";

export const Sign = () => {
  const [state, formAction] = useFormState(waiverAction, {
    message: "Submit 💨",
  });

  const form = useForm<validate.Waiver>({
    resolver: zodResolver(validate.waiver),
    defaultValues: {
      fullName: "",
      birthYear: 2000,
      birthMonth: 1,
      birthDay: 1,
      phone: "",
      waiverAgreed: false,
      signatureAgreed: false,
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Section variant="small">
      <Heading id="sign">Sign</Heading>
      <p className="pb-8 text-xl">
        Please fill out the form below and show your coach when finished to
        proceed.
      </p>

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
              name="fullName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Full Name</FormLabel>
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
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="12"
                      type="tel"
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
              name="birthYear"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Birth Year</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1972"
                      type="number"
                      className="bg-foreground text-background"
                      inputMode="numeric"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthMonth"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Birth Month</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="10"
                      type="number"
                      className="bg-foreground text-background"
                      inputMode="numeric"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="birthDay"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Birth Day</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="12"
                      type="number"
                      className="bg-foreground text-background"
                      inputMode="numeric"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="waiverAgreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      required
                    />
                  </FormControl>
                  <FormMessage />

                  <FormLabel className="text-xs font-normal leading-normal">
                    I agree to the terms of the waiver.
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="signatureAgreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      required
                    />
                  </FormControl>
                  <FormMessage />

                  <FormLabel className="text-xs font-normal leading-normal">
                    By checking here, you are consenting to the use of your
                    electronic signature in lieu of an original signature on
                    paper. You have the right to request that you sign a paper
                    copy instead. By checking here, you are waiving that right.
                    After consent, you may, upon written request to us, obtain a
                    paper copy of an electronic record. No fee will be charged
                    for such copy and no special hardware or software is
                    required to view it. Your agreement to use an electronic
                    signature with us for any documents will continue until such
                    time as you notify us in writing that vou no longer wish to
                    use an electronic signature. There is no penalty for
                    withdrawing your consent. You should always make sure that
                    we have a current email address in order to contact you
                    regarding any changes, if necessary.
                  </FormLabel>
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
