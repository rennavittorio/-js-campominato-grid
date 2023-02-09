//recupero elementi da DOM per input user
let playBtnElement = document.querySelector('.play-btn');
let userColsElement = document.getElementById('colSelection');
let userRowsElement = document.getElementById('rowSelection');
let userLevelElement = document.getElementById('levelSelection');



playBtnElement.addEventListener('click', function(){
    //recupero input utente
    let userColsInput = parseInt(userColsElement.value);
    let userRowsInput = parseInt(userRowsElement.value);
    let userLevelInput = parseInt(userLevelElement.value);
    console.log('cols', userColsInput, 'rows', userRowsInput, 'level', userLevelInput);

    let gridCols = userColsInput;
    let gridRows = userRowsInput;
    let cellsNum = gridCols * gridRows; //calcolo griglia
    
    let gridElement = document.querySelector('.game-grid') //recupero elemento griglia dal dom
    gridElement.innerHTML = ``; //resetta campo ad ogni click
    
    //creo la griglia dinamica
    for (let i = 0; i < cellsNum; i++){
        let num = i + 1;
    
        //creo l'elemento
        const cell = `
                        <div class="cell cell-${num}" style="width: calc(100% / ${gridCols})">
                            ${num}
                        </div>
                    ` 
    
        gridElement.innerHTML += cell; //lo inserisco nel DOM
    }
    
    
    //genero l'evento click quando sono sulla casella
    for (let i = 0; i < cellsNum; i++){
        let cellElement = document.querySelector(`.cell-${i + 1}`);
        
        //aggiungo l'evento click a tutti gli elementi
        cellElement.addEventListener('click', function(){
            console.log(i + 1);
            cellElement.classList.toggle('active')
        })
    
    }


})




