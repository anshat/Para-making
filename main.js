function getPara1(){
}
var inputs=[]
for(var i=1; <=6; i++){
inputs.push(document.getElementById("para1_input1"+i).value);
}
inputs.join(". ");
document.getElementById("show_para1").innerHTML=inputs.join(". ");