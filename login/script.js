let form1 = document.getElementById("formId")
form1.onsubmit = (e)=>{
    e.preventDefault();
    let [email,password]=[
        e.target[0].value,
        e.target[1].value,
    ]
    let response = fetch("http://localhost:3001/users?email="+email)
    response.then(v=>{return v.json()}).then(v2=>{
        console.log(v2);
        let [data]=v2

        data.password === password
        ?localStorage.setItem("authorization","true")
        :alert("Wrong Credentials")
    })
}   