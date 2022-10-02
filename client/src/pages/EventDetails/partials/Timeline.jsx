import React, { useState } from "react";
import Friday from "./Friday";
import Saturday from "./Saturday";
import Sunday from "./Sunday";
import { FRIDAY, SATURDAY, SUNDAY } from "../data/enum";

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
    <section className="w-3/4 mx-auto mb-8">
      <div className="flex gap-1">
        {[FRIDAY, SATURDAY, SUNDAY].map((day, idx) => (
          <button
            key={idx}
            className="px-4 py-1 bg-green-200 text-xl rounded-t-md font-bold"
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