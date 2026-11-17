let warningDiv= document.getElementById("error.warning")

// let phone=document.getElementById("phone");
// phone.addEventListener("change",(e)=>{
//     console.log(e.target.value);
//     let reg=/[0-9]{10}/
//     let condition=reg.test(e.target.value)  
//     if(condition==false)
//     {
//         warningDiv.innerText="The Phobe number Should be 10 digit"
//     }
//     else{
//         warningDiv.innerText=""
//     }
    
// })
let arr=[
    {
        id:"phone",
        event:"change",
        express:/^[0-9]{10}$/,
        condition:false,
        warning:"The phone number Should be of 10 digit"

    }
    ,{
        id:"password",
        event:"change",
        express:/^(?=.*[a-z"])(.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        condition:false,
        warning:"Password should contain Capital,Small alphabets,digits and special character with min-length 8"
    }
    ,{
        id:"confirm password",
        Event:"change",
        condition:document.getElementById("password"),
        warning:"Confirm Password should be same as apassword"

    }
]
arr.forEach(
    v=>{let element=document.getElementById(v.id)
        element.addEventListener("change",(e)=>{
            console.log(e.target.value);
            let reg=v.express;
            let condition=(v.express!=undefined)
            ?reg.test(e.target.value):
            v.condition.value==e.target.value;
            console.log(condition);
            if(condition==v.condition)
            {
                warningDiv.innerText=v.warning
            }
            else{
                warningDiv.innerText=""
            }
            
            
        })
    }
)