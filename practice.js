var arr = [40,20,50,10,30]
var sort = (arr,n) =>{
    if (n==1){
        return ;
    }

    for(var i = 0;i<n-2;i++){
        if(arr[i]>arr[i+1]){
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    sort(arr,n-1);
}
sort(arr,arr.length);
console.log(arr);