export function signUpUser(firstName, lastName) {
    return new Promise((resolve) => {
        resolve({
            firstName,
            lastName,
        });
    });
}
