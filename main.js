let result = document.getElementById("result");
let distinction = 1; //直前の入力　0：数字 1：演算子



//初期表示の0をクリア
function clearZero(){
  if (result.value === "0"){
  result.value = "";
  }
}

//00の入力制限
function push00(zero){
  if(result.value == "0"){
  result.value = 0;
  } else {
    result.value += zero.value;
  }
}

function edit(num){
  clearZero();
  distinction = 0;
  result.value += num.value;
}

function operator(elem){
  if(distinction == 0){
    distinction = 1;
    result.value += elem.value;
  }
}

function equal(){
  result.value = new Function("return " + result.value)();
}

function allClear(){
  result.value = "0";
  distinction = 1;
}