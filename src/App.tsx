import { FC, useState } from 'react';

import './style.css';
import MultiSelect from './components/MultiSelect/MultiSelect';
import { filterChar } from './services/filterChar/filterChar';
import { MultiSelectOption } from './components/MultiSelect/MultiSelect.props';
import { Char } from './services/filterChar/models/FilterCharResponse';

export const App: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<MultiSelectOption[]>([]);
  const [err, setError] = useState<string>();

  const onSearch = async (searchText: string) => {
    
    try {
      setIsLoading(true);
      
      const res = await filterChar(searchText);
      const optionsFromApi = (res?.results || [])?.map((item: Char): MultiSelectOption => {
        return { label: item.name, value: item.id.toString() };
      });
      setOptions(optionsFromApi);
      setError(undefined);

    } catch (err) {
      setError(err.message);
      setOptions([]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <MultiSelect
        onChange={(value) => {
          console.log("Changed Values:", value);
        }}
        options={options}
        onSearch={onSearch}
        debounceTime={500}
        placeholder="Select an option"
        isLoading={isLoading}
        err={err}
      />
    </div>
  );
};
