export function getResponseFromAPI() {
    const response = new Promise((resolve) => {
        resolve('true')
    })
}
getResponseFromAPI()
    .then(() => {
        resolve(true)
}).catch((error) => {
    reject(false)
})