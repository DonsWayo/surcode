import React, { ReactElement, useEffect, useState } from 'react';
import {
  Panel,
  View,
  Page,
  Block,
  Treeview,
  TreeviewItem,
  Navbar,
} from 'framework7-react';

import dirTree from 'directory-tree';

export default function FilesPanel(): ReactElement {
  const [files, setFiles] = useState<any>();

  function getTree() {
    const tree = dirTree('/Users/donswayo/Desktop/Electron-React-Typescript');
    console.log(tree);
    setFiles(tree);
  }

  const renderTree = (nodes: any) => (
    <TreeviewItem
      key={Math.random()}
      label={nodes.name}
      iconF7={nodes.type === 'directory' ? 'folder_fill' : 'documents'}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node: any) => renderTree(node))
        : null}
    </TreeviewItem>
  );

  useEffect(() => {
    getTree();
  }, []);

  return (
    <>
      <Block>Left panel content</Block>
      <Block
        strong
        className="no-padding-horizontal"
        style={{ backgroundColor: 'transparent' }}
      >
        {files ? (
          <Treeview style={{ backgroundColor: 'transparent' }}>
            {renderTree(files)}
          </Treeview>
        ) : (
          <></>
        )}
      </Block>
    </>
  );
}
