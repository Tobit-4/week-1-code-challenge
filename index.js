const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "image/shoyu ramen.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "image/miso ramen.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "image/Tonkotsu ramen.jpg" }
 ];
function displayRamens(){
    const ramenDisplay = document.getElementById("ramenDisplay");
    console.log(ramenDisplay)
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add('ramenImage')
        img.addEventListener("click",()=>{handleClick(ramen)})

        ramenDisplay.appendChild(img);
    });
    
}


function handleClick(ramen){
    const ramenDetails = document.getElementById('#ramen-detail')
    ramenDetails.innerHTML = `
    <div class="ramenContainer">
      <img src="${ramen.image}" alt="${ramen.name}" class="ramenDetailed">
      <div class="ramzz">${ramen.name}</div>
    </div>
    <p><strong>Restaurant:</strong>:${ramen.restaurant}
    <p><strong>Rating</strong>:${ramen.rating}
    <p><strong>Comment</strong>:${ramen.comment}`;

}

function addSubmitListener(){
    const form = document.getElementById("newRamen");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
    
        
 
    const name = document.getElementById("newName").value;
    const restaurant =  document.getElementById("newRestaurant").value;
    const image =  document.getElementById("newImage").value;
    const rating =  document.getElementById("newRating").value;
    const comment =  document.getElementById("newComment").value;

    const myNewRamen = {
        id: ramens.length +1,
        name,
        restaurant,
        image,
        rating,
        comment
    }

    ramens.push(myNewRamen)
    
    const ramenDisplay = document.getElementById("ramenDisplay")
    const newImg = document.createElement('img');
    newImg.src = myNewRamen.image;
    newImg.alt = myNewRamen.name;
    newImg.classList.add("newimage");
    newImg.addEventListener("click",()=>handleClick(myNewRamen));

    ramenDisplay.appendChild(newImg);
    console.log(newImg);
    form.reset();
    });
}

function main(){
    displayRamens();
    addSubmitListener();
};


document.addEventListener("DOMContentLoaded",main)