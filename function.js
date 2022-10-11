
function loads_student(students){
    students.forEach(element =>console.log(element));
    for(let i=0; i<=10; i++){
    fetch ('https://api.github.com/users/'+students[i],{
            headers: new Headers({"Authorization": "Bearer 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"})})
        .then(data => data.json())
        .then(results => affiche_student(results.avatar_url,results.login,results.followers,results.public_repos,results.followers_url))
        .then(console.log)
    fetch('https://api.github.com/users/' + students[i] + '/repos', {
            headers: new Headers({ "Authorization": "Bearer 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" })
        })
            .then(data => data.json())
            .then(results => affiche_repos(results.full_name))
            .then(console.log)
    fetch ('https://api.github.com/users/'+students[i]+'/followers',{
                headers: new Headers({"Authorization": "Bearer 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"})})
            .then(data => data.json())
            .then(results => affiche_followers(results.login))
            .then(console.log)        
    }
}



 function affiche_student(avatar_url,login,followers,public_repos,followers_url){
    console.log(avatar_url)
    let d = document.createElement("img");
    let a = document.createElement("a")
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
    pseudo.setAttribute('href', "https://github.com/"+login)
    var followers = document.getElementById("test").appendChild(f);
    followers.classList.add("follower")
    var repos = document.getElementById("test").appendChild(r);
    repos.classList.add("repository")
    var follow_url = document.getElementById("test").appendChild(follow);
    follow_url.classList.add("url")
    
 }
 function affiche_followers(login){
    console.log(login)
    let followers = document.createElement("a");
    followers.innerHTML += login;
    var followers_pseudo = document.getElementById("test").appendChild(followers);
    followers_pseudo.classList.add("login");
    followers_pseudo.setAttribute('href', "https://github.com/"+login)
}
function affiche_repos(full_name){
    console.log(full_name)
    let repos = document.createElement("a");
    repos.innerHTML += full_name;
    var repos_name = document.getElementById("test").appendChild(repos);
    repos_name.classList.add("repos");
    repos_name.setAttribute('href', "https://github.com/"+full_name)
}
function load_students(){
    fetch ('./etudiants.json')
        .then(data => data.json())
        .then(results => loads_student(results.students))
}
load_students()