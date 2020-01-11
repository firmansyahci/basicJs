function usernameValidity(user){
    const regex = /^[a-z][a-zA-Z0-9_]{5,12}$/;
    return regex.test(user);
}
function passwordValidity(pass){
    const regex = /[0-9]{1}[A-Z]{5}[^a-zA-Z0-9]{1}$/;
    return regex.test(pass);
}
console.log(usernameValidity("friska_putri"));
console.log(usernameValidity("Friska-putri"));
console.log(passwordValidity("1!WORLD"));