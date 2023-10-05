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
    <Section className="contact py-16 bg-stone-900 border-b-2 border-white">
      <div id="contact" className="text-white mx-8">
        <h1 className="text-5xl font-semibold text-center">Get in touch 📨</h1>
        <p className="text-lg py-4 text-center">
          Haulin Hatchets LLC is available in the surrounding area. Please{" "}
          <a href="tel:2524128840">call</a>,{" "}
          <a href="mailto:services@haulinhatchets.com">email</a> or fill out the
          form below to verify your location.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="border-2 border-white rounded-sm p-1 mt-2 text-black"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="border-2 border-white rounded-sm p-1 mt-2 text-black"
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
                className="border-2 bg-slate-100 rounded-sm p-1 mt-2 text-black"
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
                className="border-2 bg-slate-100 rounded-sm p-1 mt-2 text-black"
              />
              {errors.message && <span>This field is required</span>}
            </div>
          </div>

          <button
            type="submit"
            className="bg-slate-100 text-black rounded-lg mt-8 py-2 w-full hover:bg-zinc-300"
            disabled={buttonText !== "Submit" ? true : false}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </Section>
  );
};
