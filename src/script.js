document.addEventListener('DOMContentLoaded',() =>{
    const getjokebtn = document.getElementById("butn")
    const dis = document.getElementById("injected")

    getjokebtn.addEventListener('click',async () =>{


        try{
            const jokedata = await fetchdata()
            displaydata(jokedata)
        }
        catch(error){
            showError()
        }

    })

    async function fetchdata(){
        const url = `https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%252Cid%252Ccontent&page=1`

        const response = await fetch(url)
        console.log(response)

        if(!response.ok){
            throw new Error("The response is not ok")
        }

        const data = await response.json()
        return data
    }

    function displaydata(data1){
        console.log(data1)
        const{data} = data1
        let n = getRandomInt(4)
        console.log(n)
        dis.textContent = data.data[n].content

    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function showError(){

    }

})