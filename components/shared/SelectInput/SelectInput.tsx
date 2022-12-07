import { FieldProps } from 'formik';
import React from 'react';
import Select, { components } from 'react-select';
// import { CustomSelectProps, Option } from './types';
import { customStyles } from './helper';
import { ColourOption, colourOptions } from './data';
import { BellIcon } from 'components/icons';

const { Option } = components;
const customSingleValue = (props) => (
  <Option {...props}>
    <div>
      <div className='flex'>
        <span>
          <BellIcon />
        </span>
        <span>{props.label}</span>
      </div>
    </div>
  </Option>
);

const SelectInput = (props) => {
  const onChange = (option) => {};

  return (
    <div className='h-[1.5rem] w-96 mt-6'>
      <Select
        closeMenuOnSelect={false}
        defaultValue={[colourOptions[0], colourOptions[1]]}
        isMulti
        options={colourOptions}
        styles={customStyles}
        onChange={onChange}
        components={{ Option: customSingleValue }}
        formatOptionLabel={(e) => (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BellIcon />
            <span style={{ marginLeft: 5 }}>{e.label}</span>
          </div>
        )}
        hideSelectedOptions={false}
      />
    </div>
  );
};

export default SelectInput;
