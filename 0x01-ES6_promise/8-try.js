export default function divideFunction(numerator, denominator) {
    return Promise(() => {
        if(denominator == 0){
            reject(new Error('cannot divide by 0'));
        } else {
            resolve((result) => {
                result = numerator / denominator
            });
        }
    });
}
