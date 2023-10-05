import { Section } from "~/components/Section";
import { Card } from "~/components/Card";

export const Grid = () => {
  return (
    <Section className="grid mx-8 md:mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card
          title="Festivals 🎡"
          image={{
            src: "/pics/2.png",
            alt: "testing",
            height: "h-[300px]",
          }}
        >
          Holidays and street fairs
        </Card>
        <Card
          title="Company Outings 🎉"
          image={{
            src: "/pics/1.png",
            alt: "testing",
            height: "h-[680px]",
          }}
          className="row-span-2"
        >
          Team building and celebrations
        </Card>
        <Card
          title="Private Events 🎂"
          image={{
            src: "/pics/1.png",
            alt: "testing",
          }}
        >
          Birthdays, graduations, and more
        </Card>
      </div>
    </Section>
  );
};
