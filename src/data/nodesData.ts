import { Node , Edge } from "../Interface/interfaces";

// Data for nodes and edges
export const nodes: Node[] =[
    { id: '1', data: { label: 'Start', color: '#FFCC00', fontSize: '16px' }, position: { x: 0, y: 0 }, type: "customNode" },
    { id: '2', data: { label: 'Input', color: '#FFCC00', fontSize: '16px' }, position: { x: 150, y: 50 }, type: "customNode" },
    { id: '3', data: { label: 'Process', color: '#FFCC00', fontSize: '16px' }, position: { x: 300, y: 100 }, type: "customNode" },
    { id: '4', data: { label: 'Validation', color: '#FFCC00', fontSize: '16px' }, position: { x: 450, y: 50 }, type: "customNode" },
    { id: '5', data: { label: 'Decision', color: '#FFCC00', fontSize: '16px' }, position: { x: 600, y: 0 }, type: "customNode" },
    { id: '6', data: { label: 'Update', color: '#FFCC00', fontSize: '16px' }, position: { x: 600, y: 150 }, type: "customNode" },
    { id: '7', data: { label: 'Save', color: '#FFCC00', fontSize: '16px' }, position: { x: 450, y: 200 }, type: "customNode" },
    { id: '8', data: { label: 'Output', color: '#FFCC00', fontSize: '16px' }, position: { x: 300, y: 250 }, type: "customNode" },
    { id: '9', data: { label: 'Review', color: '#FFCC00', fontSize: '16px' }, position: { x: 150, y: 300 }, type: "customNode" },
    { id: '10', data: { label: 'End', color: '#FFCC00', fontSize: '16px' }, position: { x: 0, y: 350 }, type: "customNode" },
  ]

export const edges:Edge[] = [
    { id: "e1-2", source: "1", target: "2" },
    { id: "e2-3", source: "2", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
    { id: "e5-6", source: "5", target: "6" },
    { id: "e6-7", source: "6", target: "7" },
    { id: "e7-8", source: "7", target: "8" },
    { id: "e8-9", source: "8", target: "9" },
    { id: "e9-10", source: "9", target: "10" },
    { id: "e5-10", source: "5", target: "10" }, 
  ];