

let gridCols = 10;
let gridRows = 5;
let cellsNum = gridCols * gridRows; //calcolo griglia

let gridElement = document.querySelector('.game-grid') //recupero elemento griglia dal dom

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
        console.log(cellElement.innerHTML);
        cellElement.classList.toggle('active')
    })

}
