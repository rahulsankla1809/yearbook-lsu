function onLoginPress() {
debugger;
    const username = document.getElementById("uname").value;
    sessionStorage.setItem("currentloggedin", username);
}