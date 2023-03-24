import Select from 'react-select';
import { ClassSelectInput } from '../ClassSelectInput';
import { CustomSelectInput } from '../CustomSelectInput';
import { ChooseActions, ChooseExtra } from 'components';
import { useSpawnComponent } from './useSpawnComponent';
import { Props } from './types';

const SpawnComponent: React.FC<Props> = (props) => {
  const { objectiveOptions, setValue, getValues } = useSpawnComponent();
  return (
    <>
      {props.objective && (
        <div className='flex flex-col gap-2 mb-1 justify-start items-start'>
          <Select
            closeMenuOnSelect={true}
            options={objectiveOptions}
            isMulti={false}
            onChange={(e) =>
              setValue(`waves[${props.i}]`, {
                ...getValues(`waves[${props.i}]`),
                objective: e,
              })
            }
            placeholder='Select objective . . .       '
          />
        </div>
      )}

      <div className='flex flex-col lg:flex-row gap-1 border-2 rounded-lg shadow-md'>
        {Array.from({ length: 3 }, (_, i) => {
          i + 1;
        })?.map((elem, i) => (
          <>
            <div
              key={objectiveOptions[i].value}
              className='flex flex-col gap-2 lg:w-1/3 2xl:gap-4 px-4 py-2 2xl:py-6 font-ubuntu border-b border-zinc-300 2xl:border-r 2xl:border-zinc-300'
            >
              <h2 className='font-bold text-lg'>Spawn {i + 1}</h2>
              <div className='2xl:flex-col 2xl:items-center'>
                <div className='flex items-end gap-2'>
                  <div className='flex flex-col gap-2 justify-start items-start'>
                    <p>Spawn location</p>
                    <CustomSelectInput
                      options={[
                        'Boat',
                        'Beach',
                        'Forest R (cliff)',
                        'Forest M (cliff)',
                        'Hut (cliff)',
                      ]}
                      inputClass={'w-40'}
                      i={props.i}
                      k={i + 1}
                      isInitial={false}
                      hydratedData={props.hydratedData}
                    />
                  </div>
                  <div className='flex flex-col justify-start items-start'>
                    <ClassSelectInput
                      i={props.i}
                      k={i + 1}
                      initialState={false}
                      initialStates={props.initialStates}
                      setInitialStates={props.setInitialStates}
                      hydratedData={props.hydratedData}
                      defaultDataTouched={props.defaultDataTouched}
                      setDefaultDataTouched={props.setDefaultDataTouched}
                    />
                  </div>
                </div>
                <ChooseActions i={props.i} k={i + 1} />
                <ChooseExtra i={props.i} k={i + 1} />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SpawnComponent;
