class Giphy{
    
async getGif(search){
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=mEnMMlj9BfvZRi7YEsfbH7yes9f3w8l3&q=${search}&limit=12&offset=0&rating=g&lang=en`)
    let resData = await response.json()
    return resData;
}

}