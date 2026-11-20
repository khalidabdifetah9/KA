"use client";
import React, { useEffect, useState } from "react";

const LOCATION = "ADDIS ABABA, ET";
const TIME_ZONE = "Africa/Addis_Ababa";
const ZONE_LABEL = "EAT"; 

const LiveClock = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: TIME_ZONE,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-right">
      <p className="opacity-60 tracking-wider">{LOCATION}</p>
      <p className="font-medium tracking-wider tabular-nums">
        {time || "--:--:--"} {ZONE_LABEL}
      </p>
    </div>
  );
};

export default LiveClock;