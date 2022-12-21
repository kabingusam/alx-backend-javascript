export function signUpUser(firstName, lastName) {
    return Promise((resolve) => {
        resolve({
            firstName,
            lastName,
        });
    });
}
