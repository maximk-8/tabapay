import { useState } from 'react'
import './App.css'

const TreeNode = ({ node, onNodeClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onNodeClick(node);
  };

  return (
    <div>
      <div onClick={handleClick}>
        {node.children && node.children.length > 0 ? (isExpanded ? '-' : '+') : 'ø'} {node.name}
      </div>
      {isExpanded && (
        <ul>
          {node.children.map(childNode => (
            <TreeNode key={childNode.id} node={childNode} onNodeClick={onNodeClick} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Tree = ({ data, onNodeClick }) => (
  <ul>
    {data.map(node => (
      <TreeNode key={node.id} node={node} onNodeClick={onNodeClick} />
    ))}
  </ul>
);

const data = [
    {
      id: 1,
      name: 'Root 1',
      children: [
        {
          id: 2,
          name: 'Parent A',
          children: [
            {
              id: 3,
              name: 'Child A1',
              children: []
            },
            {
              id: 4,
              name: 'Child A2',
              children: [
                {
                  id: 5,
                  name: 'Child A21',
                  children: []
                },
                {
                  id: 6,
                  name: 'Child A22',
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: 7,
          name: 'Parent B',
          children: []
        }
      ]
    }
];

function Part2() {
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (node) => {
    setSelectedNode(node);
  };

  const handleClose = () => {
    setSelectedNode(null);
  };

  return (
    <div>
      <Tree data={data} onNodeClick={handleNodeClick} />
      {selectedNode && (
        <div className="modal">
          <h2>Selected Node</h2>
          <p>{selectedNode.name}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Part2;