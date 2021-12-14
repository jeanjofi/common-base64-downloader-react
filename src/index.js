import React from "react";
import PropTypes from "prop-types";
import * as fileSaver from "file-saver";
import * as base64ToBlob from "b64-to-blob";
import { mimeType } from "./constants";


/* default name of the file download if none is specified */
export const defaultDownloadName = "download";

/**
 * generates a HTML tag with a click event that triggers the download of a base64 image
 */
const Base64Downloader = function ({
    base64,
    children,
    downloadName,
    onDownloadSuccess,
    onDownloadError,
    Tag,
    className,
    style,
    extraAttributes,
}) {
    function handleClick() {
        try {
            triggerBase64Download(base64, downloadName);
            if (onDownloadSuccess) onDownloadSuccess({ base64 });
        } catch (e) {
            console.error(e);
            if (onDownloadError) onDownloadError(e);
        }
    }

    return (
        <Tag {...extraAttributes} onClick={handleClick} className={className} style={style}>
            {children}
        </Tag>
    );
};

Base64Downloader.defaultProps = {
    className: "",
    style: {},
    downloadName: defaultDownloadName,
    Tag: "button",
    extraAttributes: {},
};

Base64Downloader.propTypes = {
    // required
    base64: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    // optional
    downloadName: PropTypes.string,
    onDownloadSuccess: PropTypes.func,
    onDownloadError: PropTypes.func,
    Tag: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    extraAttributes: PropTypes.object,
};

export default Base64Downloader;

/**
 * Triggers a browser file download from a base64 string
 *
 * @param {string} base64 - base64 image string including prepend. e.g. data:image/png;base64,iVBORw0KGgo...
 * @param {string} name - name of the file which will be downloaded
 */
export function triggerBase64Download(base64, name = defaultDownloadName) {
    const ext = getExtFromBase64(base64);
    // if the getExtFromBase64 method doesn't throw, we have a valid extension!
    const prepend = getPrepend(ext);
    const contentType = mimeType[ext];
    const cleanedBase64 = base64.replace(`${prepend},`, "");
    
    // generate a blob, then a file and then save the file.
    const blob = base64ToBlob(cleanedBase64, contentType);
    const file = new File([blob], `${name}.${ext}`, { type: prepend });
    fileSaver.saveAs(file);
}


/**
 * Checks for a valid file extension prepend in a base64 image string
 *
 * @param {string} base64 - base64 image string including prepend. e.g. data:image/png;base64,iVBORw0KGgo...
 */
export function getExtFromBase64(base64) {
    let ext;
    if (typeof base64 === "string") {
        ext = Object.keys(mimeType).find((key) => base64.indexOf(getPrepend(key)) === 0);
    }
    // if extension was found, return it, otherwise throw.
    if (ext) {
        return ext;
    } else {
        throw new Error(
            `props.base64 on <Base64Downloader/> has invalid or undefined extension. expected ${Object.keys(
                mimeType
            ).join(", ")}`
        );
    }
}

export function getPrepend(ext) {
    return `data:${mimeType[ext]};base64`
}
