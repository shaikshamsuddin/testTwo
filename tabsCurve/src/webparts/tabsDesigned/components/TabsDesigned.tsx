import * as React from 'react';
// import styles from './TabsDesigned.module.scss';
import { ITabsDesignedProps } from './ITabsDesignedProps';
import { escape } from '@microsoft/sp-lodash-subset';
import TabComponent from '../subComponents/tabComponent';

export default class TabsDesigned extends React.Component<ITabsDesignedProps, {}> {
  public render(): React.ReactElement<ITabsDesignedProps> {
    return (
      <div >
      <TabComponent />
      </div>
    );
  }
}
