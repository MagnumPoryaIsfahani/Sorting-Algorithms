const MAX_ARR_SIZE = 10;

main();

function main(){
    let arr = []

    for (i = 0; i < MAX_ARR_SIZE; i++){
        arr[i] = Math.floor(Math.random() * 101)
        console.log(arr[i])
    }
    //selectionSort(arr)
}

function selectionSort(arr){
    let n = arr.length
    if(n == 0) return;
    let min = arr[0]


    for (i = 0; i < n-1; i++){
        min_index = i;



}