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

const base64 =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAAAAMSURBVBhXY/jPYAwAAzQBM849AKsAAAAASUVORK5CYII=';

// simple
<Base64Downloader base64={base64} downloadName="1x1_red_pixel">
    Click to download
</Base64Downloader>

// advanced
<Base64Downloader
    base64={base64}
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

See examples [here](https://github.com/jeanjofi/common-base64-downloader-react/example/example.html)

## Pull requests

If you plan on spinning up this repo locally and submitting PR's, please ensure you use Prettier to lint the JS.

First run `npm link common-base64-downloader-react` to create a symlink in the node_modules folder locally.

Next run the dev script `npm run dev`. Once running, you can open the `example/example.html` file locally in the browser to see the output. There's no dev server configured.

> Note: hot-reloading is not configured.

## Building

First run `npm link common-base64-downloader-react` to create a symlink in the node_modules folder locally.

And then simply run `npm run build` to bundle the code for a production release.
