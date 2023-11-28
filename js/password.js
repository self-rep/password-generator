


function Generate() {
    // Options
    let ilc = document.getElementById("ilc").checked; // include lower case
    let iuc = document.getElementById("iuc").checked; // include upper case
    let inc = document.getElementById("in").checked;  // include numbers
    let isc = document.getElementById("is").checked;  // include symbols
    let esc = document.getElementById("esc").checked; // eclude similiar characters
    let length = document.getElementById("length").value;
    let output = document.getElementById("output");
    let charset = "";

    if (!esc && !ilc && !iuc && !inc && !isc) {
        M.toast({ html: "Invalid options                     !", displayLength: 1000, classes: "bg-error" });
        return;
    }

    if (ilc) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (iuc) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (inc) {
        charset += "0123456789";
    }

    if (isc) {
        charset += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    if (esc) {
        charset = stripCharacters(charset, "lI0O15S28B69vumn");
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    output.value = password;

    M.toast({ html: "Generated Password!", displayLength: 1000, classes: "bg-secondary" });


}

function stripCharacters(inputString, charactersToRemove) {
    const regex = new RegExp(`[${charactersToRemove}]`, 'g');
    return inputString.replace(regex, '');
}


function Copy() {
    var toCopy = document.getElementById("output");
    if (toCopy.value.length > 0) {
        toCopy.select();
        toCopy.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(toCopy.value);
        M.toast({ html: "Copied to clipboard!", displayLength: 1000, classes: "bg-secondary" });
    } else {
        M.toast({ html: "Please Generate a password!", displayLength: 1000, classes: "bg-error" });
    }
}