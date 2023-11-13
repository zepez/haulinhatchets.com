"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Section } from "~/components/Section";
import type { ContactFormType, APIResponse } from "~/types";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Submit");

  const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    message: z.string().max(10000),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ContactFormType> = async (data) => {
    setButtonText("Sending ⏳");

    const req = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const { error } = (await req.json()) as APIResponse;

    if (error) {
      setButtonText("Something went wrong 😞");
    } else {
      setButtonText("Sent! ✅");
    }
  };

  return (
    <Section className="mx-8 contact md:mx-auto">
      <div id="contact">
        <div className="flex justify-between gap-8 pb-12">
          <div>
            <h1 className="text-5xl font-semibold font-cal">Get in touch</h1>
            <p className="py-4 text-lg">
              Haulin Hatchets LLC is available in the surrounding area. Please{" "}
              <a href="tel:2524128840" className="underline cursor-pointer">
                call
              </a>
              ,{" "}
              <a
                href="mailto:services@haulinhatchets.com"
                className="underline cursor-pointer"
              >
                email
              </a>{" "}
              or fill out the form below to verify your location.
            </p>
          </div>
          <p className="text-right text-[6rem] leading-none">📨</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="p-1 mt-2 text-black border-2 rounded-sm bg-stone-100"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="p-1 mt-2 text-black border-2 rounded-sm bg-stone-100"
              />
              {errors.email && (
                <span>
                  This field is required. Please provide a valid email address.
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="phone" className="text-sm">
                Phone
              </label>
              <input
                {...register("phone", { required: true })}
                className="p-1 mt-2 text-black border-2 rounded-sm bg-stone-100"
              />
              {errors.phone && (
                <span>
                  This field is required. Please provide a valid phone number
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="p-1 mt-2 text-black border-2 rounded-sm bg-stone-100"
              />
              {errors.message && <span>This field is required</span>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-8 text-black rounded-lg bg-stone-100 hover:bg-stone-300"
            disabled={buttonText !== "Submit" ? true : false}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </Section>
  );
};
