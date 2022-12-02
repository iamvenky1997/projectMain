const userName = document.getElementById("name")
const company = document.getElementById("company")
const questions = document.getElementById("questions")
const submitHandler = document.getElementById("submitHandler")
const dataHandler = document.getElementById("dataHandler")
const spinners = document.getElementById("spinners")
submitHandler.addEventListener('submit',(e) =>{
    e.preventDefault()
    if (userName.value ==="" || company.value ==="" || questions.value === "") {
        alert("sorry...! input fieds are not empty")
    }
    else{
        const data = {     
            name :userName.value,
            questions:questions.value.split(","),
            company:company.value
            }
            
          const options = {
            method:"POST",
            headers:{
              "Content-Type" : "Application/json",
              accept:"Application/json"
            },
            body: JSON.stringify(data)
            }
            console.log(data)
         
         const url1 = "https://backend-jilr.onrender.com/add"
         
         fetch(url1,options).then((e) => alert("Refresh the page to see your content")) 
    }
})

  const options = {
    method:"GET",
    headers:{
      "Content-Type" : "Application/json",
      accept:"Application/json"
    }
    }
    
 
  const url2 = "https://backend-jilr.onrender.com/get"
  const fetchedData = async() => {
     let res = await fetch(url2,options).then((res) => res.json())
     localStorage.setItem("data",JSON.stringify(res))
     let userName1 = document.getElementById("userName")
     let companyName1 = document.getElementById("companyName")
     let questions1 = document.getElementById("questions")
     let showData1 ="";
    
   
     for (let i of res.reverse()) {
         let k = ''
         
        for(let j of i.questions){
          k += `<ul>
          <li>${j} </li>
          </ul>`
        }
        
         let showData =
         `<div class=" col-md-4 col-lg-3 my-3">
         <div class="card"> 
           <div class="card-body">
             <h5 class="card-title text-center text-danger">${i.name}</h5>
             <h6 class="card-text">${i.company.toUpperCase()}</h6>
             <p>${k}</p>
           </div>
         </div>
         </div>`
         
     showData1 += showData
     dataHandler.innerHTML = showData1  
     spinners.style.display  ="none"
 
        }
  } 
  fetchedData()
 
