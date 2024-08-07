const nameForm = document.querySelector(".login-form");

let userName 
nameForm.addEventListener("submit", (e)  =>{
    e.preventDefault()
    userName = e.target.user.value;
    if(userName){
        let users = localStorage.getItem("users");
        users = JSON.parse(users)
        let userID = 0
        if (users) {
            userID = users[users.length - 1].id + 1
            users.push({
                id:userID,
                name:userName,
                score:0
            })
        }
        else{
            users = []
            users.push({
                id: 1,
                name:userName,
                score:0
            })
        }
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = `../pages/questions-page.html?userId=${userID}`
    }
    else{
        window.alert("Iltimos ismingizni kiriting!")
    }  
})

