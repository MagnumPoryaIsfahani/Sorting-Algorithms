const MAX_ARR_SIZE = 100;

main();

function main(){
    let arr = []

    for (i = 0; i < MAX_ARR_SIZE; i++) 
        arr[i] = Math.floor(Math.random() * 101) 

    console.log(arr)

    insertionSort(arr)

    console.log(arr)
}

function insertionSort(arr){
    let n = arr.length
    
    for(let i = 0; i < n; i++){
        let current = arr[i]
        let j = i - 1

        while(j >= 0 && arr[j] > current){
            arr[j+1]=arr[j]
            j = j - 1
        }
    }
}


