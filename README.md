# common-base64-downloader-react

[![minified size](https://badgen.net/bundlephobia/min/common-base64-downloader-react)](https://bundlephobia.com/result?p=common-base64-downloader-react)
[![download/year](https://badgen.net/npm/dy/common-base64-downloader-react)](https://www.npmjs.com/package/common-base64-downloader-react)

Easily trigger the download of base64 encoded strings of any file type in React.

## Installation

`npm install --save common-base64-downloader-react`

## Usage

Trigger downloads using the React `Base64Downloader` component.

```jsx
import Base64Downloader from 'common-base64-downloader-react';

// ...
const base64PDF =
    "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgMjAwIDIwMCBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSCiAgL1Jlc291cmNlcyA8PAogICAgL0ZvbnQgPDwKICAgICAgL0YxIDQgMCBSIAogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvVGltZXMtUm9tYW4KPj4KZW5kb2JqCgo1IDAgb2JqICAlIHBhZ2UgY29udGVudAo8PAogIC9MZW5ndGggNDQKPj4Kc3RyZWFtCkJUCjcwIDUwIFRECi9GMSAxMiBUZgooSGVsbG8sIHdvcmxkISkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNzkgMDAwMDAgbiAKMDAwMDAwMDE3MyAwMDAwMCBuIAowMDAwMDAwMzAxIDAwMDAwIG4gCjAwMDAwMDAzODAgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNDkyCiUlRU9G";

const base64PNG =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=';

// simple pdf download
<Base64Downloader base64={base64PDF} downloadName="pdfDownload">
    Click to download
</Base64Downloader>

// simple image download
<Base64Downloader base64={base64PNG} downloadName="1x1_red_pixel">
    Click to download
</Base64Downloader>

// advanced
<Base64Downloader
    base64={base64PNG}
    downloadName="1x1_red_pixel"
    Tag="a"
    extraAttributes={{ href: '#' }}
    className="my-class-name"
    style={{ color: 'orange' }}
    onDownloadSuccess={() => console.log('File download initiated')}
    onDownloadError={() => console.warn('Download failed to start')}
>
    Click to download
</Base64Downloader>
);
```

Trigger downloads using the `triggerBase64Download` method.

```jsx
import { triggerBase64Download } from 'common-base64-downloader-react';

// ...

const base64 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=';

<button onClick={() => triggerBase64Download(base64, 'download_name')}>
    Click to download
</button>;
```

## Examples

See examples [here](https://github.com/jeanjofi/common-base64-downloader-react/blob/main/example/example.html)

## Pull requests

If you plan on spinning up this repo locally and submitting PR's, please ensure you use Prettier to lint the JS.

First run `npm link common-base64-downloader-react` to create a symlink in the node_modules folder locally.

Next run the dev script `npm run dev`. Once running, you can open the `example/example.html` file locally in the browser to see the output. There's no dev server configured.

> Note: hot-reloading is not configured.

## Building

First run `npm link common-base64-downloader-react` to create a symlink in the node_modules folder locally.

And then simply run `npm run build` to bundle the code for a production release.

