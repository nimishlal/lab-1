let xmlhttp = new XMLHttpRequest();
let url = "../data/data.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        studentInfo(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

let students = [];
console.log(students);
let studentsObj = [];


function studentInfo(info) {
    console.log(info.students);
    for (let i = 0; i < info.students.length; i++) {
        //create an object for each loop in array
        //fill object with student info
        let nFO = {
            "firstName": info.students[i].firstName,
            "lastName": info.students[i].lastName,
            "nickName": info.students[i].nickName,
            "slack": info.students[i].slack,
            "email": info.students[i].email,
            "contact": info.students[i].contact,
            "hobbies": info.students[i].hobbies
        };



        //console.log(" My student array " + students);

        studentsObj.push(nFO);
        //console.log(" My student object array " + studentsObj[i].firstName);


    }


    //declalre labels that display
    let hName = document.getElementById('fName');
    let lName = document.getElementById('lName');
    let email = document.getElementById('eMail');
    let nName = document.getElementById('nName');
    let sName = document.getElementById('sName');
    let hBies = document.getElementById('hBies');
    let cInfo = document.getElementById('cInfo');
    //declare btns
    let prevBtn = document.getElementById('prev');
    let nextBtn = document.getElementById('next');
    //let rnDom = document.getElementById('ranDOm');
    let fRst = document.getElementById('first');
    let laSt = document.getElementById('last');
    let rollerRight = "fsize rollerRight";
    let norollerRight = "fsize";

    let count = 0;
    prevBtn.addEventListener('click', function (e) {
        setClass(norollerRight);
        setTimeout(() => {
            
            if (count < 0) {
                count = studentsObj.length - 1;
            }
            cStudents();
            count--;
            setClass(rollerRight);
        }, 50);
    });

    nextBtn.addEventListener('click', function (e) {
        setClass(norollerRight);
        setTimeout(() => {
                if (count > studentsObj.length - 1) {
                    count = 0;
                }
                cStudents();
                count++;
                
                setClass(rollerRight);
            }, 50);
    });
    fRst.addEventListener('click', function (e) {

        setClass(norollerRight);
        setTimeout(() => {
            
            hName.innerText = studentsObj[0].firstName;
            lName.innerText = studentsObj[0].lastName;
            email.innerText = studentsObj[0].email;
            nName.innerText = studentsObj[0].nickName;
            sName.innerText = studentsObj[0].slack;
            hBies.innerText = studentsObj[0].hobbies;
            cInfo.innerText = studentsObj[0].contact;
            count = 0;
            setClass(rollerRight);
        }, 50);

    });
    laSt.addEventListener('click', function (e) {
        
        setClass(norollerRight);
        setTimeout(() => {
            
            hName.innerText = studentsObj[21].firstName;
            lName.innerText = studentsObj[21].lastName;
            email.innerText = studentsObj[21].email;
            nName.innerText = studentsObj[21].nickName;
            sName.innerText = studentsObj[21].slack;
            hBies.innerText = studentsObj[21].hobbies;
            cInfo.innerText = studentsObj[21].contact;
            setClass(rollerRight);
        }, 50);
        count = 0;
    });

    function cStudents() {
        //check to see if count is out of bounds
        if (count >= 0 && count <= studentsObj.length) {
            hName.innerText = studentsObj[count].firstName;
            lName.innerText = studentsObj[count].lastName;
            email.innerText = studentsObj[count].email;
            nName.innerText = studentsObj[count].nickName;
            sName.innerText = studentsObj[count].slack;
            hBies.innerText = studentsObj[count].hobbies;
            cInfo.innerText = studentsObj[count].contact;


        }

    }

    function setClass(string) {
        hName.className = string;
        lName.className = string;
        email.className = string;
        nName.className = string;
        sName.className = string;
        hBies.className = string;
        cInfo.className = string;

    }

}