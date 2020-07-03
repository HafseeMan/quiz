var start_btn = document.getElementById("start-area");
var exam_area = document.getElementById("exam-area");
var result_area = document.getElementById("result-area");
var next_btn = document.getElementById("next-btn")


//Pointer to point to next question in array
var pointer = 0
//To count score
var score = 0; 

//initializing
const ui = new Card();

//START BUTTON
start_btn.addEventListener('click', (e) => { 
        score = 0
        pointer = 0
        exam_area.style.display = 'block'
        start_btn.style.display = 'none'
        result_area.style.display = 'none'
        ui.loadQuestions();
    });
    
//SELECTING OPTIONS
var attempt = 0

document.getElementById('question-container').addEventListener('click', (e) => {
    ui.optionSelect(e.target)
});

//NEXT BUTTON
next_btn.addEventListener('click', (e) => {
   if(pointer !== 5){
        ui.compareToAnswer(pointer)    
        ui.loadQuestions();
   }
   if(pointer == 5){
       ui.compareToAnswer(pointer)
       ui.showScore()

       start_btn.style.display = 'block'
    
   }
});





