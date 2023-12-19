// const loginForm = document.querySelector('.login-form');
// const inp_username = document.querySelector('#username');
// const inp_password = document.querySelector('#password');

 // ให้สร้าง code เพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
 // 1.ทุก input ต้องไม่ใส่ค่าว่าง
 // 2.username ความยาวค้องมากกว่า 3 ตัวอักษร
 // 3.password ความยาวค้องมากกว่า 4 ตัวอักษร

 // ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
 // ถ้า validate ผ่านให้ไปที่ https://www.example.com

// const hdlLogin = e => {
//     e.preventDefault();
//     console.log(loginForm.elements);
//     let allInput = loginForm.elements
// let inputObj = {};
// for (let el of loginForm.elements) {
//     inputObj[el.id] = el.value;
// }
// console.log(inputObj);
     // console.log(allInput[0].value);
     // console.log(allInput['username'].id);
     // console.log(allInput['username'].value);

     // console.log(allInput['role'].id);
     // console.log(allInput['role'].value);
     // console.log(inp_username.value);
     // console.log(inp_password.value);
// };

// loginForm.addEventListener('submit', hdlLogin);


// const loginForm = document.querySelector(".login-form");

// // เพิ่ม Event Listener สำหรับการ submit form
// loginForm.addEventListener("submit", function (event) {
//   // ปิดการทำงานของฟอร์มเพื่อไม่ให้มีการ refresh หน้า
//   event.preventDefault();

//   // เรียกใช้ฟังก์ชัน validateForm และรับผลลัพธ์
//   const isValid = validateForm();

//   // ตรวจสอบว่า validate ผ่านหรือไม่
//   if (isValid) {
//     // ถ้า validate ผ่านให้ไปที่ https://www.example.com
//     window.location.href = "https://www.example.com";
    
//     // หรือทำการ login โดยตรวจสอบ username, password
//     // และแจ้ง login successful
//     // ตรวจสอบด้วยฟังก์ชัน login(username, password);
//     // loginSuccessful();
//   }
// });

const loginForm = document.querySelector(".login-form");
const Validate_Uname = document.querySelector(".Validate_Uname");
const Validate_Pass = document.querySelector(".Validate_Pass");

const hdlLogin = e => {
    e.preventDefault();
    let allInput = loginForm.elements
    const usernameInput = document.querySelector("#username");
    const validateUsername = usernameInput.value.trim();
    if (
        validateUsername.length > 3 &&
        !/^\d/.test(validateUsername) &&
        !/\s/.test(validateUsername)
    ) {
        Validate_Uname.textContent = "";
        usernameInput.style.borderColor = "initial";
    } else {
        usernameInput.style.borderColor = "red";
        Validate_Uname.textContent = 'Username ต้องมีความยาวมากกว่า 3 ตัวอักษร'
        Validate_Uname.style.color = 'red'
        return;
    }
    // Validate password
    const passwordInput = document.querySelector("#password");
    const validatePassword = passwordInput.value.trim();
    if (validatePassword.length > 4 && /\d/.test(validatePassword) && /[a-zA-Z]/.test(validatePassword)) {
        Validate_Pass.textContent = "";
        passwordInput.style.borderColor = "initial";
    } else {
        passwordInput.style.borderColor = "red";
        Validate_Pass.textContent = 'Password ต้องมีความยาวมากกว่า 4 ตัวอักษร และต้องมีทั้งตัวเลขและตัวอักษร'
        Validate_Pass.style.color = 'red'
        return;
    }
    // Validate select
    const selectInput = document.querySelector("#role");
    if (selectInput.value !== "") {
        selectInput.style.borderColor = "initial";
    } else {
        selectInput.style.borderColor = "red";
        return;
    }
    if (validateLogin(validateUsername, validatePassword)) {
        alert('Login successful');
        window.location.href = "https://www.example.com";
    } else {
        alert(`ข้อมูลที่คุณป้อนมาได้แก่\nUsername : ${validateUsername}\nPassword : ${validatePassword}\nRole : ${selectInput.value}`);
        window.location.href = "https://www.example.com";
    }
};

function validateLogin(username, password) {
    const users = [
        { username: 'andy', password: 'a1234' },
        { username: 'bobby', password: 'a2345' },
        { username: 'candy', password: 'a3456' }
    ];
    return users.some(user => user.username === username && user.password === password);
}


loginForm.addEventListener('submit', hdlLogin);




  