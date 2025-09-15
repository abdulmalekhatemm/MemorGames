//Select The Start Game Button
document.querySelector(".control-buttons span").onclick = function ( ) {
//Prompt Window To Ask For Name 
    let yourName = prompt("Whats Your Name ?");
   // If Name Empty 
if(yourName == null || yourName == "")
    {
        //Set Name To Unknown
        document.querySelector(".name span").innerHTML = "Unknown";
    }
    else{
        //Set Name To yourName
      document.querySelector(".name span").innerHTML =  yourName ;
    }
    //Remove Splash Screen 
    document.querySelector(".control-buttons").remove();
}
//Effect Duration 
let duration = 1000 ;
//Select Blocks Container 
let blocksContainer = document.querySelector(".memory-game-blocks");
//Create Array From Game Blacks 
let blocks = Array.from(blocksContainer.children);
// console.log(blocks.length);
// let orderRange = [...Array(blocks.length).keys()];

//Create Range Of Keys 
let orderRange = Array.from(Array(blocks.length).keys());
// console.log(orderRange);
 Shuffle(orderRange);
//  console.log(orderRange);
// console.log(orderRange);
//Add Order Css Property To Game Blacks 
blocks.forEach((block ,index) => {

    //add Css Order Property 
block.style.order = orderRange[index];

//Add Click Event 
block.addEventListener('click', function () {

//Trigger The Flip Block Function 
 flipBlock(block);
});

});
//Flip Block Function 
function flipBlock(selectedBlock){

    //Add Class is-flipped 
    selectedBlock.classList.add('is-flipped');
     
    //Collect All Flipped Cards 
    let allFlippedBlocks = blocks.filter(flipBlock => flipBlock.classList.contains('is-flipped'));

    //If There Two Selected Blocks 
    if(allFlippedBlocks.length === 2 ) {
        // console.log("Two Flipped Blocks Selected ");

        //Stop Clicking Function 
        stopClicking();
        //Check matched Block Function 
        checkMathchedBlocks(allFlippedBlocks[0] , allFlippedBlocks[1]);
    }

}
//Stop Clicking Function 
function stopClicking() {
    //Add Class No Clicking On Main Container
    blocksContainer.classList.add('no-clicking');
     
    //Wait Duration
    setTimeout(() => {

        //Remove Class No Clicking After The Duration
        blocksContainer.classList.remove('no-clicking');
    },duration);
}
//Check Mathed Block 
function checkMathchedBlocks(firstBlock,secondBlock){
    
    let triesElement = document.querySelector(".tries span");

    if(firstBlock.dataset.technology === secondBlock.dataset.technology ) { 

        firstBlock.classList.remove("is-flipped");
        secondBlock.classList.remove("is-flipped");

        firstBlock.classList.add("has-match");
        secondBlock.classList.add("has-match");
        document.getElementById('success').play();

    }
    else
    {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1 ;
          setTimeout(()=> {
            firstBlock.classList.remove("is-flipped");
            secondBlock.classList.remove("is-flipped");
          },duration);
          document.getElementById('fail').play();
    }
}
//Shuffle Function 
function Shuffle( array ) {
    //Setting var 
    let current = array.length ,
      temp ,
      random;
      while(current > 0 ) {

       //Get Random Number 
       random = Math.floor(Math.random() * current);

       //Decrease Length By One 
       current--;

       console.log(random);
 //[1] Save Current Element in Stash
       temp = array[current];
//[2]Current Element = random Element
       array[current] = array[random];

//[3]Random Element = Get Element From In Stash
       array[random] = temp ;
      }
      return array;
}
//Current Arrar [1,2,3,4,5,6,7,8,9,0]
//New Array [1,2,3,4,5,6,7,8,9,0]

//[2]Current Element = random Element
//[3]Random Element = Get Element From In Stash 












