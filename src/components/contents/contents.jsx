'use client';
import React, { useEffect, useState } from 'react';
import Description from './description';
import Map from './map';
import Select from './select-wrap';
import './styles.css';

export default function Contents() {
  const [value, setValue] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const [fin, setFin] = useState(false);

  const handleSelect = (rank, value) => {
    setValue((prev) => ({ ...prev, [rank]: value }));
  };

  useEffect(() => {
    if (value.first && value.second && value.third && value.fourth) {
      setFin(true);
      return;
    }
    setFin(false);
  }, [value]);

  return (
    <article className='contents'>
      <Select onSelect={handleSelect} />
      <Description />
      <Map value={fin ? value : undefined} />
    </article>
  );
}
