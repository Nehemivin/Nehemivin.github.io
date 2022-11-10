(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)
    
    titleQuestions.forEach(question => {
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            /*  SE VE UN EFECTO de tiempo de abrir y cerrar */
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--rotate');    
            /* HACE QUE LA FLECHA ROTE  */
            question.children[0].classList.toggle('questions__arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;

        });
    });
})();