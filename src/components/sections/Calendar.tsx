import { Section } from "~/components/Section";

export const Calendar = () => {
  return (
    <Section className="calendar my-16 mx-8 sm:mx-auto">
      <h2
        id="locations"
        className="text-4xl sm:text-6xl font-semibold text-center mb-4"
      >
        We bring the fun to you! 🎯
      </h2>
      <p className="mb-4 text-lg text-center">
        Contact us or fill out the form below to book your next event.
      </p>
      <div className="rounded-lg">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=aeb4b83ed30e8807539f452581bd83dc7dc914ae0af72dc5419fe10c7a5230e1%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ borderWidth: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </Section>
  );
};
