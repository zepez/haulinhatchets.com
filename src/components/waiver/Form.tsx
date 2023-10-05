"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DatePicker } from "react-rainbow-components";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { WaiverFormType, APIResponse } from "~/types";

export const WaiverForm = () => {
  const [birthday, setBirthday] = useState<Date | undefined>(undefined);
  const [buttonText, setButtonText] = useState("Submit");

  const schema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    phone: z.string().min(7),
    email: z.string().email().min(4).nullable().default(null),
    promotions: z.boolean().default(false),
    waiverSigned: z.string().min(3).nullable().default(null),
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
    if (!birthday) {
      setError("birthday", {
        type: "manual",
        message: "You must enter your birthday to continue.",
      });
      return;
    }

    Object.assign(data, { birthday: birthday?.toISOString().split("T", 1)[0] });

    if (!data.birthday) {
      setError("birthday", {
        type: "manual",
        message: "You must enter your birthday to continue.",
      });
      return;
    }

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

    data.waiverSigned = `${data.firstName} ${data.lastName}`;

    console.log(data);

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
            <DatePicker
              id="birthday"
              value={birthday}
              onChange={(v) => setBirthday(v)}
              formatStyle="large"
              locale="en-US"
              required
              borderRadius="square"
              className="mt-2 text-black rounded-sm bg-slate-100"
            />
            {errors.birthday && (
              <span>
                This field is required. Please provide a valid birthday.
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

        <button
          type="submit"
          className="w-full py-2 mt-8 mb-16 text-black rounded-lg bg-zinc-200 hover:bg-zinc-300"
          disabled={buttonText !== "Submit" ? true : false}
        >
          {buttonText}{" "}
          {buttonText === "Done! ✅" && "- Show this to your coach to proceed"}
        </button>
      </form>
    </>
  );
};
