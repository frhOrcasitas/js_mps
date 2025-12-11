
function countCharacters() {
    let myStr1 = document.getElementById("txtInput").value;
    let newStr1 = myStr1.trim();
    let charCount = newStr1.length;
    document.getElementById("txtResult").innerHTML = charCount;
}

function checkEmail() {
    let emailStr = document.getElementById("txtInputStringF5").value;
    
    if (emailStr.includes("@")) {
        document.getElementById("isEmail").innerHTML = "Valid";
    } else {
        document.getElementById("isEmail").innerHTML = "Invalid";
    }
}
