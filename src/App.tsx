import { FC } from 'react';

import './style.css';
import MultiSelect from './components/MultiSelect/MultiSelect';
import useAppHook from './App.hooks';

export const App: FC = () => {

  const { isLoading, options, err, onSearch, onChange, selectedOptions } = useAppHook();

  return (
    <div>
      <MultiSelect
        onChange={onChange}
        options={options}
        onSearch={onSearch}
        debounceTime={500}
        placeholder="Select an option"
        isLoading={isLoading}
        err={err}
      />

      <hr />

      <div>
        <h3>Selected Options:</h3>
        <ul>
          {selectedOptions.map((item) => (
            <li key={item.value}>{item.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );

};
