function send(){

const input=document.getElementById("userInput").value

const chat=document.getElementById("chat")

chat.innerHTML+=`<p>> ${input}</p>`

let response=""

if(input.includes("who")){
response="I am Luther's AI assistant."
}

else if(input.includes("skills")){
response="Luther knows JavaScript, Python, Flutter."
}

else{
response="Command not recognized."
}

chat.innerHTML+=`<p style="color:cyan">${response}</p>`

}