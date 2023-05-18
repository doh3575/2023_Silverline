"use client";
import React, { useEffect, useState } from "react";
import Description from "./description";
import Map from "./map";
import Select from "./select-wrap";
import "./styles.css";

export default function Contents() {
  const [value, setValue] = useState({
    first: "Index_All",
    second: "Index_All",
    third: "Index_All",
    fourth: "Index_All",
  });

  const handleSelect = (rank, value) => {
    setValue((prev) => ({ ...prev, [rank]: value }));
  };

  return (
    <article className="contents">
      <Select onSelect={handleSelect} />
      <Description />
      <Map value={value} />
    </article>
  );
}
