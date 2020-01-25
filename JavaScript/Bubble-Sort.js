const MAX_ARR_SIZE = 100;

main();

function main(){
    let arr = []

    for (i = 0; i < MAX_ARR_SIZE; i++)
        arr[i] = Math.floor(Math.random() * 101)
    
    console.log(arr)

    bubbleSort(arr)

    console.log(arr)
}

function bubbleSort(arr){
    let n = arr.length

    for(i = 0; i < n; i++){
        for(j = i + 1; j <= n; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}