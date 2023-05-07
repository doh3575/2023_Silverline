import { options } from '@/assets/options';
import Image from 'next/image';
import React, { useState } from 'react';
import Icon from '../../../public/chevron.svg';

const Select = ({ id, onSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(placeholder);

  return (
    <div className='select'>
      <button
        type='button'
        className='select-trigger'
        onClick={() => setIsOpen((open) => !open)}>
        <span>{`-- ${value} --`}</span>
        <span className='chevron-icon'>
          <Image
            src={Icon}
            alt='icon'
            style={{ transform: isOpen ? '' : 'scaleY(-1)' }}
          />
        </span>
      </button>
      {isOpen && (
        <ul className='select-list'>
          {options.map((option) => (
            <li key={option.id} className='select-item'>
              <button
                type='button'
                onClick={() => {
                  onSelect(id, option.key);
                  setIsOpen(false);
                  setValue(option.name);
                }}
                className='select-item-btn'>
                <div
                  className={value === option.name ? 'selected left' : 'left'}
                />
                <span>{option.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
