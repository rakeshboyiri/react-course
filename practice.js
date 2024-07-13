const arr = [40,30,50,70,10]

for(var i = 0 ; i < arr.length ; i++){
    for  (var j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            var temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}
console.log(arr)
y = 10,20;
console.log(y);