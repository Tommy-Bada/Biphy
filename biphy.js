let giphy = new Giphy
let searchBar = document.querySelector("#search")
document.querySelector("form").addEventListener("submit", (e) =>{
    document.querySelector("#search-result-container").innerHTML = ""
    document.querySelector("#btn-c").innerHTML = ""
        giphy.getGif(searchBar.value)
        .then((result) => {
            console.log(result.data);
            result.data.forEach(function(content){
                let box = document.createElement("div")
                box.classList.add("box")
                box.innerHTML = `
                <iframe src="${content.embed_url}"></iframe>
                <p>${content.title}</p>
                <div><a href="${content.url}"><img src="images/link.png" alt="link-icon" height="25px" /></a></p></div>
                `
                document.querySelector("#search-result-container").appendChild(box)
                document.querySelector("#btn-c").innerHTML = `<button class="clear-btn" >Clear Search</button>`
            })
        })

        e.preventDefault()
    })

    document.querySelector("#btn-c").addEventListener("click", function(e){
        if(e.target.classList.contains("clear-btn")){
        document.querySelector("#search-result-container").innerHTML = ""
        searchBar.value = ""
        document.querySelector("#btn-c").innerHTML = ""
        }
    })
           