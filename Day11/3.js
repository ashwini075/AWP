

const parent = document.querySelector('#mid');
//console.log(mid);

window.addEventListener('load',() =>{
    console.log('on.load');
    const mid = document.querySelector('#mid');
    console.log('inside.load',mid);

    for(let i = 0; i < 10; i++)
    {
        const newElement = mid.children[0].cloneNode(true);
        newElement.style.display = 'flex' ;
        
        mid.append(newElement);
    }
})