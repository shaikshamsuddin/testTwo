import { IFilePickerResult } from "@pnp/spfx-property-controls/lib/propertyFields/filePicker";
import * as React from "react";
import pnp, { sp, Item, Web } from "sp-pnp-js";
import { IHooksDemoProps } from "./IHooksDemoProps";

export default class ImageUrl extends React.Component<IHooksDemoProps, any>{
    // constructor(props: ISpfxPnpFilepickerProps, state: ISpfxPnpFilepickerState) {
    constructor(props: IHooksDemoProps) {
        super(props);
        sp.setup({
            spfxContext: this.props.context
        });
        this.state = {
            ImageURL: ''
        }
    }

    //@autobind
    private async saveIntoSharePoint(file: IFilePickerResult) {
        if (file.fileAbsoluteUrl == null) {
            file.downloadFileContent()
                .then(async r => {
                    let fileresult = await sp.web.getFolderByServerRelativeUrl("/sites/TheLanding/Shared%20Documents/").files.add(file.fileName, r, true);
                    this.setState({ ImageURL: document.location.origin + fileresult.data.ServerRelativeUrl });
                });
        }
        else {
            this.setState({ ImageURL: file.fileAbsoluteUrl });
        }
    }
}