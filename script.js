fetch("https://api.github.com/users/USERNAME/repos")

.then(res=>res.json())

.then(data=>{

const repo=document.getElementById("repo")

data.slice(0,6).forEach(r=>{

repo.innerHTML+=`

<div class="project">

<h3>${r.name}</h3>

<p>${r.description || "No description"}</p>

<a href="${r.html_url}" target="_blank">View</a>

</div>

`

})

})