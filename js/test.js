//dato un pool di celle, ne prendo una % causale e gli assegno la classe BOMB
//mi serve un'arr per storarle + un num casuale not-repeated



let nameArr = ['marco', 'andrea', 'filippo', 'giulio', 'francesco',
'pippo', 'pluto', 'paperino', 'topolino', 'wario'] //10

//controllo gli input per trovare i due numero che mi servono
let poolRange = nameArr.length; //range
console.log('pool', poolRange);

let level = 'easy';
let levelOutput = 0;

if (level === 'easy'){
    levelOutput = Math.round((poolRange / 100) * 25); //3
} else if (level === 'medium'){
    levelOutput = Math.round((poolRange / 100) * 50); //5
} else if (level === 'hard') {
    levelOutput = Math.round((poolRange / 100) * 75); //8
}


console.log('level', levelOutput); //output count


let myRndIndexesList = randomUniqueIndexesList(poolRange, levelOutput); //lista indice univoci casuali
console.log('list rand', myRndIndexesList);
myRndIndexesList.sort();
console.log('list sorted', myRndIndexesList);


let rndNamePickList = []
for (let i = 0; i < myRndIndexesList.length; i++){
    rndNamePickList.push(nameArr[myRndIndexesList[i]])
}

console.log('rnd name picked', rndNamePickList);



//genero un numero random di indici rispetto a range num caselle e livello scelto
//serve per prendere randomicamente le caselle a cui assegnare la BOMBA
function randomUniqueIndexesList(cellsRange, levelOutputRange) {

    let arr = [] //creo un array con tutti i num da 1 a range
    for (let i = 0; i < cellsRange; i++) { //parto da zero perché l'output è una lista di indici
        arr.push(i)
    }
    console.log('initial arr', arr)

    let result = [];
    
    for (let i = 1; i <= levelOutputRange; i++) {
        const random = Math.floor(Math.random() * (cellsRange - i));
        //riducendo il range ad ogni iterazione
        //alla fine andrà a prendere sempre tra i primi numeri fino al primo
        //che saranno sempre diversi
        result.push(arr[random]);
        arr[random] = arr[cellsRange - i];
    }
    
    console.log('rnd arr', arr);
    console.log('pick result', result);
    return result;
}
