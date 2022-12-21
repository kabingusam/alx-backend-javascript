import {uploadPhoto,createUser} from './utils.js';

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(),createUser()])
    .then(([photoResponse,userResponse]) => {
        console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    }).catch(() =>{
        console.log('Signup system offline');
    })
}
