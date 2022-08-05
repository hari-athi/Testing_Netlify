// const users = [
//     {
//       createdAt: "2021-07-08T16:03:21.350Z",
//       name: "Dr. Armando Wilkinson",
//       avatar: "https://cdn.fakercloud.com/avatars/safrankov_128.jpg",
//       id: "1"
//     },
//     {
//       createdAt: "2021-07-08T08:57:12.518Z",
//      name: "Stephanie Rogahn",
//       avatar: "https://cdn.fakercloud.com/avatars/Shriiiiimp_128.jpg",
//       id: "2"
//     },
//     {
//       createdAt: "2021-07-09T01:12:29.377Z",
//      name: "Claude Collins",
//       avatar: "https://cdn.fakercloud.com/avatars/kimcool_128.jpg",
//       id: "3"
//     },
//     {
//       createdAt: "2021-07-09T00:05:02.016Z",
//       name: "Lisa Erdman",
//       avatar: "https://cdn.fakercloud.com/avatars/johncafazza_128.jpg",
//       id: "4"
//     },
//     {
//       createdAt: "2021-07-08T10:04:17.740Z",
//       name: "Nellie Gorczany",
//       avatar: "https://cdn.fakercloud.com/avatars/iduuck_128.jpg",
//      id: "5"
//     },
//     {
//       createdAt: "2021-07-09T05:17:52.657Z",
//       name: "Cristina Oberbrunner",
//       avatar: "https://cdn.fakercloud.com/avatars/vaughanmoffitt_128.jpg",
//       id: "6"
//     },
//     {
//       createdAt: "2021-07-08T19:05:11.867Z",
//       name: "Ernest Adams",
//       avatar: "https://cdn.fakercloud.com/avatars/marcobarbosa_128.jpg",
//       id: "7"
//     },
//     {
//       createdAt: "2021-07-08T16:50:23.231Z",
//       name: "Preston Carroll",
//       avatar: "https://cdn.fakercloud.com/avatars/jnmnrd_128.jpg",
//       id: "8"
//     },
//     {
//       createdAt: "2021-07-08T18:52:56.658Z",
//       name: "Roderick Kerluke I",
//       avatar: "https://cdn.fakercloud.com/avatars/instalox_128.jpg",
//       id: "9"
//     },
//     {
//       createdAt: "2021-07-08T15:29:47.213Z",
//       name: "Ernestine Kling",
//       avatar: "https://cdn.fakercloud.com/avatars/jesseddy_128.jpg",
//       id: "10"
//     },
//     {
//       createdAt: "2021-07-09T06:08:38.593Z",
//       name: "Ida Fahey",
//       avatar: "https://cdn.fakercloud.com/avatars/jarsen_128.jpg",
//       id: "11"
//     },
//     {
//       createdAt: "2021-07-09T05:23:39.814Z",
//       name: "Lorene McCullough",
//       avatar: "https://cdn.fakercloud.com/avatars/dnirmal_128.jpg",
//       id: "12"
//     },
//     {
//       createdAt: "2021-07-08T21:53:26.640Z",
//       name: "Mrs. Jacquelyn Weissnat",
//       avatar: "https://cdn.fakercloud.com/avatars/fotomagin_128.jpg",
//       id: "13"
//     }
//   ];
 


//  let container = document.createElement("div");
//  container.className="container-fluid";
// //  container.className="row";
//  users.forEach((user)=>{
//    const content = document.createElement("div");
//    content.className = "box";
// //    content.className = "g-col-6";
// //    content.className = "col-6"

//    content.innerHTML = `
//    <img src=${user.avatar} class='userimage'></img>
//    <div>
//    <p class='username'>${user.name}<p>
//    <p class='time'>${new Date(user.createdAt).toDateString()}</p>
//    </div>`
//    container.append(content);
//  });
//  document.body.append(container);


//------------------------------------------------------
// async function getuser(){
// const data = await fetch("https://62ea7549ad295463258d0e6a.mockapi.io/users",{method:"GET"});
// const user = await data.json();
// const no = Math.ceil(user.length/10);
// const pagination = document.querySelector(".pagination");

