import React from 'react';
import { ClassSelectInput } from '../ClassSelectInput';
import { CustomSelectInput } from '../CustomSelectInput';

const SpawnComponent: React.FC<any> = (props) => {
  return (
    <ol>
      {Array.from({ length: 3 }, (_, i) => {
        i + 1;
      }).map((elem, i) => (
        <li key={i}>
          <CustomSelectInput
            options={[
              'Boat',
              'Beach',
              'Forest R (cliff)',
              'Forest M (cliff)',
              'Hut (cliff)',
            ]}
            i={props.i}
            k={i + 1}
          />
          <ClassSelectInput
            i={props.i}
            k={i + 1}
            initialState={false}
            initialStates={props.initialStates}
            setInitialStates={props.setInitialStates}
          />
        </li>
      ))}
    </ol>
  );
};

export default SpawnComponent;
