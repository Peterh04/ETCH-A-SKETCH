const containerGrid = document.querySelector('.container');
const eraser = document.querySelector('#eraser');
const sketchBtn = document.querySelector('#sketchBtn');
const colorBtn = document.querySelector('#multicolorBtn');
const gridSizeBtn = document.querySelector('#gridSize');



function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color +=  letters[Math.floor(Math.random() * 16)];

    }
    return color;
}







function createGrid(sides) {
    sketchBtn.classList.add('clicked');
    
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
                    subgrid2.style.background = '';
                    subgrid2.classList.add('colored');
                })
            }
            
            sketchBtn.addEventListener('click', ()=> {
               
                sketch();
                
                sketchBtn.classList.add('clicked');
                eraser.classList.remove('clicked');
                colorBtn.classList.remove('clicked');
                gridSizeBtn.classList.remove('clicked');
            }, )
            
            
            function eraseSketch() {
                
                subgrid2.addEventListener('mouseover',()=> {

                    subgrid2.classList.remove('colored');
                    subgrid2.removeAttribute('background-color');
                    subgrid2.style.background = '';
                    
                })
            } 
            
                eraser.addEventListener('click', ()=>{
                    eraseSketch();
                    eraser.classList.add('clicked');
                    colorBtn.classList.remove('clicked');
                    gridSizeBtn.classList.remove('clicked');
                    sketchBtn.classList.remove('clicked');
                    
                })


                colorBtn.addEventListener('click', ()=>{

                    colorBtn.classList.add('clicked');
                    eraser.classList.remove('clicked');
                    gridSizeBtn.classList.remove('clicked');
                    sketchBtn.classList.remove('clicked');

                    subgrid2.addEventListener('mouseover', ()=>{
                        subgrid2.classList.add('colored');
                        subgrid2.style.background = getRandomColor();
                        
                        
                    })
                })

                function removeGrid(){            
                        subgrid.remove();
                        subgrid2.remove();
                
                }

               
                
                gridSizeBtn.addEventListener('click', ()=>{

                    gridSizeBtn.classList.add('clicked');
                    eraser.classList.remove('clicked');
                    colorBtn.classList.remove('clicked');
                    sketchBtn.classList.add('clicked');

                    

                    removeGrid();
                    
                })
                
            
            
        }
            
        }
        
        
        
    }
    createGrid(16);


   gridSizeBtn.addEventListener('click', ()=>{
    console.log('click');
    let sides = Number(prompt('What size? '));
    if ( sides > 64){
        alert('Grid size should not be more than 64');
        createGrid(16);
    }else{
        createGrid(sides);
    }
    
   }) 
    
    


