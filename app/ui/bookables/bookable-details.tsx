"use client";

import React, { useState } from "react";
import { Bookable } from "../../lib/types-definitions";
import staticData from "@/app/lib/static.json";

const { days } = staticData;

function BookableDetails({ bookable }: { bookable: Bookable }) {
  const [toggleDetails, setToggleDetails] = useState(true);

  function handleToggleDetails() {
    setToggleDetails((t) => !t);
  }

  return (
    <div className="bookable details bg-teal-600 text-white">
      <div className="border-b-8 border-white border-spacing-4 bg-accent-800 item-header flex flex-wrap gap-y-4 justify-between items-center p-4">
        <div className="text-[1.25rem] sm:text-[1.5rem] font-bold">
          {bookable.title}
        </div>
        <span className="controls">
          <input
            className="mr-1"
            type="checkbox"
            name=""
            checked={toggleDetails}
            id="toggle-details"
            onChange={handleToggleDetails}
          />
          <label htmlFor="toggle-details">
            {toggleDetails ? "Hide" : "Show"} details
          </label>
        </span>
      </div>

      <div className="item-details p-4">
        <p className="mb-4">{bookable.notes}</p>

        {toggleDetails && (
          <>
            <h1 className="border-b font-bold text-[16px] pb-3 mb-2">
              Availability
            </h1>
            <ul className="p-4">
              {bookable.days.map((d, i) => (
                <li className="list-disc" key={i}>
                  {days[d]}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default BookableDetails;
