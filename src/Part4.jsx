import { useState } from 'react'
import './App4.css'

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

function Part4() {
    const [selectedNode, setSelectedNode] = useState(data[0]);

    const handleNodeClick = (node) => {
        setSelectedNode(node);
    };

    return (
        <div className="container">
            <header>
                <h2 className='logo'>Logo</h2>
                <h2>Header content goes here</h2>
            </header>
            <div className="flex-container">
                <div className="nav-tree">
                    <Tree data={data} onNodeClick={handleNodeClick} />
                </div>
                <div className="node-details">
                    <h2>{selectedNode.name}</h2>
                </div>
            </div>
            <footer>
                <p>Footer content goes here</p>
            </footer>
        </div>
    );
}

export default Part4;