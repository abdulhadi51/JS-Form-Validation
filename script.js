
let collectData = []

function collectMsg() {

    let fullname = document.getElementById("fullname").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let msg = document.getElementById("message").value

    isvalid = true;

    if (!fullname){
        document.getElementById("errorfullname").innerHTML = "This field is Required";
        isvalid = false ;
    }

    if (!email){
        document.getElementById("erroremail").innerHTML = "This field is Required";
        isvalid = false ;
    }
    
    if (!subject){
        document.getElementById("errorsubject").innerHTML = "This field is Required";
        isvalid = false ;
    }
    
    if (!message){
        document.getElementById("errormessage").innerHTML = "This field is Required";
        isvalid = false ;
    }

    if (isvalid) return ;
    
    let data = {
        name: fullname,
        mail: email,
        sub: subject,
        text: msg
    }

    collectData.push(data)

    // Console me data show hoga
    console.log(collectData);

    // fields clear
    document.getElementById("fullname").value = ""
    document.getElementById("email").value = ""
    document.getElementById("subject").value = ""
    document.getElementById("message").value = ""
}