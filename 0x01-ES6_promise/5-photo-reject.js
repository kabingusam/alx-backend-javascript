export default function uploadPhoto(filename) {
    return new Promise((reject) => {
        reject(
            new Error(`{$filename} cannot be replaced`)
        );
    });
}

uploadPhoto('image.jpg')
.catch((error) => {
    console.log(error.message)
})
