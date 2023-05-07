import React from 'react';
import Select from './select';

const SelectWrap = ({ onSelect }) => {
  return (
    <section className='select-section'>
      <div className='section-title'>
        <h3>
          고려해야 할 요소를
          <br />
          선택해주세요!
        </h3>
      </div>

      <div className='select-wrap'>
        <Select id='first' placeholder='매우 중요해요' onSelect={onSelect} />
        <Select
          id='second'
          placeholder='어느정도 중요해요'
          onSelect={onSelect}
        />
        <Select id='third' placeholder='조금 중요해요' onSelect={onSelect} />
        <Select id='fourth' placeholder='덜 중요해요' onSelect={onSelect} />
      </div>
    </section>
  );
};

export default SelectWrap;
