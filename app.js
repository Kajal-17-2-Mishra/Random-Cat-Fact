let url = "https://catfact.ninja/fact";
let btn = document.querySelector('#fact');
btn.addEventListener("click", async ()=>{
  let fact = await getFacts();
  let p = document.querySelector("p");
  p.innerText = fact;
})
async function getFacts(){
    try {
      let response = await axios.get(url);
      return response.data.fact;
    } catch (error) {
      console.log(`Error: ${error}`);
      return 'fact not found!'
    }
  }