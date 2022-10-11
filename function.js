
function loads_student(students){
    students.forEach(element =>console.log(element));
    for(let i=0; i<=10; i++){
    fetch ('https://api.github.com/users/'+students[i],{
            headers: new Headers({"Authorization": "Bearer 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"})})
        .then(data => data.json())
        .then(results => affiche_student(results.avatar_url,results.login,results.followers,results.public_repos,results.followers_url))
        .then(console.log)
    }
}
function loads_repos(students){
    students.forEach(element =>console.log(element));
    for(let i=0; i<=10; i++){
    fetch ('https://api.github.com/users/'+students[i]/'repos',{
            headers: new Headers({"Authorization": "Bearer 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"})})
        .then(data => data.json())
        .then(console.log)
    }
}
 function affiche_student(avatar_url,login,followers,public_repos,followers_url){
    console.log(avatar_url)
    let d = document.createElement("img");
    let a = document.createElement("p")
    let f = document.createElement("p")
    let r = document.createElement("p")
    let follow = document.createElement("p")
    d.src += avatar_url ;
    a.innerHTML += login;
    f.innerHTML += followers;
    r.innerHTML += public_repos;
    follow.innerHTML += followers_url;
    var element = document.getElementById("test").appendChild(d);
    element.classList.add("img");
    var pseudo = document.getElementById("test").appendChild(a);
    pseudo.classList.add("pseudo")
    var followers = document.getElementById("test").appendChild(f);
    followers.classList.add("follower")
    var repos = document.getElementById("test").appendChild(r);
    repos.classList.add("repository")
    var follow_url = document.getElementById("test").appendChild(follow);
    follow_url.classList.add("url")
    
 }

function load_students(){
    fetch ('./etudiants.json')
        .then(data => data.json())
        .then(results => loads_student(results.students))
}
load_students()