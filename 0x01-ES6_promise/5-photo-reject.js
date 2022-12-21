export default function uploadPhoto(filename) {
    return new Promise((reject) => {
        reject(
            new Error(`{$filename} cannot be replaced`)
        );
    });
}

uploadPhoto()
.catch((error) => {
    console.log(error.message)
})
