const container = document.querySelector(".container"); 
const seats = document.querySelectorAll(".row.seat:not(.occupied)"); 
const count = document.getElementById("count"); 
const total = document.getElementById("total"); 
const movieSelect = document.getElementById("movie"); 
let ticketPrice = +movieSelect.value;

// Save Selected Movie Index & Price
function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem("selectedMovieIndex", movieIndex); 
    localStorage.setItem("selectedMoviePrice", moviePrice); 
}


//Update Total & Count 

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll(".row .seat.selected"); 
    
    const seatsIndex = [...selectedSeats].map(function(seat){
        [...seats].indexOf(seat)
    }); 

    localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex)); 
    const selectedSeatsCount = selectedSeats.length; 
    count.innerText = selectedSeatsCount; 
    total.innerText = selectedSeatsCount * ticketPrice; 
}; 

//Movie Select Event
movieSelect.addEventListener("change", function(e){
    ticketPrice = +e.target.value; 
    setMovieData(e.target.selectedIndex, e.target.value); 
    updateSelectedCount(); 
}); 

//Seat Click Event
container.addEventListener("click", function(e){
    if(e.target.classList.contains("seat") && 
    !e.target.classList.contains("occupied")){
        e.target.classList.toggle("selected"); 
    updateSelectedCount(); 
    }
}); 