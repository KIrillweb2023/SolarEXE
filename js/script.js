
const forms = document.querySelector('form');
const body = document.querySelector('body');
const button = document.querySelector('.add_btn');

function showOpacityBackground(){
    //document.body.style.overflow = 'hidden';
    const element = document.createElement('div');

    const text = document.createElement('div');
    text.classList.add('loading');
    text.textContent = 'Подождите, данные отправляются на сервер...';
    text.style.cssText = `
        text-align: center;
        color: #FFFFFF;
        font-size: 40px;
        margin-top: 450px;
    `;

    element.classList.add('background');
    element.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;   
        height: 100%;
        background-color: rgba(0, 0, 0, 0.800);
    `;
    body.append(element);
    element.append(text);
    setTimeout(() =>{
        element.style.display = 'none';
    }, 3000);
}
//showOpacityBackground();

requestData(forms);
function requestData(form){
    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open('POST', 'server.php');

        const formData = new FormData(form);
        request.send(formData);

        request.addEventListener('load', () =>{
            if(request.status === 200){
                console.log(request.response);
                showOpacityBackground();
                form.reset();
                
            } else {
                console.log('Error..');
            }
        });
    });
}




// animaation 


const promo = document.querySelector('.promo');
const sectionServis = document.querySelector('.servis');
const quote = document.querySelector('.quote');
const stantion = document.querySelector('.stantion');
const footer = document.querySelector('.footer');


window.addEventListener('scroll', () =>{
    const scrollTop = window.scrollY;
    const sectionOffsetPromo = promo.offsetHeight - 500;

    const sectionOffsetServis = sectionServis.offsetHeight + 100;
    const sectionOffsetQuote = quote.offsetHeight + 1500;
    const sectionOffsetStantion = stantion.offsetHeight + 2000;


    if(scrollTop >= sectionOffsetPromo){
        sectionServis.classList.remove('animation');
        sectionServis.classList.add('none');
    }else{
        sectionServis.classList.remove('none');
        sectionServis.classList.add('animation');
    }
    
    if(scrollTop >= sectionOffsetServis){
        quote.classList.remove('animation');
        quote.classList.add('none');
    }else{
        quote.classList.remove('none');
        quote.classList.add('animation');
    }

    if(scrollTop >= sectionOffsetQuote){
        stantion.classList.remove('animation');
        stantion.classList.add('none');
    }else{
        stantion.classList.remove('none');
        stantion.classList.add('animation');
    }
    
    if(scrollTop >= sectionOffsetStantion){
        footer.classList.remove('animation');
        footer.classList.add('none');
    }else{
        footer.classList.remove('none');
        footer.classList.add('animation');
    }
    
});



