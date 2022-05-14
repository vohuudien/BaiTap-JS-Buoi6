function baiTap1() {
    var sum = 0;
    for(var n = 0; sum <= 10000;sum = sum + n) {
        n = n+1
    }
    document.getElementById("bai1").innerHTML = `Đáp án bài 1 là n = ${n}`
}

function baiTap2() {
    var numX = +document.getElementById("numX").value;
    var numN = +document.getElementById("numN").value;
    var sum2 = 0;
    for (var i = 1; i<= numN; i++){
        sum2 += numX**i;
    }

    document.getElementById("ketQua").innerHTML = `Tổng bằng ${sum2}`
}
function baiTap3() {
    var numNBai3 = +document.getElementById("numNBai3").value ;
    var factorial = 1;
    for(var i = 1; i <= numNBai3; i++){
        factorial = factorial * i
    }
    document.getElementById("ketQuaBai3").innerHTML = `Giai thừa của n là ${factorial}`
}
function baiTap4() {
    for(i=1;i<=10;i++){
        document.getElementById("xxx").style.height = "max-content"
        if(i%2 !== 0){
            document.getElementById("xxx").innerHTML += `<div class=" w-100 bg-primary h-50 text-center ">div lẻ ${i}</div>`
        }else{
            document.getElementById("xxx").innerHTML += `<div class=" w-100 bg-danger h-50 text-center ">div chẳn ${i}</div>`
        }
    }
}