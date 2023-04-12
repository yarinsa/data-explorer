import {Box}                                  from '@mui/material';
import {useReactFlow}                         from 'reactflow';
import {FC, useCallback, useEffect, useState} from 'react';

import {GraphFiltersType, GraphFilters}       from './GraphFilters';
import {GraphView}                            from './GraphView';
import {useGetGraphData}                      from './useGetGraphData';


export const GraphPage: FC = () => {
  const reactFlowInstance = useReactFlow();
  const {data, error, isLoading} = useGetGraphData();
  const [filters, setFilters] = useState<GraphFiltersType>({});

  const filteredData = useEffect(() => {
    if (!data) return;

    const {color} = filters;
    const {nodes} = data;

    let next = nodes;

    if (color)
      next = data.nodes.filter(({data}: any) => data.color === color);


    reactFlowInstance.setNodes(next);
  }, [data, filters]);

  const handleChange = useCallback((next: Partial<GraphFiltersType>) => {
    setFilters({...filters, ...next});
  }, [setFilters]);

  return (
    <Box sx={{width: 900, height: 700}}>

      {error && <div>Something went wrong</div>}
      {isLoading && <div>Loading..</div>}
      {data && <>
        <GraphFilters options={{colors: [`red`, `blue`, `green`]}} initialFilters={{}} onFiltersChange={handleChange} />
        <GraphView nodes={filteredData as any} edges={data.edges as any} />
      </>}
    </Box>
  );
};
