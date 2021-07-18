import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown,
  
  
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'EmployeeFaqWebPartStrings';
import EmployeeFaq from './components/EmployeeFaq';
import { IEmployeeFaqProps } from './components/IEmployeeFaqProps';
import { PropertyFieldSwatchColorPicker, PropertyFieldSwatchColorPickerStyle } from '@pnp/spfx-property-controls/lib/PropertyFieldSwatchColorPicker';


export interface IEmployeeFaqWebPartProps {
  textColor: any;
  keyLabel: string;
  HeaderLabel: string;
  description: string;
    color:string;


  
}

export default class EmployeeFaqWebPart extends BaseClientSideWebPart<IEmployeeFaqWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IEmployeeFaqProps> = React.createElement(
      EmployeeFaq,
      {
        description: this.properties.description,
        HeaderLabel : this.properties.HeaderLabel,
        keyLabel: this.properties.keyLabel,
        context: this.context,
        color:this.properties.color,
        // textColor : this.properties.textColor

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
                PropertyPaneTextField('HeaderLabel', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('keyLabel',{
                  label:'DropDown',
                  options:[
                    {key: '1', text :'Employee FAQs'},
                    {key: '2', text :'Employee  FAQ Answered'},
                    {key: '3', text :'Employee FAQ Latest'},
                  ]
                }),
                PropertyFieldSwatchColorPicker('color', {
                  label: strings.ColorLabel,
                  selectedColor: this.properties.color,
                  colors: [
                    { color: '#66ffd9', label: 'Aquamarine' },
                    { color: '#ff8080', label: 'Light Coral'},
                    { color: '#99d6ff', label: 'Columbia Blue' },
                    { color: '#e6e6e6', label: 'Whisper'},
                    { color: '#ccffe6', label: 'White Ice' },
                    { color: '#ffcce6', label: 'Classic Rose'},
                    { color: '#96d0eb', label: 'Saturated Shade'},
                    { color: '#5abd9c', label: 'ocean green pearl'},
                    { color: '#91c777', label: 'light green shade' },
                    { color: '#008272', label: 'Teal'},
                    { color: '#d45978', label: 'Mystic pearl'},
                  ],
                  onPropertyChange: this.onPropertyPaneFieldChanged,
                  properties: this.properties,
                  key: 'colorFieldId'
                }),
                // PropertyFieldSwatchColorPicker('textColor', {
                //   label: strings.textLabel,
                //   selectedColor: this.properties.textColor,
                //   colors: [
                //     { color: '#000000', label: 'black' },
                //     { color: '#FFFFFF', label: 'white'},
                  
                //   ],
                //   onPropertyChange: this.onPropertyPaneFieldChanged,
                //   properties: this.properties,
                //   key: 'colorFieldId'
                // })



              ]
            }
          ]
        }
      ]
    };
  }
}
