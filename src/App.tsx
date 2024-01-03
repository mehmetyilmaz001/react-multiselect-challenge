import { FC } from 'react';

import MultiSelect from './components/MultiSelect/MultiSelect';
import useAppHook from './App.hooks';

import './style.css';

export const App: FC = () => {

  const { isLoading, options, err, onSearch, onChange, selectedOptions } = useAppHook();

  return (
    <div className="app">
      <MultiSelect
        onChange={onChange}
        options={options}
        onSearch={onSearch}
        debounceTime={500}
        placeholder="Select an option"
        isLoading={isLoading}
        err={err}
      />


      {selectedOptions && selectedOptions.length > 0 && (
        <div className="card">
          <h3>Selected Options:</h3>
          <ul>
            {selectedOptions.map((item) => (
              <li key={item.value}>{item.label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );

};
