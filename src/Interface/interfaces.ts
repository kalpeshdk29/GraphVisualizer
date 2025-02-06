export interface Node {
    id: string;
    type: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        label: string;
        color: string;
        fontSize: string;
    };
}

export interface Edge {
    id: string;
    source: string;
    target: string;
}