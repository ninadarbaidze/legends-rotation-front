import React from 'react';
import { Props } from './types';
import { useNormalInput } from './useNormalInput';
import { ErrorMessage } from '@hookform/error-message';
import { getErrorMessage } from 'helpers';

const NormalInput: React.FC<Props> = (props) => {
  const { register, errors } = useNormalInput();
  return (
    <div className={`${props.width} relative w-48 font-ubuntu flex flex-col`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        className={`${props.className} ${
          typeof getErrorMessage(errors, props.inputName) === 'string'
            ? 'border-red2'
            : 'border-grey-300'
        } py-[0.35rem] rounded-md border font-extralight pl-2`}
        {...register(props.inputName, props.registerOptions)}
        placeholder={props.placeholder}
      />

      <div className='absolute top-14 text-red2 text-xs pt-2'>
        <ErrorMessage name={props.inputName} errors={errors} />
      </div>
    </div>
  );
};

export default NormalInput;
