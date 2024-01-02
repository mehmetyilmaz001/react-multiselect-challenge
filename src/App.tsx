import { FC } from 'react';

import './style.css';
import MultiSelect from './components/MultiSelect/MultiSelect';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <MultiSelect
        value={[
          { label: 'Test 1 Label', value: 'Test 1 Value' },
          { label: 'Test 2 Label', value: 'Test 2 Value' }
        ]}
        onChange={(value) => {
          console.log("Changed Values:", value);
        }}
        options={[
          { label: 'Test 1 Label', value: 'Test 1 Value' },
          { label: 'Test 2 Label', value: 'Test 2 Value' },
          { label: 'Test 3 Label', value: 'Test 3 Value' },
          { label: 'Test 4 Label', value: 'Test 4 Value' },
          { label: 'Test 5 Label', value: 'Test 5 Value' },
          { label: 'Test 6 Label', value: 'Test 6 Value' },
          { label: 'Test 7 Label', value: 'Test 7 Value' },
          { label: 'Test 8 Label', value: 'Test 8 Value' },
          { label: 'Test 9 Label', value: 'Test 9 Value' },
          { label: 'Test 10 Label', value: 'Test 10 Value' },
          { label: 'Test 11 Label', value: 'Test 11 Value' },
        ]}
        placeholder="Select an option"
      />
    </div>
  );
};
