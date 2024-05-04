import { Heading } from "@/components/heading";
import { Section } from "@/components/section";

export const Calendar = () => {
  return (
    <Section className="mt-16">
      <div className="flex justify-between gap-6">
        <div className="pb-8">
          <Heading id="locations">We bring the fun to you</Heading>
          <p className="mb-4 text-lg">
            Check out the calendar below to see where we&apos;ll be next!
          </p>
        </div>
        <p className="text-right text-[6rem] leading-none">🎯</p>
      </div>
      <div className="mx-auto rounded-lg bg-white p-2 lg:p-3">
        <div className="iframe-container">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=aeb4b83ed30e8807539f452581bd83dc7dc914ae0af72dc5419fe10c7a5230e1%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ borderWidth: 0 }}
            width="100%"
            height="600"
            className="iframe"
          />
        </div>
      </div>
    </Section>
  );
};
