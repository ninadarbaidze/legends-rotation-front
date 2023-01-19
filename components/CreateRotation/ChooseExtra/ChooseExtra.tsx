import { useChooseExtra } from './useChooseExtra';
import Select from 'react-select';
import { Props } from './types';

const ChooseExtra: React.FC<Props> = (props) => {
  const { showExtra, setShowExtra, extraOptions, getValues, setValue } =
    useChooseExtra();
  return (
    <div className='mt-2'>
      <div
        className={`${
          !showExtra ? 'hidden' : 'flex'
        } flex flex-col gap-2 justify-start items-start`}
      >
        <div className='flex items-center gap-2'>
          <Select
            closeMenuOnSelect={true}
            options={extraOptions}
            isMulti={true}
            onChange={(e) =>
              setValue(`spawns[${props.i}].spawn${Number(props.k)}`, {
                ...getValues(`spawns[${props.i}].spawn${Number(props.k)}`),
                extra: e,
              })
            }
            placeholder='Select extra...'
          />
          <p
            className='text-red2 cursor-pointer'
            onClick={() => setShowExtra(false)}
          >
            x
          </p>
        </div>
      </div>
      <p
        onClick={() => setShowExtra(true)}
        className={`${
          showExtra ? 'hidden' : 'flex'
        } text-sky-500 cursor-pointer text-sm`}
      >
        add extra options
      </p>
    </div>
  );
};

export default ChooseExtra;
