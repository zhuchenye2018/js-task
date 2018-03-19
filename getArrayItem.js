function getArrayItem(arr,num){
    // 新建数组来存取传入的数组
    var aTemp = [];
    for( j in arr){
        // aTemp=arr[j];
        aTemp.push(arr[j]);
    }
    // 新建数组来存随机取的数组元素
    var aReturn =[];
    //从aTemp中取数
    for(var i=0;i<num;i++){
        // 当数组中还有值的时候执行传递数组元素；
        if(aTemp.length>0){
            // 声明一个变量存数组的下标值随机数；
            var index=Math.floor(Math.random()*aTemp.length);

            aReturn[i]=aTemp[index];
            aTemp.splice(index,1);
        }else{
            break;
        }
    }
    return aReturn;
}