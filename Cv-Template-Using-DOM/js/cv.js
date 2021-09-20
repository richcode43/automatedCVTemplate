const submitbtn = document.getElementById("btnSubmit");

function submitInputs() {

    // PERSONAL DATA INPUT
    let username = document.getElementById("usersName").value;
    let userjob = document.getElementById("profession").value;
    let useremail = document.getElementById("emailAdd").value;
    let userphone = document.getElementById("phoneNumber").value;
    let useraddress = document.getElementById("contactAddress").value;
    let userprofile = document.getElementById("goals").value;

    // PERSONAL DATA OUTPUT
    document.querySelector(".nameHolder").innerHTML = username;
    document.querySelector(".job").innerHTML = userjob + " " + "|";
    document.querySelector(".email").innerHTML = useremail + " " + "|";
    document.querySelector(".phone").innerHTML = userphone;
    document.querySelector(".address").innerHTML = useraddress;
    document.querySelector(".careerProfile").innerHTML = userprofile;

    // SKILLSET INPUT
    let firstSkill = document.getElementById("skill1").value;
    let secondSkill = document.getElementById("skill2").value;
    let thirdSkill = document.getElementById("skill3").value;
    let fourthSkill = document.getElementById("skill4").value;

    //SKILLSET OUPUT
    document.querySelector(".skillOne").innerHTML = firstSkill;
    document.querySelector(".skillTwo").innerHTML = secondSkill;
    document.querySelector(".skillThree").innerHTML = thirdSkill;
    document.querySelector(".skillFour").innerHTML = fourthSkill;

    // WORK EXPERIENCE INPUT
    let jobtitle1 = document.getElementById("f_jobTitle").value;
    let companyname1 = document.getElementById("f_companyName").value;
    let companyloc1 = document.getElementById("f_companyLoc").value;
    let empduration1 = document.getElementById("f_empDuration").value;
    let userduties1 = document.getElementById("duties1").value;

    let jobtitle2 = document.getElementById("s_jobTitle").value;
    let companyname2 = document.getElementById("s_companyName").value;
    let companyloc2 = document.getElementById("s_companyLoc").value;
    let empduration2 = document.getElementById("s_empDuration").value;
    let userduties2 = document.getElementById("duties2").value;


    // WORK EXPERIENCE OUTPUT
    document.querySelector(".jobTitle1").innerHTML = jobtitle1;
    document.querySelector(".companyName1").innerHTML = companyname1;
    document.querySelector(".companyLoc1").innerHTML = companyloc1;
    document.querySelector(".empDuration1").innerHTML = empduration1;
    document.querySelector(".userDuties1").innerHTML = userduties1;
    document.querySelector(".userDuties1").style.width = "300px";

    document.querySelector(".jobTitle2").innerHTML = jobtitle2;
    document.querySelector(".companyName2").innerHTML = companyname2;
    document.querySelector(".companyLoc2").innerHTML = companyloc2;
    document.querySelector(".empDuration2").innerHTML = empduration2;
    document.querySelector(".userDuties2").innerHTML = userduties2;
    document.querySelector(".userDuties2").style.width = "300px";

    // EDUCATION DETAILS INPUT
    let schoolname1 = document.getElementById("f_schoolName").value;
    let schoolloc1 = document.getElementById("f_schoolLoc").value;
    let studdegree1 = document.getElementById("f_studDegree").value;

    let schoolname2 = document.getElementById("s_schoolName").value;
    let schoolloc2 = document.getElementById("s_schoolLoc").value;
    let studdegree2 = document.getElementById("s_studDegree").value;

    let careersum = document.getElementById("careerSum").value;

    // EDUCATION DETAILS OUTPUT
    document.querySelector(".schoolName1").innerHTML = schoolname1;
    document.querySelector(".schoolLoc1").innerHTML = schoolloc1;
    document.querySelector(".studDegree1").innerHTML = studdegree1;

    document.querySelector(".schoolName2").innerHTML = schoolname2;
    document.querySelector(".schoolLoc2").innerHTML = schoolloc2;
    document.querySelector(".studDegree2").innerHTML = studdegree2;

    document.querySelector(".summary").innerHTML = careersum;

}

submitbtn.addEventListener('click', submitInputs);