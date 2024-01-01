import { FC } from 'react';

import './style.css';
import MultiSelect from './components/MultiSelect/MultiSelect';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <MultiSelect 
        value={[
          {label: 'Test 1 Label', value: 'Test 1 Value'},
          {label: 'Test 2 Label', value: 'Test 2 Value'}
        ]} 
        onChange={() => {}}
        options={[
          {label: 'Test 1 Label', value: 'Test 1 Value'},
          {label: 'Test 2 Label', value: 'Test 2 Value'},
        ]}
        placeholder="Select an option"
      />
    </div>
  );
};
