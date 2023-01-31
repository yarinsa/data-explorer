import swr from 'swr';
import data from '../../../public/data.json';

type GraphDataResponse = typeof data;

// Normally I would prefer strongly typed solution instrad of this making this assumption
// otherwise we need to check the response and make sure it is valid
const fetcher = (url: string) => fetch(url).then((res) => res.json() as Promise<GraphDataResponse>);

const useGetGraphData = () => {
    const { data, error, isLoading } = swr('/data.json', fetcher);

    return {
        data,
        error,
        isLoading
    }
}

export default useGetGraphData;