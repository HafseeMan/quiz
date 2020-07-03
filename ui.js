class Card{
    loadQuestions(){
        const xhr = new XMLHttpRequest();

            
            xhr.open('GET', 'question.json', true);

            xhr.onload = function(){
                if(this.status === 200){
                    const questions = JSON.parse(this.responseText);

                    let question = questions[pointer];
                    let output = '';
                        output += `
                        <h4>QUESTION ${question.number}</h4>
                        <p class="question-text text-danger">${question.text}</p>
                        <ol class="text-left">
                            <li><button class="1 option btn btn-block btn-success 1">${question.option1}</button></li>
                            <li><button class="2 option btn btn-block btn-success 2">${question.option2}</button></li>
                            <li><button class="3 option btn btn-block btn-success 3">${question.option3}</button></li>
                        </ol>
                        `;
        
                    document.getElementById('question-container').innerHTML = output; 
                    pointer = pointer + 1
                }
            }
            
            xhr.send();
            
    }
    
    optionSelect(target){
        //to clear all other options
        let allOptions = document.getElementsByClassName('option')
        for(let i=0; i<allOptions.length; i++){
            allOptions[i].classList.replace('btn-danger','btn-success')
        }

        //to change color and save answer
        if(target.classList.contains('option')){
            target.classList.replace('btn-success','btn-danger')
            attempt = target.classList[0]
        }
    }

    compareToAnswer(pointer){
        const xhr = new XMLHttpRequest();

            
        xhr.open('GET', 'question.json', true);

        xhr.onload = function(){
            if(this.status === 200){
                const questions = JSON.parse(this.responseText);

                if(attempt == questions[pointer-1].answer){
                    score = score + 1
                    document.getElementById('score').innerText = score
                }
                
            }
        }
        
        xhr.send();
    }

    showScore(){
        exam_area.style.display = 'none'
        result_area.style.display = 'block'
    }
}