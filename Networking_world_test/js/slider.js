/*proteger el codigo*/
/*... array*/
(function(){
    
    const sliders = [...document.querySelectorAll('.career_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentCareer = document.querySelector('.career_body--show').dataset.id;
        value = Number(currentCareer);
        value+= add;


        sliders[Number(currentCareer)-1].classList.remove('career_body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('career_body--show');

    }

})();
