import swr  from 'swr';

// eslint-disable-next-line arca/newline-after-import-section
import data from '../../../public/data.json'; // Only used for the type

type GraphDataResponse = typeof data;

// Normally I would prefer strongly typed solution instrad of this making this assumption
// otherwise we need to check the response and make sure it is valid
const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<GraphDataResponse>);

export const useGetGraphData = () => {
  const {data, error, isLoading} = swr(`/data.json`, fetcher);

  return {
    data,
    error,
    isLoading,
  };
};
