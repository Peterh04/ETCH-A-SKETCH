const containerGrid = document.querySelector('.container');
const eraser = document.querySelector('#eraser');
const sketchBtn = document.querySelector('#sketchBtn');
const colorBtn = document.querySelector('#multicolorBtn');
const gridSize = document.querySelector('#gridSize');




function getGridSize(){
    let sides = prompt('What is your grid size? ')
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color +=  letters[Math.floor(Math.random() * 16)];

    }
    return color;
}



 






function createGrid(sides) {
    

    for (let y = 0; y < sides ; y++){
        const subgrid = document.createElement('div');
        subgrid.setAttribute('style', 'border: transparent; flex : 1; display : flex')
        subgrid.style.flexDirection = 'row'
        subgrid.setAttribute('id', 'width')
        
        containerGrid.appendChild(subgrid);
        
        
        for (let z = 0; z < sides; z ++){
            const subgrid2 = document.createElement('div');
            subgrid2.setAttribute('style', 'border: transparent; flex : 1;');
            subgrid2.classList.add('innerGrid')
            subgrid.appendChild(subgrid2)
            
            
            
            subgrid2.addEventListener('mouseover',()=> {
                subgrid2.classList.add('colored')
                
                
                
            })
            
            function sketch(){
                
                subgrid2.addEventListener('mouseover', ()=>{
                    subgrid2.classList.remove('coloredMultiple');
                    subgrid2.classList.add('colored');
                })
            }
            
            sketchBtn.addEventListener('click', ()=> {
               
                sketch();
                console.log('clicked');
            }, )
            
            
            function eraseSketch() {
                
                subgrid2.addEventListener('mouseover',()=> {

                    subgrid2.classList.remove('colored');
                    subgrid2.removeAttribute('background-color');
                    subgrid2.style.background = '';
                    
                })
            } 
            
                eraser.addEventListener('click', ()=>{
                    eraseSketch()
                    
                })


                colorBtn.addEventListener('click', ()=>{
                    subgrid2.addEventListener('mouseover', ()=>{
                        subgrid2.classList.add('colored');
                        subgrid2.style.background = getRandomColor();
                        
                    })
                })
            
            
        }
            
        }
        
        
        
    }

    
    
    createGrid(10);
    
    


