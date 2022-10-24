    var Valor_a1 = null;
    var Valor_a2 = null;


        //Alexander Ramos Aguilar - Edison Avila Rojas

function funcion1(){
  
  Valor_a1 = document.getElementById("funcion_t_a").value;
  if (Valor_a1==""){
    alert("Debes introducir un numero");
    document.getElementById(fumcion_t_a).focus();    
  }
  alert(Valor_a1+"/"+"s");
};  

function funcion2() {
  var Valor_a3 = document.getElementById("funciontn").value;
  var valor3resultado = 1;

  if (Valor_a3==""){
    alert("Debes introducir un numero");
    document.getElementById(funciontn).focus();
          
  }
    for (i=1; i<=Valor_a3; i++) {
    valor3resultado = valor3resultado * i;
    }
    var numero1= Valor_a3 ++ +1;

    
  
    alert(valor3resultado+"/"+"s^"+"("+numero1+")");
};

function funcion3(){
  Valor_a2 = document.getElementById("funcion_eat").value;
  if (Valor_a2==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_eat).focus();
          
  }
  alert("1"+"/"+"s-"+Valor_a2);
}; 

function funcion4() {
  var Valor_a5 = document.getElementById("funcion_sen").value;
  var Valor_a6 = Valor_a5 * Valor_a5;
  if (Valor_a5==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_sen).focus();
          
  }
  alert(Valor_a5+"/"+"s^(2)+"+Valor_a6);
};

function funcion5() {
  var Valor_a7 = document.getElementById("funcion_cos").value;
  var Valor_a8 = Valor_a7 * Valor_a7;
  if (Valor_a7==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_cos).focus();
          
  }
  alert("s/"+"s^(2)+"+Valor_a8);
};

function funcion6() {
  var Valor_a9 = document.getElementById("funcion_senH").value;
  var Valor_a10 = Valor_a9 * Valor_a9;
  if (Valor_a9==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_senH).focus();
          
  }
  alert(Valor_a9+"/"+"s^(2)-"+Valor_a10);
};

function funcion7() {
  var Valor_a11 = document.getElementById("funcion_cosH").value;
  var Valor_a12 = Valor_a11 * Valor_a11;
  if (Valor_a11==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_cosH).focus();
          
  }
  alert("s/"+"s^(2)-"+Valor_a12);
};
function funcion8() {
  var Valor_a17 = document.getElementById("funcion_sa").value;
  var Valor_a18 = document.getElementById("funcion_sb").value;
  var numero4 = Valor_a17 * Valor_a17;
  if (Valor_a17==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_sa).focus();       
  }else {
    if (Valor_a18==""){
      alert("Debes introducir un numero");
      document.getElementById(funcion_sb).focus();
    }
  }
  alert(Valor_a17+"/"+"((s-"+Valor_a18+")^(2))+"+numero4);
};

function funcion9() {
  var Valor_a15 = document.getElementById("funcion_a").value;
  var Valor_a16 = document.getElementById("funcion_b").value;
  var numero3 = Valor_a15 * Valor_a15;
  if (Valor_a15==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_a).focus();      
  }else{
    if (Valor_a16==""){
      alert("Debes introducir un numero");
      document.getElementById(funcion_b).focus();      
    }
  }
  alert("s-"+Valor_a16+"/"+"((s-"+Valor_a16+")^(2))+"+numero3);
};

function funcion10() {
  var Valor_a21 = document.getElementById("funcion_ea").value;
  var Valor_a22 = document.getElementById("funcion_eb").value;
  var numero6 = Valor_a21 * Valor_a21;
  if (Valor_a21==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_ea).focus();      
  }else{
    if (Valor_a22==""){
      alert("Debes introducir un numero");
      document.getElementById(funcion_eb).focus();      
    }
  }
  alert(Valor_a21+"/"+"((s-"+Valor_a22+")^(2))-"+numero6);
};
function funcion11() {
  var Valor_a19 = document.getElementById("funcion_ca").value;
  var Valor_a20 = document.getElementById("funcion_cb").value;
  var numero5 = Valor_a19 * Valor_a19;
  if (Valor_a19==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_ca).focus();      
  }else{
    if (Valor_a20==""){
      alert("Debes introducir un numero");
      document.getElementById(funcion_cb).focus();      
    }
  }
alert("s-"+Valor_a20+"/"+"((s-"+Valor_a20+")^(2))-"+numero5);
};


function funcion12() {
  var Valor_a13 = document.getElementById("funcion_tn").value;
  var Valor_a14 = document.getElementById("funcion_ta").value;
  var valor13resultado = 1;
  if (Valor_a13==""){
    alert("Debes introducir un numero");
    document.getElementById(funcion_tn).focus();      
  }else{
    if (Valor_a14==""){
      alert("Debes introducir un numero");
      document.getElementById(funcion_ta).focus();      
    } 
  }
  for (i=1; i<=Valor_a13; i++) {
    valor13resultado = valor13resultado * i;
    }
    var numero2 = Valor_a13 ++ +1;
    alert(valor13resultado+"/"+"(s+"+Valor_a14+")^("+numero2+")");
};









