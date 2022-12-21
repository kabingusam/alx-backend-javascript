import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, filename){
    return Promise
        .allSettled(signUpUser[firstName, lastName], uploadPhoto[filename])
            .then((results) =>{
                return results.map((result) => {
                    return({
                        status: 'resolved',
                        value: result,
                    });
                });
            });
}
