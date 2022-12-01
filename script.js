const userName = document.getElementById("name")
const company = document.getElementById("company")
const questions = document.getElementById("questions")
const submitHandler = document.getElementById("submitHandler")
submitHandler.addEventListener('submit',(e) =>{
    e.preventDefault()
    if (userName.value ==="" || company.value ==="" || questions.value === "") {
        alert("Make sure input fieds are not empty")
    }
    else{
        alert("Thank you for your submission")
    }
})
