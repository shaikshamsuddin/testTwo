import * as React from "react";
import "./style.css";
import imgUrl from "./Upload"

function Heading({ text, color }) {
  return (
    <section className="heading">
      <div className="cross-lines"></div>
      <div
        className="heading-text-container"
        style={{ backgroundColor: color ? "#007b73" : undefined }}
      >
        <h2 style={{ color: color ? "white" : undefined }}>{text}</h2>
      </div>
    </section>
  );
}

function Main(props) {
  // var reader = new FileReader();
  // reader.readAsArrayBuffer($('#filePicker')[0].files[0]);
  // reader.onloadend = function (e) {
  //   var parts = $('#filePicker')[0].value.split('\\');
  //   var fileName = parts[parts.length - 1];
  //   var strAjaxUrl = _spPageContextInfo.siteAbsoluteUrl
  //     + "/_api/web/lists/getByTitle('Site Assets')"
  //     + "/RootFolder/files/add(overwrite=true,url='" + fileName + "')";

  //   sprLib.rest({
  //     url: strAjaxUrl,
  //     type: "POST",
  //     data: e.target.result
  //   })
  //     .then(function (arr) {
  //       $('#console').append('SUCCESS: "' + arr[0].Name + '" uploaded to: ' + arr[0].ServerRelativeUrl + '<br>');
  //     })
  //     .catch(function (strErr) {
  //       console.error(strErr);
  //     });
  // };
  // reader.onerror = function (e) {
  //   alert(e.target.error.responseText);
  //   console.error(e.target.error);
  // };
  return (
    <div style={{
      backgroundColor: "#D1D1D1",
      padding: "1px",
    }} >
      <Heading text={props.headerText} color="" />
      <div className="rf-card">
        <img
          src={
            // "https://i.ibb.co/QbbjFB4/refer.jpg"
            (props.filePickerResult == undefined) ? "https://i.ibb.co/QbbjFB4/refer.jpg" : props.filePickerResult.fileAbsoluteUrl
            //props.filePicker
          }
          alt="img"
        />
        <div className="rf-text-container">
          <div className="rf-text" style={{
            display: "-webkit-box",
            WebkitLineClamp: props.numberOfLines,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}>
            {props.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua */}
          </div>
          <div className="rf-label">Share your referral link</div>
          <div className="rf-link">
            <div className="link">http://ldassrfi.com/44333</div>
            <button className="share-button">Share Link</button>
          </div>
        </div>
      </div>
      {/* <FilePicker
        buttonLabel="Select File"
        onSave={(filePickerResult: IFilePickerResult) => { this.setState({ filePickerResult }); alert(JSON.stringify(this.state.filePickerResult)); }}
        onChanged={(filePickerResult: IFilePickerResult) => { this.setState({ filePickerResult }); alert(JSON.stringify(this.state.filePickerResult)); }}
        context={this.props.context}
      /> */}
    </div>
  );
}

export default Main;