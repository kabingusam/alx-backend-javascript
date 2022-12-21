export default function getResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
        promise
        .then(() =>{
            console.log('Got a response from the API');
        })
        if(promise){
            resolve({
                status: 200,
                body: 'Success',
            });
        }else {
            reject(new Error());
        }
    });
}
