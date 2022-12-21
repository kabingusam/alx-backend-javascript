export default function handleResponseFromAPI(promise) {
   const promise = new Promise((resolve, reject) => {
    if(promise = true) {
        resolve({
            status: 200,
            body: 'Success'
        })
    } else {
        reject({

        })
    }
   }) 
}

handleResponseFromAPI(Promise).then(() => {
    console.log('Got a response from the API');
})
