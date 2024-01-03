import { client } from "../client";
import { FilterCharResponse } from "./models/FilterCharResponse";

export const filterChar = (char: string) => {
    if(char){
        const charLower = char.toLowerCase();
        return client<FilterCharResponse>(`character/?name=${charLower}&status=alive`);
    }
}