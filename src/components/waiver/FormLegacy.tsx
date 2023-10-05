"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { WaiverFormType, APIResponse } from "~/types";

export const WaiverForm = () => {
  const [buttonText, setButtonText] = useState("Submit");

  const schema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    birthday: z.string(),
    phone: z.string().min(7),
    email: z.string().email().min(4),
    promotions: z.boolean(),
    waiverSigned: z.string().min(3),
    waiverAgreed: z.boolean(),
    signatureAgreed: z.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<WaiverFormType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<WaiverFormType> = async (data) => {
    if (!data.waiverAgreed) {
      setError("waiverAgreed", {
        type: "manual",
        message: "You must agree to the waiver to continue.",
      });
      return;
    }

    if (!data.signatureAgreed) {
      setError("signatureAgreed", {
        type: "manual",
        message: "You must give signature consent to continue.",
      });
      return;
    }

    setButtonText("Submitting ⏳");

    const req = await fetch("/api/waiver", {
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
      setButtonText("Done! ✅");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* first name */}
          <div className="flex flex-col w-full">
            <label htmlFor="firstName" className="text-sm">
              Participant first name:
            </label>
            <input
              {...register("firstName", { required: true })}
              className="p-1 mt-2 text-black border-2 rounded-sm bg-slate-100"
              type="text"
              id="firstName"
            />
            {errors.firstName && <span>This field is required</span>}
          </div>

          {/* last name */}
          <div className="flex flex-col w-full">
            <label htmlFor="lastName" className="text-sm">
              Participant last name
            </label>
            <input
              {...register("lastName", { required: true })}
              className="p-1 mt-2 text-black border-2 rounded-sm bg-slate-100"
              type="text"
              id="lastName"
            />
            {errors.lastName && <span>This field is required</span>}
          </div>

          {/* birthday */}
          <div className="flex flex-col w-full">
            <label htmlFor="birthday" className="text-sm">
              Participant birthday
            </label>
            <input
              {...register("birthday", { required: true })}
              className="p-1 mt-2 text-black border-2 rounded-sm bg-slate-100"
              type="date"
              id="birthday"
            />
            {errors.birthday && (
              <span>
                This field is required. Please provide a valid email address.
              </span>
            )}
          </div>

          {/* phone */}
          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-sm">
              Phone
            </label>
            <input
              {...register("phone", { required: true })}
              className="p-1 mt-2 text-black border-2 rounded-sm bg-slate-100"
              type="phone"
              id="phone"
            />
            {errors.phone && (
              <span>
                This field is required. Please provide a valid phone number
              </span>
            )}
          </div>

          {/* email */}
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="p-1 mt-2 text-black border-2 rounded-sm bg-slate-100"
              type="email"
              id="email"
            />
            {errors.email && <span>This field is required</span>}
          </div>

          {/* waiver signature */}
          <div className="flex flex-col w-full">
            <label htmlFor="waiverSigned" className="text-sm">
              Signature of participant or parent/guardian
            </label>
            <input
              {...register("waiverSigned", { required: true })}
              className="p-1 mt-2 text-black border-2 rounded-sm bg-slate-100"
              type="text"
              id="waiverSigned"
            />
            {errors.waiverSigned && <span>This field is required</span>}
          </div>
        </div>

        {/* waiver agreement */}
        <div className="w-full mt-4">
          <input
            {...register("waiverAgreed", { required: true })}
            className="p-1 mt-2 mr-2 text-black border-2 rounded-sm bg-slate-100"
            type="checkbox"
            id="waiverAgreed"
          />
          <label htmlFor="waiverAgreed" className="text-sm">
            I agree to the terms of the waiver
          </label>
          {errors.waiverAgreed && (
            <p className="text-red-500">
              You must agree to the waiver in order to continue.
            </p>
          )}
        </div>

        {/* electronic signature agreement */}
        <div className="w-full mt-4">
          <input
            {...register("signatureAgreed", { required: true })}
            className="p-1 mt-2 mr-2 text-black border-2 rounded-sm bg-slate-100"
            type="checkbox"
            id="signatureAgreed"
          />
          <label htmlFor="signatureAgreed" className="text-sm">
            By checking here, you are consenting to the use of your electronic
            signature in lieu of an original signature on paper. You have the
            right to request that you sign a paper copy instead. By checking
            here, you are waiving that right. After consent, you may, upon
            written request to us, obtain a paper copy of an electronic record.
            No fee will be charged for such copy and no special hardware or
            software is required to view it. Your agreement to use an electronic
            signature with us for any documents will continue until such time as
            you notify us in writing that vou no longer wish to use an
            electronic signature. There is no penalty for withdrawing your
            consent. You should always make sure that we have a current email
            address in order to contact you regarding any changes, if necessary.
          </label>
          {errors.signatureAgreed && (
            <p className="text-red-500">
              You must give signature consent in order to continue.
            </p>
          )}
        </div>

        {/* promotions */}
        <div className="w-full mt-4">
          <input
            {...register("promotions")}
            className="p-1 mt-2 mr-2 text-black border-2 rounded-sm bg-slate-100"
            type="checkbox"
            id="promotions"
          />
          <label htmlFor="promotions" className="text-sm">
            I want to sign up to receive future promotions or location updates
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-8 mb-16 text-black rounded-lg bg-zinc-200 hover:bg-zinc-300"
          disabled={buttonText !== "Submit" ? true : false}
        >
          {buttonText}
        </button>
      </form>
    </>
  );
};
