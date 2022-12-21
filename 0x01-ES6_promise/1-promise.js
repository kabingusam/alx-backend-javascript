function getFullResponseFromAPI(success) {
    success = new Promise((resolve, reject) => {
        if(success = true) {
            resolve({
                status: 200,
                body: 'Success'
            })
        } else {
            reject({
                message: 'The fake API is not working currently',
            })
        }
    }) 
}
