import React from 'react';
import SplitPane, { Pane } from 'react-split-pane';
import { View, Page, Navbar, Block, Col, Button } from 'framework7-react';
import FilesPanel from './FilesPanel/FilesPanel';
import CodeEditor from './CodeEditor/CodeEditor';
import TopBar from './TopBar/TopBar';

export default function MainLayout(): JSX.Element {
  return (
    <>
      <View main style={{ backgroundColor: 'transparent' }}>
        <Page style={{ backgroundColor: 'transparent' }}>
          <SplitPane split="vertical" minSize={0} defaultSize={280}>
            <div>
              <FilesPanel />
            </div>
            <div style={{ height: '100%' }}>
              <TopBar />
              <CodeEditor />
            </div>
          </SplitPane>
        </Page>
      </View>
    </>
  );
}
