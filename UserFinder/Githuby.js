function getusername(){
    if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
    }
    if (document.querySelector(".gif")) {
        document.querySelector(".gif").remove();
    }

    let name = document.querySelector(".search").value;
    document.querySelector(".search").value="";
    getuser(name);
}

async function getuser(name){
    try {
        const gif = document.createElement("div");
        gif.className = "gif";
        gif.innerHTML = `<img src="./Loading_icon.gif">`
        document.body.append(gif);
        document.querySelector(".avat").remove();
        document.querySelector(".pagination").remove();
        let datauser = await fetch(`https://api.github.com/users/${name}`,{
            method : "GET"
        });
        document.querySelector(".gif").remove();
        let data_user = await datauser.json();
        const ava_container = document.createElement("div");
        ava_container.className = "avat";
        ava_container.innerHTML=
        `<img src=${data_user.avatar_url} class="avatar">
        <h3 class="name">${data_user.login}</h3>`
        document.body.append(ava_container);
        getrepo(name);

    }
    catch (msg) {
        const error = document.createElement("h4");
        error.className = "error";
        error.innerText="User Not Found";
        error.style.color="white"
        document.body.append(error);
    }
}

async function getrepo(name){
    try {
        document.querySelector(".content").remove();
        const gif = document.createElement("div");
        gif.className = "gif";
        gif.innerHTML = `<img src="./Loading_icon.gif">`
        document.body.append(gif);
        let data = await fetch(`https://api.github.com/users/${name}/repos`,{
            method : "GET"
        });
        document.querySelector(".gif").remove();
        let users = await data.json();
        let no = Math.ceil(users.length/10);
        const pagination = document.createElement("div");
        pagination.className = "pagination";
        const content_container = document.createElement("div");
        content_container.className = "content";
        if(no == 0){
            content_container.innerHTML=`<p style="color:white">No Repository Found</p>`
        }
        for(let i = 0; i<no ; i++){
            const page_no = document.createElement("button");
            page_no.className= "page";
            page_no.innerText = i+1;
            page_no.onclick = () => {
                let pageusers = users.slice(i*10,(i+1)*10);
                loadrepo(pageusers);
            };
            pagination.append(page_no);
        }
        document.body.append(pagination);
        const pageusers = users.slice(0,10);
        pageusers.forEach(user => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `<p class="repo"> <span style="font-weight: bold" >Name: </span>${user.name}</p>
            <p class="updated"><span style="font-weight: bold" >Last Updated: </span>${user.updated_at}</p>
            <a class="link" href=${user.html_url}>click here</a>`
            content_container.append(card);
        });
        document.body.append(content_container);
    }
    catch (msg) {
        const error = document.createElement("h4");
        error.className = "error";
        error.innerText="User not found";
        error.style.color="white"
        document.body.append(error);
    }
}

function loadrepo(pageusers){
    document.querySelector(".content").remove();
    const content_container = document.createElement("div");
    content_container.className = "content";
    pageusers.forEach(user => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<p class="repo"> <span style="font-weight: bold" >Name: </span>${user.name}</p>
        <p class="updated"><span style="font-weight: bold" >Last Updated: </span>${user.updated_at}</p>
        <a class="link" href=${user.html_url}>click here</a>`
        content_container.append(card);
    });
    document.body.append(content_container);
}

function Default(){
    const ava_container = document.createElement("div");
    ava_container.className = "avat";
    const content_container = document.createElement("div");
    content_container.className = "content";
    const pagination = document.createElement("div");
    pagination.className = "pagination";
    document.body.append(ava_container);
    document.body.append(pagination);
    document.body.append(content_container);
}

Default();

function reset(){
    if (document.querySelector(".error")) {
        document.querySelector(".error").remove();
    }
    if (document.querySelector(".gif")) {
        document.querySelector(".gif").remove();
    }
    document.querySelector(".avat").remove();
    document.querySelector(".content").remove();
    document.querySelector(".pagination").remove();
    document.querySelector(".search").value="";
}

















//-----------------------------------------------------------------------------------------------------
//                              **********************************************
//-----------------------------------------------------------------------------------------------------



// async function getuser(name){
//     try {
//         let data = await fetch(`https://api.github.com/users/${name}/repos`,{
//             method : "GET"
//         });
//         let users = await data.json();
//         let datauser = await fetch(`https://api.github.com/users/${name}`,{
//             method : "GET"
//         });
//         let data_user = await datauser.json();
//             // const avat = users.owner.avatar_url;
//         let wholediv = document.createElement("div");
//         wholediv.className="master";
//         let div1 = document.createElement("div");
//         div1.className="Ava";
//         let div2 = document.createElement("div");
//         div2.className="container";
//         div1.innerHTML=
//         `<img src=${data_user.avatar_url} class="avatar">
//         <h3 class="name">${data_user.login}</h3>`
//         wholediv.append(div1);
//         const len = Math.ceil(users.length/8);
//         let pagination = document.createElement("div");
//         pagination.className="pages";
//         for(let i = 0; i<len; i++){
//             const page = document.createElement("button");
//             page.innerText=i+1;
//             page.onclick = function() {
//                 const pageuser = users.slice(i*0,(i+1)*8);
//                 document.querySelector(".container").remov
//                 pageuser.forEach(user => {
//                     const div3 = document.createElement("div");
//                     div3.className="content";
//                     div3.innerHTML=`<p class="repo">${user.name}</p>
//                     <p class="descrip">${user.description}</p>
//                     <p class="updated">${user.updated_at}</p>
//                     <a class="link" href=${user.html_url}>click here</a>`
//                     div2.append(div3);
//                 });
//                 document.body.append(div2);
//             };
//             pagination.append(page);
//         }
//         const pageuser = users.slice(0,8);
//         document.querySelector(".container").remove();
//         pageuser.forEach(user => {
//             const div3 = document.createElement("div");
//             div3.className="content";
//             div3.innerHTML=`<p class="repo">${user.name}</p>
//             <p class="descrip">${user.description}</p>
//             <p class="updated">${user.updated_at}</p>
//             <a class="link" href=${user.html_url}>click here</a>`
//             div2.append(div3);});

//     } 
//     catch (msg) {
//         const error = document.createElement("h4");
//         error.innerText="User not found"
//         document.body.append(error);
//     }
    
// }


// function load_user(){
//     // let datauser = await fetch(`https://api.github.com/users`,{
//     //         method : "GET"
//     //     });
//     //     let data_user = await datauser.json();
//             // const avat = users.owner.avatar_url;
//         let wholediv = document.createElement("div");
//         wholediv.className="master";
//         // const cards = document.createElement("div");
//         // cards.className="card";
//         // data_user.forEach(user => {
//         //     const div3 = document.createElement("div");
//         //     div3.className="content";
//         //     div3.innerHTML=`<img src=${user.avatar_url} class="avatar">
//         //     <h3 class="name">${user.login}</h3>`
//         //     cards.append(div3);
//         // });
//         // wholediv.append(cards);
//         document.body.append(wholediv);
//         getName();
// }




// function getName(){
//     let name = document.querySelector(".search").value;
//     document.querySelector(".search").value="";
//     document.querySelector(".master").remove();
//     getuser(name);
// }
