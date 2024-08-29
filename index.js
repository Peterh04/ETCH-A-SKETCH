const containerGrid = document.querySelector('.container');






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

        }
        
    }

    
    
}



createGrid(50);


