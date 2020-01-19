const MAX_ARR_SIZE = 10;

main();

function main(){
    let arr = []

    for (i = 0; i < MAX_ARR_SIZE; i++)
        arr[i] = Math.floor(Math.random() * 101)
    
    console.log(arr)

    selectionSort(arr)

    console.log(arr)
}

function selectionSort(arr){
    let n = arr.length
    if(n == 0) return;

    for (i = 0; i < n-1; i++){
        min_index = i
        for(j = i+1; j < n; j++){
            if(arr[j] < arr[min_index])
                min_index = j
        }
        let temp = arr[i]
        arr[i] = arr[min_index]
        arr[min_index] = temp
    }
}