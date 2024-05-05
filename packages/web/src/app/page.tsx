import { Gallery } from "@/components/gallery";
import { Calendar } from "@/components/calendar";
import { Contact } from "@/components/contact";
import { Callout } from "@/components/callout";

export default function Page() {
  return (
    <main>
      <Gallery />
      <Callout
        cta="Throwing for the first time? Start here!"
        href="/articles/axe-throwing-tutorial"
        img="/articles/axe-throwing-tutorial/axe-throwing-example.gif"
        label="A Comprehensive Tutorial"
        title="Master the Art of Axe Throwing"
        description="Axe throwing has surged in popularity as a fun, exhilarating
        activity that combines skill, strength, and a touch of medieval
        flair. Whether you're looking to pick up a new hobby, add a unique
        skill to your repertoire..."
      />
      <Calendar />
      <div className="section-separator my-8 h-[200px]" />
      <Contact />
    </main>
  );
}
