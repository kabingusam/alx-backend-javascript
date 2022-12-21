getResponseFromAPI()
    .then(() => {
        resolve(true)
}).catch(() => {
    reject(false)
})