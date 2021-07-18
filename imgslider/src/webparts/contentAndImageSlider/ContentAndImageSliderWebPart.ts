import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'ContentAndImageSliderWebPartStrings';
import ContentAndImageSlider from './components/ContentAndImageSlider';
import { PropertyFieldSwatchColorPicker, PropertyFieldSwatchColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldSwatchColorPicker';


export interface IContentAndImageSliderWebPartProps {
  description: string;
  color:string;
}

export default class ContentAndImageSliderWebPart extends BaseClientSideWebPart<IContentAndImageSliderWebPartProps> {

  public render(): void {
    const element: React.ReactElement = React.createElement(
      ContentAndImageSlider,
      {
        description: this.properties.description,
        context:this.context,
        color:this.properties.color
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyFieldSwatchColorPicker('color', {
                  label: strings.ColorLabel,
                  selectedColor: this.properties.color,
                  colors: [
                    { color: '#ffb900', label: 'Yellow' },
                    { color: '#fff100', label: 'Light Yellow' },
                    { color: '#d83b01', label: 'Orange'},
                    { color: '#e81123', label: 'Red' },
                    { color: '#a80000', label: 'Dark Red'},
                    { color: '#5c005c', label: 'Dark Magenta' },
                    { color: '#e3008c', label: 'Light Magenta'},
                    { color: '#5c2d91', label: 'Purple'},
                    { color: '#0078d4', label: 'Blue'},
                    { color: '#00bcf2', label: 'Light Blue' },
                    { color: '#008272', label: 'Teal'},
                    { color: '#107c10', label: 'Green'},
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: 'colorFieldId'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
