import { Gallery } from "@/components/gallery";
import { Calendar } from "@/components/calendar";
import { Contact } from "@/components/contact";

export default function Page() {
  return (
    <main>
      <Gallery />
      <Calendar />
      <div className="section-separator my-8 h-[200px]" />
      <Contact />
    </main>
  );
}
