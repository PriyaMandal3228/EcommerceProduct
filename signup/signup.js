
let warningDiv = document.getElementById("error-warning");

let arr = [
    {
        id: "phone",
        event: "input",
        express: /^[0-9]{10}$/,
        condition: false,
        warning: "The phone number should be of 10 digits"
    },
    {
        id: "password",
        event: "input",
        express: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#%*?&]).{8,}$/,
        condition: false,
        warning: "Password should contain capital, small alphabets, digits and special characters with minimum length 8"
    },
    {
        id: "confirm-password",
        event: "input",
        condition: document.getElementById("password"),
        warning: "Confirm password should be same as password"
    }
];

let verified = false
arr.forEach(v => {

    let element = document.getElementById(v.id);

    element.addEventListener(v.event, (e) => {

        let condition = (v.express != undefined)
            ? v.express.test(e.target.value)
            : v.condition.value == e.target.value;
        verified = condition
        if (condition == false && e.target.value != "") {
            warningDiv.innerText = v.warning;
        }

        else {
            warningDiv.innerText = "";
        }

    });

});


// Form validation

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirm-password");

    let phoneReg = arr[0].express;
    let passwordReg = arr[1].express;

    if (!phoneReg.test(phone.value)) {

        e.preventDefault();
        warningDiv.innerText = arr[0].warning;

    }
    else if (!passwordReg.test(password.value)) {

        e.preventDefault();
        warningDiv.innerText = arr[1].warning;

    }
    else if (password.value != confirmPassword.value) {

        e.preventDefault();
        warningDiv.innerText = arr[2].warning;

    }
    else {

        e.preventDefault();
        warningDiv.innerText = "";
        alert("Signup validation successful!");

    }

}
);
let form1 = document.getElementById("submitForm")
form.onsubmit=(e)=>{
    e.preventDefault();
    console.dir(e.target);
    let[username,email,phone,password]=[
        e.target[0].value,
        e.target[1].value,
        e.target[2].value,
        e.target[3].value,

    ]
    let target={username,password,phone,email}
    console.log(target);
    if(true)
    {
        response= fetch("http://localhost:3001/users",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"}
            ,body:JSON.stringify(target)

        }
    )

    }
    

    

}

