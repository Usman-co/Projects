// const button = document.querySelector(".btn")
// const body = document.querySelector("body")
// const color = ['red', 'blue', 'green', 'pink', ' yellow','black', 'teal','white']

// body.style.backgroundColor = 'transparent';

// button.addEventListener('click', changeColor)
// function changeColor(){
//     const changer = parseInt(Math.random()*color.length);
//     body.style.backgroundColor = color[changer];
// }
(function(){
    const form = document.querySelector('.content')

    form.addEventListener('submit',function(e){
        e.preventDefault()

        const message = document.querySelector('.message')
        const feedBack = document.querySelector('.feedback')
        const messageContent = document.querySelector('.message-content')

        if(message.value === ''){
            feedBack.classList.add('show')
            setTimeout(function(){
                feedBack.classList.remove('show')
            },4000)
        }else{
            messageContent.textContent = message.value;
            message.value = ''
        }
    })
})();