import React, { useState } from "react";
import ReactDOM from "react-dom";

import Base64Downloader, { triggerBase64Download } from "./index";

// a basic base64 string used as the example
const base64ExamplePNG =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAklEQVR4AewaftIAAAIoSURBVL3BMUgbUQCA4T/PE7J0uSFFcfFZqp3s4NblMgjODpIh4HN+CG4hBZEaUNyU8vYXcLHQzIJDMobi0C2J0OdSKnUQpIsgNeVajh7hcp6hzfflZGm3zxgJxkzwjzilyUIwhFOap5DWkIVgCGkN/4NgzAQjcEozKsEIpDWMSjAGTmkigjGQ1hDxSOGURlpDkuO7fSLlfJWscrK02+eJukGD0Plpj7hyvkqoebDOoGKlTignS7t9BjilkdaQpBs0CImCz8P1DaHz0x6Rcr5KGkECaQ1pRMGnvdnhU+07ouCztDJP5PhunzQeT9ANGuws3lK78okTBZ+llXnOT3vENQ/WGZSTpd0+GXSDBqGdxVtqV7Mkebi+4fy0R6icr5JEkMIpTZwo+NSuZtmeuiSuvdmhvdkhVM5XKeerDOORQlpDRBR82psdQrX3r5iYvif089skg5oH6yQpVup4ZNANGoDPoLf9rzAF77afs9BahRa/FSt1hvF4RDdoIAo+E9P3vPn4gj/uiZwcbXBCdh4xTmmkNUQu1lqAz/bUJfRhLzfD/ecfTL5+RujkaINI82CdJMVKnTiPGGkNkYu1FnF7uRlCC61VaMGXrTPiipU6WXgM8fJDwF8Be1tnxM0dLpOVUxppDSFBRnOHy4xKWkNE8ARzh8s8xilNnFOaOEEGTmnSOKWJSGuIk9YQcUojSOCUJk5aQxppDVlIaxAkkNYwjFOaxzilGeYX+iiom68ASicAAAAASUVORK5CYII=";
const base64ExamplePDF =
    "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";

const ExampleApp = function () {
    const [downloadInitiated, setDownloadInitiated] = useState(false);

    return (
        <div
            style={{
                fontFamily:
                    '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
                fontWeight: 300,
            }}
        >
            <h4>
                <b>Base64Downloader</b> png example!
            </h4>
            <Base64Downloader base64={base64ExamplePNG}>Click to download</Base64Downloader>

            <h4>
                <b>Base64Downloader</b> pdf example!
            </h4>
            <Base64Downloader base64={base64ExamplePDF}>Click to download</Base64Downloader>

            <h4>
                <b>Base64Downloader</b> define the download name!
            </h4>
            <Base64Downloader downloadName="my_file_name" base64={base64ExamplePNG}>
                Click to download
            </Base64Downloader>

            <h4>
                <b>Base64Downloader</b> choose a custom HTML tag!
            </h4>
            <Base64Downloader tag="div" base64={base64ExamplePNG}>
                Click to download
            </Base64Downloader>

            <h4>
                <b>Base64Downloader</b> with styles or classes!
            </h4>
            <Base64Downloader
                style={{ color: "orange" }}
                className="my-class-name"
                base64={base64ExamplePNG}
            >
                Click to download
            </Base64Downloader>

            <h4>
                <b>Base64Downloader</b> with any extra attributes on the HTML tag!
            </h4>
            <Base64Downloader Tag="a" base64={base64ExamplePNG} extraAttributes={{ href: "#" }}>
                Click to download
            </Base64Downloader>

            <h4>
                <b>Base64Downloader</b> success and error callbacks tag!
            </h4>
            <Base64Downloader
                base64={base64ExamplePNG}
                onDownloadSuccess={setDownloadInitiated}
                onDownloadError={() => console.warn("Download failed to start")}
            >
                {downloadInitiated ? "File downloaded" : "Click to download"}
            </Base64Downloader>

            <h4>
                <b>triggerBase64Download</b> trigger a base64 image download without the React
                wrapper!
            </h4>
            <button onClick={() => triggerBase64Download(base64ExamplePNG, "my_download_name")}>
                Click to download
            </button>
        </div>
    );
};

// create an empty div
const rootDiv = document.createElement("div");
// render div to dom
document.body.appendChild(rootDiv);
// render example component into div
ReactDOM.render(<ExampleApp />, rootDiv);
