declare interface ITestingWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'TestingWebPartStrings' {
  const strings: ITestingWebPartStrings;
  export = strings;
}
