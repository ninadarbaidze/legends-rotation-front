import React from 'react';
import { Props } from './types';
import { useNormalInput } from './useNormalInput';
import { ErrorMessage } from '@hookform/error-message';

const NormalInput: React.FC<Props> = (props) => {
  const { register, errors, isDirty } = useNormalInput();

  return (
    <div className='font-ubuntu flex flex-col w-64'>
      <label htmlFor={props.id}>Author</label>
      <input
        id={props.id}
        type={props.type}
        className={`${props.className} ${
          isDirty && errors.inputName ? 'border-red2' : 'border-grey-300'
        } py-[0.35rem] rounded-md border   font-extralight pl-2`}
        {...register(props.inputName, props.registerOptions)}
        placeholder={props.placeholder}
      />
      <div className='text-red2 text-sm'>
        <ErrorMessage name={props.inputName} errors={errors} />
      </div>
    </div>
  );
};

export default NormalInput;
