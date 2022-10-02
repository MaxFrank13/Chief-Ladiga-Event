import React, { useState } from "react";
import Friday from "./partials/Friday";
import Saturday from "./partials/Saturday";
import Sunday from "./partials/Sunday";
import { FRIDAY, SATURDAY, SUNDAY } from "./data/enum";

export default function Timeline() {
  const [selectedDay, setSelectedDay] = useState(FRIDAY);

  const renderSelectedDay = () => {
    if (selectedDay === FRIDAY) {
      return <Friday />
    }
    if (selectedDay === SATURDAY) {
      return <Saturday />
    }
    if (selectedDay === SUNDAY) {
      return <Sunday />
    }
  };

  return (
    <section>
      <div className="flex gap-1">
        {[FRIDAY, SATURDAY, SUNDAY].map((day, idx) => (
          <button
            key={idx}
            className="px-2 py-1 bg-green-200"
            onClick={() => setSelectedDay(day)}
          >
            {day}
          </button>
        ))}
      </div>
      {renderSelectedDay()}
    </section>
  )
}