const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "image/shoyu ramen.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "image/miso ramen.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "image/Tonkotsu ramen.jpg" }
 ];
 //Create a function to display the ramens images
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

//Create a function so that when one of the images is clicked by the client,it displays the ramens data
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
//Add an event listener for the new image 
function addSubmitListener(){
    const form = document.getElementById("newRamen");
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
    
        
    //Get the form elements 
    const name = document.getElementById("newName").value;
    const restaurant =  document.getElementById("newRestaurant").value;
    const image =  document.getElementById("newImage").value;
    const rating =  document.getElementById("newRating").value;
    const comment =  document.getElementById("newComment").value;
    //create a new object
    const myNewRamen = {
        id: ramens.length +1,
        name,
        restaurant,
        image,
        rating,
        comment
    }
    //Update the ramens array with the new array
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
//Display ramens and the form submit listener 
function main(){
    displayRamens();
    addSubmitListener();
};

//call the main function after the DOM loads 
document.addEventListener("DOMContentLoaded",main)