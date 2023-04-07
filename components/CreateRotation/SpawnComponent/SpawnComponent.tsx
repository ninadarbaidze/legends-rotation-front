import Select from 'react-select';
import { ClassSelectInput } from '../ClassSelectInput';
import { CustomSelectInput } from '../CustomSelectInput';
import { ChooseActions } from 'components';
import { Props } from './types';
import { Controller } from 'react-hook-form';
import { objectiveOptions } from 'utils';

const SpawnComponent: React.FC<Props> = (props) => {
  return (
    <>
      {props.objective && (
        <div className='flex flex-col gap-2 mb-1 justify-start items-start'>
          <Controller
            name={`waves[${props.i}].objective`}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <Select
                closeMenuOnSelect={true}
                key={value}
                options={objectiveOptions}
                isMulti={false}
                onChange={onChange}
                placeholder='Select objective . . .       '
                value={
                  value
                    ? objectiveOptions.find(
                        (action) => action.value === value.name
                      )
                    : value
                }
                classNamePrefix='my-react-select'
                className='my-react-select-container '
              />
            )}
          />
        </div>
      )}

      <div className='flex flex-col lg:flex-row gap-1 border-2 rounded-lg shadow-md'>
        {Array.from(Array(3).keys()).map((elem, i) => (
          <>
            <div
              key={elem + i}
              className='flex flex-col gap-2 lg:w-1/3 2xl:gap-4 px-4 py-2 2xl:py-6 font-ubuntu border-b border-zinc-300 2xl:border-r 2xl:border-zinc-300'
            >
              <h2 className='font-bold text-lg'>Spawn {i + 1}</h2>
              <div className='2xl:flex-col 2xl:items-center'>
                <div className='flex items-end gap-2'>
                  <div className='flex flex-col gap-2 justify-start items-start'>
                    <p>Spawn location</p>
                    <CustomSelectInput
                      options={props.spawnLocations}
                      inputClass={'w-40'}
                      i={props.i}
                      k={i + 1}
                      isInitial={false}
                      hydratedData={props.hydratedData}
                      spawnMapChanges={props.spawnMapChanges}
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
                      initialClassesIsDeleted={props.initialClassesIsDeleted}
                    />
                  </div>
                </div>
                <ChooseActions
                  i={props.i}
                  k={i + 1}
                  hydratedData={props.hydratedData}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SpawnComponent;
