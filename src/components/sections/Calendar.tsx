import { Section } from "~/components/Section";

export const Calendar = () => {
  return (
    <>
      <Section className="max-w-4xl mx-8 mt-16 calendar lg:mx-auto">
        <div className="flex justify-between gap-6">
          <div className="pb-8">
            <h2 id="locations" className="mb-4 text-5xl font-semibold font-cal">
              We bring the fun to you
            </h2>
            <p className="mb-4 text-lg">
              Check out the calendar below to see where we'll be next!
            </p>
          </div>
          <p className="text-right text-[6rem] leading-none">🎯</p>
        </div>
        <div className="p-2 mx-auto bg-white rounded-lg opacity-90">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=aeb4b83ed30e8807539f452581bd83dc7dc914ae0af72dc5419fe10c7a5230e1%40group.calendar.google.com&ctz=America%2FNew_York"
            style={{ borderWidth: 0 }}
            width="100%"
            height="600"
          />
        </div>
      </Section>
    </>
  );
};
