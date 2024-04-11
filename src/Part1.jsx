import { useState } from 'react'
import './App.css'

const TreeNode = ({ node }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div onClick={handleExpand}>
        {node.children && node.children.length > 0 ? (isExpanded ? '-' : '+') : 'ø'} {node.name}
      </div>
      {isExpanded && (
        <ul>
          {node.children.map(childNode => (
            <TreeNode key={childNode.id} node={childNode} />
          ))}
        </ul>
      )}
    </div>
  );
};

const Tree = ({ data }) => (
  <ul>
    {data.map(node => (
      <TreeNode key={node.id} node={node} />
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

function Part1() {

  return (
    <div>
      <Tree data={data} />
    </div>
  )
}

export default Part1
