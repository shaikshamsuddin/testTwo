import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'HooksDemoWebPartStrings';
import { IHooksDemoProps } from './components/IHooksDemoProps';
import HooksDemoFC from './components/HooksDemoFC';
import { PropertyFieldFilePicker, IPropertyFieldFilePickerProps, IFilePickerResult } from "@pnp/spfx-property-controls/lib/PropertyFieldFilePicker";
import { PropertyFieldNumber } from '@pnp/spfx-property-controls/lib/PropertyFieldNumber';

export interface IHooksDemoWebPartProps {
  description: string;
  filePickerResult: IFilePickerResult;
  headerText: string;
  numberOfLines: number;
}

export default class HooksDemoWebPart extends BaseClientSideWebPart<IHooksDemoWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IHooksDemoProps> = React.createElement(
      HooksDemoFC,
      {
        description: this.properties.description,
        context: this.context,
        filePickerResult: this.properties.filePickerResult,
        headerText: this.properties.headerText,
        numberOfLines: this.properties.numberOfLines
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Customize Your Webpart Here"
          },
          groups: [
            {
              // groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('headerText', {
                  label: "Enter Title",
                }),
                PropertyPaneTextField('description', {
                  label: "Enter Text",
                  multiline: true
                }),
                PropertyFieldNumber("numberOfLines", {
                  key: "numberOfLines",
                  label: "Number of lines of text to display",
                  description: "Accepts number value only",
                  value: this.properties.numberOfLines,
                  // maxValue: 10,
                  // minValue: 1,
                  disabled: false
                }),
                PropertyFieldFilePicker('filePicker', {
                  context: this.context,
                  filePickerResult: this.properties.filePickerResult,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  properties: this.properties,
                  onSave: (e: IFilePickerResult) => { console.log(e.downloadFileContent()); this.properties.filePickerResult = e; },
                  onChanged: (e: IFilePickerResult) => { console.log(e.downloadFileContent()); this.properties.filePickerResult = e; },
                  key: "filePickerId",
                  buttonLabel: "File Picker",
                  label: "File Picker",
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