// for(let i = 0; i<no; i++){
//   const page = document.createElement("button");
//   page.innerText=i+1;
//   page.onclick = function(){
//     const pageusers = user.slice(i*10,(i+1)*10);
//   };
//   document.querySelector(".user_container").remove();
//   load_user(pageusers);
//   pagination.append(page);
// }

// const firstten = user.slice(0,10);
// console.log(firstten);
// load_user(firstten);
// // refresh();

// }

//--------------------------------------------------------

function getuser(){
  fetch("https://62ea7549ad295463258d0e6a.mockapi.io/users",{method:"GET"})
  .then((data) => data.json())
  .then((users) => load_user(users));
}
//---------------------------------------------------------

 function load_user(users){

  let container = document.createElement("div");
 container.className="user_container";
//  container.className="row";
 users.forEach((user)=>{
   const content = document.createElement("div");
   content.className = "box";
//    content.className = "g-col-6";
//    content.className = "col-6"

   content.innerHTML = `
   <img src=${user.avatar} class='userimage'></img>
   <div>
   <p class='username'>${user.name}<p>
   <p class='time'>${new Date(user.createdAt).toDateString()}</p>
   <button onclick="deleteuser(${user.id})" class = "user_delete">Delete</buuton>
   <button onclick="edituser('${user.id}','${user.name}','${user.avatar}')" class = "user_edit">Edit</button>
   </div>`
   container.append(content);
 });
 document.body.append(container);
 }
 //---------------------------------------------------------
getuser();
//----------------------------------------------------------
 function adduser(){

  const name = document.querySelector(".new_user").value;
  const url = document.querySelector(".imageurl").value;
  const date = new Date();
  user_detail = {
    name : name,
    avatar : url,
    createdAt : date
  }
  const method = document.querySelector(".addinguser").innerText ==="Edit user" ? 'PUT' : 'POST';
  const uid = method === 'PUT' ? localStorage.getItem("userid") : "";
  // console.log(uid);

  fetch("https://62ea7549ad295463258d0e6a.mockapi.io/users/"+uid,{
    method:method,
    headers:{
      "Content-Type":"application/json"
   },
   body: JSON.stringify(user_detail)
  }).then((users) => {
    refresh();
  });  
}
//----------------------------------------------------------------------
// if(method == 'Add'){

//   fetch("https://62ea7549ad295463258d0e6a.mockapi.io/users",{
//    method:"POST",
//    headers:{
//      "Content-Type":"application/json"
//   },
//   body: JSON.stringify(user_detail)
//  }).then((users) => {
//    refresh();
//  });
// }else{
//   const uid = window.localStorage.getItem("userid");
//   fetch("https://62ea7549ad295463258d0e6a.mockapi.io/users/"+uid,{
//    method:"PUT",
//    headers:{
//      "Content-Type":"application/json"
//   },
//   body: JSON.stringify(user_detail)
//  }).then((users) => {
//    refresh();
//  });
// }
//---------------------------------------------------------------------
 function deleteuser(id){

  fetch("https://62ea7549ad295463258d0e6a.mockapi.io/users/"+id,{
  method:"DELETE",
  headers:{
    "Content-Type":"application/json"
 },
//  body: JSON.stringify(user_detail)
}).then((users) => {
  refresh();
});
 }
//----------------------------------------------------------------------
 function edituser(userid,username,url){
   document.querySelector(".new_user").value=username;
   document.querySelector(".imageurl").value=url;
   document.querySelector(".addinguser").innerText="Edit user";
   console.log(userid);
   localStorage.setItem("userid",userid);
 }
//----------------------------------------------------------------------
 function reset(){

   document.querySelector(".user_container").remove();
   document.querySelector(".new_user").value = "";
   document.querySelector(".imageurl").value = "";
   document.querySelector(".addinguser").innerText = "Add";
 }
//----------------------------------------------------------------------
 function refresh(){
  reset();
  getuser();
 }
 //---------------------------------------------------------------------