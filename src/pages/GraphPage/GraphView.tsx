import { FC, useCallback } from "react";
import ReactFlow, {
    addEdge, Background, Connection, Controls, Edge, MiniMap, ReactFlowProps, useEdgesState, useNodesState, useReactFlow
} from 'reactflow';

const minimapStyle = {
    height: 120,
};

type Props = {
} & Pick<ReactFlowProps, 'nodes' | 'edges'>

const InteractiveGraph: FC<Props> = ({ edges: initialEdges, nodes: initialNodes }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes ?? []);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges ?? []);
    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((eds) => addEdge(params, eds)), []);

    // we are using a bit of a shortcut here to adjust the edge type
    // this could also be done with a custom edge for example
    const edgesWithUpdatedTypes = edges.map((edge) => {
        if (edge.sourceHandle) {
            const edgeType = nodes.find((node) => node?.type === 'custom')?.data.selects[edge.sourceHandle];
            edge.type = edgeType;
        }

        return edge;
    });

    return (
    <ReactFlow
        nodes={nodes}
        edges={edgesWithUpdatedTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="top-right"
    >
        <MiniMap style={minimapStyle} zoomable pannable />
        <Controls />
        <Background color="#aaa" gap={16} />
    </ReactFlow>)
}

export default InteractiveGraph;