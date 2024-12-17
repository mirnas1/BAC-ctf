// Hint: only admins know the flag
function checkFlag() {
    const userFlag = document.getElementById('flag').value;

        document.getElementById('result').innerText = "Incorrect flag. Try again!";
        document.getElementById('result').style.color = "red"; // Set message color to red
        //maybe this form doesn't really check the flag
}

function hint(){
    console.log("Oh the admin page! I wonder what that URL could be...")
}
