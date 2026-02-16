import { BaseLayout } from "@/components/layouts/base-layout";
import { Calendar } from "./components/calendar";
import { eventDates, events } from "./data";

export default function CalendarPage() {
  return (
    <BaseLayout>
      <div className="px-4 lg:px-6">
        <Calendar events={events} eventDates={eventDates} />
      </div>
    </BaseLayout>
  );
}
