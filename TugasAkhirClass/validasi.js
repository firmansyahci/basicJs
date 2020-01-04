function isAcceptedUsername(username) {
    var Regex = /^[a-z]{5,9}$/i;
    return Regex.test(username);
}
// Cek Function
if(isAcceptedUsername('DedenAdi')){
    console.log("Username Valid");
} else {
    console.log("Username Invalid");
}