function checkName() {
    const first = document.getElementById("name").value;
    var regex = /^[a-zA-Zа-яА-ЯёЁ]{2,20}$/;

    if (regex.test(first)) { // if testing of first is true
        document.getElementById("name").style.color = "green";
        return true;
    }
    else {// if it's not
        document.getElementById("name").style.color = "red";
        return false;
    }
}

function checkEmail() {
    const mail = document.getElementById("email").value;
    var regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (regex.test(mail)) { // if testing of first is true
        document.getElementById("email").style.color = "green";
        return true;
    }
    else {// if it's not
        document.getElementById("email").style.color = "red";
        return false;
    }
}

function checkPhone() {
    var phone = document.getElementById("pnum").value;
    var regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

    if (regex.test(phone)) { // if testing of first is true
        document.getElementById("pnum").style.color = "green";
        return true;
    }
    else {// if it's not
        document.getElementById("pnum").style.color = "red";
        return false;
    }
}

function outputData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("pnum").value;
    var date = document.getElementById("date").value;

    if(checkName() && checkEmail() && checkPhone() && date != "") {
        alert(` Имя: ${name} \n Почта: ${email} \n Телефон: ${phone} \n Дата: ${date}`)
    }
    else {alert("Некорректный ввод")}

    document.getElementById("button1").style.background = "green";
    document.getElementById("head_colored").style.color = "rgb(92, 16, 130)";
    setTimeout(function() {
        document.getElementById("button1").style.background = "yellow";
        document.getElementById("head_colored").style.color = "black";
    }, 5000);
}