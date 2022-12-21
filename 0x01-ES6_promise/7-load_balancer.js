export default function loadBalanacer (chinaDownload, usaDownaload) {
    return Promise
        .race([chinaDownload, usaDownaload])
        .then((result) => result);
}
