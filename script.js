const form = document.getElementById("form");
const gender = document.getElementById("gender");
const generror = document.getElementById("g-error");
//first and last name
var a=document.getElementById("first");
var b=document.getElementById("f-error");
var c=document.getElementById("last");
var d=document.getElementById("l-error");

function validfirst(){
    if(a.value===""){
        b.innerHTML="Enter Your First Name"
        a.style.border="5px solid red"
        return false;
    }
    else if(a.value.length<3 ||a.value.length>15){
        b.innerHTML="enter your name";
        a.style.border="5px solid red";
        return false;
    }
    else{
        b.innerHTML="name registered";
        a.style.border="5px solid green";
        return true;
    }
}
function validlast(){
    if(c.value===""){
        d.innerHTML="Enter Your last Name"
        c.style.border="5px solid red"
        return false;
    }
    else if(c.value.length<3 ||c.value.length>15){
        d.innerHTML="enter your lastname";
        c.style.border="5px solid red";
        return false;
    }
    else{
        d.innerHTML="lastname registered";
        c.style.border="5px solid green";
        return true;
    }
}
// gmail
let pingm=document.getElementById("gmail");
let f=document.getElementById("gm-error");

function validmail(){
    if(pingm.value===""){
        f.innerHTML="Enter Your gmail"
        pingm.style.border="5px solid red"
        return false;
    }
    else if(!pingm.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        f.innerHTML="Enter Your valid gmail"
        pingm.style.border="5px solid red";
        return false;
    }
    else{
        f.innerHTML="gmail regisitered";
        pingm.style.border="5px solid green";
        return true;
    }
}
// number
let g=document.getElementById("mobile")
let h=document.getElementById("m-error")

function validmobile(){
    if(g.value===""){
        h.innerHTML="Enter Your Mobile Number"
        g.style.border="5px solid red"
        return false;
    }
    else if(isNaN(g.value) || g.value.length<10 || g.value.length>10){
        h.innerHTML="Enter a Valid Number";
        g.style.border="5px solid red";
        return false;
    }
    else{
        h.innerHTML="number registered";
        g.style.border="5px solid green";
        return true;
    }
}
//address
let pinadd=document.getElementById("address")
let j=document.getElementById("a-error")

function validaddress(){
    if(pinadd.value===""){
        j.innerHTML="Enter Your address"
        pinadd.style.border="5px solid red"
        return false;
    }
    else if(!pinadd.value.match(/^[a-z A-Z 0-9 , .]*$/)){
        j.innerHTML="Enter a valid address";
        pinadd.style.border="5px solid red";
        return false;
    }
    else{
        j.innerHTML="address registered";
        pinadd.style.border="5px solid green";
        return true;
    }
}
//district
let k=document.getElementById("district")
let l=document.getElementById("d-error")

function validdistrict(){
    if(k.value===""){
        l.innerHTML="Enter Your district"
        k.style.border="5px solid red"
        return false;
    }
    else if(!k.value.match(/^[a-z A-Z]*$/)){
        l.innerHTML="Enter a valid district";
        k.style.border="5px solid red";
        return false;
    }
    else{
        l.innerHTML="district registered";
        k.style.border="5px solid green";
        return true;
    }
}
// state
let m=document.getElementById("state")
let pinerror=document.getElementById("s-error")

function validstate(){
    if(m.value==="-1"){
        pinerror.innerHTML="select your state";
        m.style.border="5px solid red";
        return false;
}
    else if(m.value==="-1"){
        pinerror.innerHTML="select your state";
        m.style.border="5px solid red";
        return false;
    }
    else{
        pinerror.innerHTML="state registered";
        m.style.border="5px solid green";
        return true;
    }
}
// pincode
let o=document.getElementById("pincode")
let p=document.getElementById("p-error")

function validpin(){
    if(o.value===""){
        p.innerHTML="Enter Your district"
        o.style.border="5px solid red"
        return false;
    }
    else if(isNaN(o.value) || o.value.length<6 || o.value.length>6){
        p.innerHTML="Enter a valid district";
        o.style.border="5px solid red";
        return false;
    }
    else{
        p.innerHTML="pincode registered";
        o.style.border="5px solid green";
        return true;
    }
};
form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
   })
   
   function checkinput() {
       const firstnamevalue = a.value.trim();
       const lastnamevalue = c.value.trim();
       const emailvalue = pingm.value.trim();
       const mobilevalue= g.value.trim();
       const gendervalue = document.myform.gender.value;
       const addressvalue = pinadd.value.trim();
       const selectvalue= m.value.trim();
       const pincodevalue = o.value.trim();
       const districtvalue = k.value.trim();
       
       var gender = form.querySelectorAll('input[name="gender"]:checked');
        if (!gender.length) {
            generror.innerHTML = "please click your gender";
            return false;
        }
        else{
            generror.innerHTML="";
        }
        
        var checkboxes = document.getElementsByName('check');
        var langerr = document.getElementById("lg-error");
        var langu = "";
        var n = 0;
        for (var i = 0; i < checkboxes.length; i++) 
        {
            if (checkboxes[i].checked) {
                langu += checkboxes[i].value + " "+",";
                n++;
            }
        }
        if (n == 0) {
            langerr.innerHTML ="Select the Language";
            return false
            
        }
        else{
            langerr.innerHTML="";
        }

   
       document.write("First Name:"+" "+firstnamevalue + "<br>");
       document.write("Last Name:"+" " +lastnamevalue + "<br>");
       document.write("Gender:"+" " + gendervalue + "<br>");
       document.write("Email id:"+" " + emailvalue + "<br>");
       document.write("Phone Number:"+" " +mobilevalue + "<br>");
       document.write("Address:"+" " + addressvalue + "<br>");
       document.write("State:"+" " + selectvalue + "<br>");
       document.write("District:"+" " + districtvalue + "<br>");
       document.write("Pincode:"+" " + pincodevalue + "<br>");
       document.write("Language:"+" " + langu + "<br>");

    }