//Description: This is the main Javascript file for the Etch-a-sketch project by Kristal Dow.
//
//            For a README containing full information and credits, you can clone from: 
//                https://github.com/KristalMDow/etch-a-sketch
//
//            Last Edited: 20190430 KMD

let numOfDivs = 16;
const container = document.querySelector('#container');

// Listener for button click.
// Select all buttons and put into a node list.
const buttons = document.querySelectorAll('button');
// Cycle through each button and add a listener for a click event.
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // Allows user to update resolution. Clears previous board, places new one.
        if (button.id == "numOfDivsBtn"){
            numOfDivs = parseFloat(prompt("Choose resolution (must be less than 100) : ", "16"));
            clearDivs();
            placeDivs();
        }
        // Empties the board.
        if (button.id == "clearBtn") {
            // Calls function to clear the board.
            clearDivs();
            placeDivs();
        }
    });
});

placeDivs();

// Places divs on the webpage.
function placeDivs(){
    

    // Place divs.
    for (let i=0; i<numOfDivs; i++){
        for (let i = 0; i < numOfDivs; i++){
            const content = document.createElement('div');
            content.classList.add('content');
            
            // Adjust size of divs based on number listed.
            if (numOfDivs >= 16 && numOfDivs <= 25)
            {
                content.style.width = "25px";
                content.style.height = "25px";
            } else if (numOfDivs > 25 && numOfDivs <= 50){
                content.style.width = "20px";
                content.style.height = "20px";
            } else if (numOfDivs > 50 && numOfDivs <=75){
                content.style.width = "15px";
                content.style.height = "15px";
            } else if (numOfDivs > 75 && numOfDivs <= 100){
                content.style.width = "10px";
                content.style.height = "10px";
            }

            // Listener for if div is clicked.
            content.addEventListener('click', (e) => {
                // On click, the background of the div is filled.
                content.style.backgroundColor = 'black';
        
            });
            
            container.appendChild(content);
        }
        var linebreak = document.createElement("p");
        container.appendChild(linebreak);
    }
}

// Clear all divs.
function clearDivs() {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }

}