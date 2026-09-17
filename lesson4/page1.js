console.log("PAGE1");

const button = document.getElementById('button');
button.addEventListener('click',(event)=>{
    const title = document.getElementById('title');
    title.textContent = 'Page2'
    event.target.textContent = 'Go to page 1';
})