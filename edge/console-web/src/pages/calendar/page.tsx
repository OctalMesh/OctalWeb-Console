import { BaseLayout } from "@/app/layouts/base-layout.tsx";
import { Calendar } from "./components/calendar.tsx";
import { eventDates, events } from "./data.ts";

export default function CalendarPage() {
  return (
    <BaseLayout>
      <div className="px-4 lg:px-6">
        <Calendar events={events} eventDates={eventDates} />
      </div>
    </BaseLayout>
  );
}
