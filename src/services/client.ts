const baseUrl = "https://rickandmortyapi.com/api/";

export const client = <T,> (url: string) => {
    return fetch(`${baseUrl}/${url}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json() as Promise<T>;
        }).catch((err) => {
            throw new Error('Something went wrong');
        });
}