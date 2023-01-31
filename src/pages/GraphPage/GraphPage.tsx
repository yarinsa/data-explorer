import { Box } from "@mui/material";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useReactFlow } from "reactflow";
import GraphFilters from "./GraphFilters";
import InteractiveGraph from "./GraphView";
import useGetGraphData from "./useGetGraphData";

type Props = {};

const GraphPage: FC<Props> = () => {
    const reactFlowInstance = useReactFlow()
    const { data, error, isLoading } = useGetGraphData();
    const [filters, setFilters] = useState<GraphFilters>({});

    const filteredData = useEffect(() => {
        if (!data) return;

        const { color } = filters;
        const { nodes } = data;

        let next = nodes;

        if (color) {
            next = data.nodes.filter(({ data }: any) => data.color === color);
        }

        reactFlowInstance.setNodes(next);
    }, [data, filters])

    const handleChange = useCallback((next: Partial<GraphFilters>) => {
        setFilters({ ...filters, ...next });
    }, [setFilters])

    return (
        <Box sx={{ width: 900, height: 700 }}>

            {error && <div>Something went wrong</div>}
            {isLoading && <div>Loading..</div>}
            {data && <>
                <GraphFilters options={{ colors: ['red', 'blue', 'green'] }} initialFilters={{}} onFiltersChange={handleChange} />
                <InteractiveGraph nodes={filteredData as any} edges={data.edges as any} />
            </>}
        </Box>
    );
}

export default GraphPage