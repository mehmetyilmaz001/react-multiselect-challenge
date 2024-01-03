import { useState } from "react";
import { MultiSelectOption } from "./components/MultiSelect/MultiSelect.props";
import { filterChar } from "./services/filterChar/filterChar";
import { Char } from "./services/filterChar/models/FilterCharResponse";

const useAppHook = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState<MultiSelectOption[]>([]);
    const [err, setError] = useState<string>();
    const [selectedOptions, setSelectedOptions] = useState<MultiSelectOption[]>([]);

    const onSearch = async (searchText: string) => {
        try {
            setIsLoading(true);

            const res = await filterChar(searchText);
            const optionsFromApi = (res?.results || [])?.map((item: Char): MultiSelectOption => {
                return { 
                    label: item.name, 
                    value: item.id.toString(), 
                    image: item.image, 
                    description: `${item.episode.length} Episodes`
                };
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


    const onChange = (value: MultiSelectOption[]) => {
        setSelectedOptions(value);
    }

    return { isLoading, options, err, onSearch, onChange, selectedOptions };
}

export default useAppHook;