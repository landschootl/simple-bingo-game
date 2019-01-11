var setupEvents = function() {
    // gestion événement pour piedDePage
	var B1 =  document.getElementById("Button1");
    B1.addEventListener("click",action1);
	
	var B2 =  document.getElementById("Button2");
    B2.addEventListener("click",action2);
	
	var B3 =  document.getElementById("Button3");
    B3.addEventListener("click",action3);
}

window.addEventListener("load", setupEvents);

// ==================================================

// définition des fonctions

function action1() { //Configurer le bouton

if(document.getElementById('radio1').checked){

	var Val1 = document.getElementById("nb1").value;
	var Val2 = document.getElementById("nb2").value;
	var Val3 = document.getElementById("nb3").value;
	var Val4 = document.getElementById("nb4").value;
	var Val5 = document.getElementById("nb5").value;
	var Val6 = document.getElementById("nb6").value;
	
if (Val1 == Val2||Val1 == Val3||Val1 == Val4||Val1 == Val5||Val1 == Val6||Val2 == Val3||Val2 == Val4||Val2 == Val5||Val2 == Val6||Val3 == Val4||Val3 == Val5||Val3 == Val6||Val4 == Val5||Val4 == Val6||Val5 == Val6){
      window.alert("Vous avez mis plusieurs fois le meme numero ! ");
	  return action1; 
}
if (Val1<0||Val1>99||Val2<0||Val2>99||Val3<0||Val3>99||Val4<0||Val4>99||Val5<0||Val5>99||Val6<0||Val6>99||Val1==""||Val2==""||Val3==""||Val4==""||Val5==""||Val6=="") {
      window.alert("Les numeros doivent etre comprit entre 0 et 99 !");
	  return action1; 
}
if ((isNaN(Val1))||(isNaN(Val2))||(isNaN(Val3))||(isNaN(Val4))||(isNaN(Val5))||(isNaN(Val6))){
      window.alert("Veuillez a ce que vos numeros choisi, sont bien des numeros !");
	  return action1; 
}
var Val1 = document.getElementById("nb1").value;
var Nbre1 = parseInt(Val1, 10);
var x1=document.getElementById("x1");
x1.innerHTML=Nbre1;

var Val2 = document.getElementById("nb2").value;
var Nbre2 = parseInt(Val2, 10);
var x2=document.getElementById("x2");
x2.innerHTML=Nbre2;

var Val3 = document.getElementById("nb3").value;
var Nbre3 = parseInt(Val3, 10);
var x3=document.getElementById("x3");
x3.innerHTML=Nbre3;

var Val4 = document.getElementById("nb4").value;
var Nbre4 = parseInt(Val4, 10);
var x4=document.getElementById("x4");
x4.innerHTML=Nbre4;

var Val5 = document.getElementById("nb5").value;
var Nbre5 = parseInt(Val5, 10);
var x5=document.getElementById("x5");
x5.innerHTML=Nbre5;

var Val6 = document.getElementById("nb6").value;
var Nbre6 = parseInt(Val6, 10);
var x6=document.getElementById("x6");
x6.innerHTML=Nbre6;
}

else if(document.getElementById('radio2').checked){

	var Val7 = document.getElementById("nb1").value;
	var Val8 = document.getElementById("nb2").value;
	var Val9 = document.getElementById("nb3").value;
	var Val10 = document.getElementById("nb4").value;
	var Val11 = document.getElementById("nb5").value;
	var Val12 = document.getElementById("nb6").value;
	
if (Val7 == Val8||Val7 == Val9||Val7 == Val10||Val7 == Val11||Val7 == Val12||Val8 == Val9||Val8 == Val10||Val8 == Val11||Val8 == Val12||Val9 == Val10||Val9 == Val11||Val9 == Val12||Val10 == Val11||Val10 == Val12||Val11 == Val12){
      window.alert("Vous avez mis plusieurs fois le meme numero ! ");
	  return action1; 
}
if (Val7<0||Val7>99||Val8<0||Val8>99||Val9<0||Val9>99||Val10<0||Val10>99||Val11<0||Val11>99||Val12<0||Val12>99||Val7==""||Val8==""||Val9==""||Val10==""||Val11==""||Val12=="") {
      window.alert("Les numeros doivent etre comprit entre 0 et 99 !");
	  return action1; 
}
if ((isNaN(Val7))||(isNaN(Val8))||(isNaN(Val9))||(isNaN(Val10))||(isNaN(Val11))||(isNaN(Val12))){
      window.alert("Veuillez a ce que vos numeros choisi, sont bien des numeros !");
	  return action1; 
}
var Val7 = document.getElementById("nb1").value;
var Nbre7 = parseInt(Val7, 10);
var x7=document.getElementById("x7");
x7.innerHTML=Nbre7;

var Val8 = document.getElementById("nb2").value;
var Nbre8 = parseInt(Val8, 10);
var x8=document.getElementById("x8");
x8.innerHTML=Nbre8;

var Val9 = document.getElementById("nb3").value;
var Nbre9 = parseInt(Val9, 10);
var x9=document.getElementById("x9");
x9.innerHTML=Nbre9;

var Val10 = document.getElementById("nb4").value;
var Nbre10 = parseInt(Val10, 10);
var x10=document.getElementById("x10");
x10.innerHTML=Nbre10;

var Val11 = document.getElementById("nb5").value;
var Nbre11 = parseInt(Val11, 10);
var x11=document.getElementById("x11");
x11.innerHTML=Nbre11;

var Val12 = document.getElementById("nb6").value;
var Nbre12 = parseInt(Val12, 10);
var x12=document.getElementById("x12");
x12.innerHTML=Nbre12;
}

else if(document.getElementById('radio3').checked){

var Val13 = document.getElementById("nb1").value;
	var Val14 = document.getElementById("nb2").value;
	var Val15 = document.getElementById("nb3").value;
	var Val16 = document.getElementById("nb4").value;
	var Val17 = document.getElementById("nb5").value;
	var Val18 = document.getElementById("nb6").value;
	
if (Val13 == Val14||Val13 == Val15||Val13 == Val16||Val13 == Val17||Val13 == Val18||Val14 == Val15||Val14 == Val16||Val14 == Val17||Val14 == Val18||Val15 == Val16||Val15 == Val17||Val15 == Val18||Val16 == Val17||Val16 == Val18||Val17 == Val18){
      window.alert("Vous avez mis plusieurs fois le meme numero ! ");
	  return action1; 
}
if (Val13<0||Val13>99||Val14<0||Val14>99||Val15<0||Val15>99||Val16<0||Val16>99||Val17<0||Val17>99||Val18<0||Val18>99||Val13==""||Val14==""||Val15==""||Val16==""||Val17==""||Val18=="") {
      window.alert("Les numeros doivent etre comprit entre 0 et 99 !");
	  return action1; 
}
if ((isNaN(Val13))||(isNaN(Val14))||(isNaN(Val15))||(isNaN(Val16))||(isNaN(Val17))||(isNaN(Val18))){
      window.alert("Veuillez a ce que vos numeros choisi, sont bien des numeros !");
	  return action1; 
}
var Val13 = document.getElementById("nb1").value;
var Nbre13 = parseInt(Val13, 10);
var x13=document.getElementById("x13");
x13.innerHTML=Nbre13;

var Val14 = document.getElementById("nb2").value;
var Nbre14 = parseInt(Val14, 10);
var x14=document.getElementById("x14");
x14.innerHTML=Nbre14;

var Val15 = document.getElementById("nb3").value;
var Nbre15 = parseInt(Val15, 10);
var x15=document.getElementById("x15");
x15.innerHTML=Nbre15;

var Val16 = document.getElementById("nb4").value;
var Nbre16 = parseInt(Val16, 10);
var x16=document.getElementById("x16");
x16.innerHTML=Nbre16;

var Val17 = document.getElementById("nb5").value;
var Nbre17 = parseInt(Val17, 10);
var x17=document.getElementById("x17");
x17.innerHTML=Nbre17;

var Val18 = document.getElementById("nb6").value;
var Nbre18 = parseInt(Val18, 10);
var x18=document.getElementById("x18");
x18.innerHTML=Nbre18;
	
}

}

function action2() { //Effectuer le tirage
document.getElementById("Button1").disabled=true;
document.getElementById("Button2").disabled=true;
document.getElementById("radio1").disabled=true;
document.getElementById("radio2").disabled=true;
document.getElementById("radio3").disabled=true;
document.getElementById("nb1").disabled=true;
document.getElementById("nb2").disabled=true;
document.getElementById("nb3").disabled=true;
document.getElementById("nb4").disabled=true;
document.getElementById("nb5").disabled=true;
document.getElementById("nb6").disabled=true;
document.getElementById("Button3").disabled=false;


while (y1 == y2 || y1 == y3 || y1 == y4 || y1 == y5 || y1 == y6 || y2 == y3 || y2 == y4 || y2 == y5 || y2 == y6 || y3 == y4 || y3 == y5 || y3 == y6 || y4 == y5 || y4 == y6 || y5 == y6){
var y1 = Math.floor(99*Math.random())+1;
var y2 = Math.floor(99*Math.random())+1;
var y3 = Math.floor(99*Math.random())+1;
var y4 = Math.floor(99*Math.random())+1;
var y5 = Math.floor(99*Math.random())+1;
var y6 = Math.floor(99*Math.random())+1;
}

var total=document.getElementById("Result");
total.innerHTML=" "+y1+" ;"+y2+" ;"+y3+" ;"+y4+" ;"+y5+" ;"+y6+"";


//Affichage des scores
var t1 = 0;
var t2 = 0;
var t3 = 0;
	var n1 = document.getElementById("x1").innerHTML ;
	var n2 = document.getElementById("x2").innerHTML ;
	var n3 = document.getElementById("x3").innerHTML ;
	var n4 = document.getElementById("x4").innerHTML ;
	var n5 = document.getElementById("x5").innerHTML ;
	var n6 = document.getElementById("x6").innerHTML ;
	var n7 = document.getElementById("x7").innerHTML ;
	var n8 = document.getElementById("x8").innerHTML ;
	var n9 = document.getElementById("x9").innerHTML ;
	var n10 = document.getElementById("x10").innerHTML ;
	var n11 = document.getElementById("x11").innerHTML ;
	var n12 = document.getElementById("x12").innerHTML ;
	var n13 = document.getElementById("x13").innerHTML ;
	var n14 = document.getElementById("x14").innerHTML ;
	var n15 = document.getElementById("x15").innerHTML ;
	var n16 = document.getElementById("x16").innerHTML ;
	var n17 = document.getElementById("x17").innerHTML ;
	var n18 = document.getElementById("x18").innerHTML ;

	//tirage1
if (y1 == n1||y1 == n2||y1 == n3||y1 == n4||y1 == n5||y1 == n6){
t1 = t1+1;
}
if (y2 == n1||y2 == n2||y2 == n3||y2 == n4||y2 == n5||y2 == n6){
t1 = t1+1;
}
if (y3 == n1||y3 == n2||y3 == n3||y3 == n4||y3 == n5||y3 == n6){
t1 = t1+1;
}
if (y4 == n1||y4 == n2||y4 == n3||y4 == n4||y4 == n5||y4 == n6){
t1 = t1+1;
}
if (y5 == n1||y5 == n2||y5 == n3||y5 == n4||y5 == n5||y5 == n6){
t1 = t1+1;
}
if (y6 == n1||y6 == n2||y6 == n3||y6 == n4||y6 == n5||y6 == n6){
t1 = t1+1;
}
	//tirage2
if (y1 == n7||y1 == n8||y1 == n9||y1 == n10||y1 == n11||y1 == n12){
t2 = t2+1;
}
if (y2 == n7||y2 == n8||y2 == n9||y2 == n10||y2 == n11||y2 == n12){
t2 = t2+1;
}
if (y3 == n7||y3 == n8||y3 == n9||y3 == n10||y3 == n11||y3 == n12){
t2 = t2+1;
}
if (y4 == n7||y4 == n8||y4 == n9||y4 == n10||y4 == n11||y4 == n12){
t2 = t2+1;
}
if (y5 == n7||y5 == n8||y5 == n9||y5 == n10||y5 == n11||y5 == n12){
t2 = t2+1;
}
if (y6 == n7||y6 == n8||y6 == n9|y6 == n10||y6 == n11||y6 == n12){
t2 = t2+1;
}
	//tirage3
if (y1 == n13||y1 == n14||y1 == n15||y1 == n16||y1 == n17||y1 == n18){
t3 = t3+1;
}
if (y2 == n13||y2 == n14||y2 == n15||y2 == n16||y2 == n17||y2 == n18){
t3 = t3+1;
}
if (y3 == n13||y3 == n14||y3 == n15||y3 == n16||y3 == n17||y3 == n18){
t3 = t3+1;
}
if (y4 == n13||y4 == n14||y4 == n15||y4 == n16||y4 == n17||y4 == n18){
t3 = t3+1;
}
if (y5 == n13||y5 == n14||y5 == n15||y5 == n16||y5 == n17||y5 == n18){
t3 = t3+1;
}
if (y6 == n13||y6 == n14||y6 == n15||y6 == n16||y6 == n17||y6 == n18){
t3 = t3+1;
}

var u1=document.getElementById("r1");
u1.innerHTML=" "+t1+" bon numero(s)";
var u2=document.getElementById("r2");
u2.innerHTML=" "+t2+" bon numero(s)";
var u3=document.getElementById("r3");
u3.innerHTML=" "+t3+" bon numero(s)";
t1=0;
t2=0;
t3=0;
}

function action3() { //Rejouer
document.getElementById("Button1").disabled=false;
document.getElementById("Button2").disabled=false;
document.getElementById("radio1").disabled=false;
document.getElementById("radio2").disabled=false;
document.getElementById("radio3").disabled=false;
document.getElementById("nb1").disabled=false;
document.getElementById("nb2").disabled=false;
document.getElementById("nb3").disabled=false;
document.getElementById("nb4").disabled=false;
document.getElementById("nb5").disabled=false;
document.getElementById("nb6").disabled=false;
document.getElementById("Button3").disabled=true;
	var p1 = document.getElementById("x1");
	var p2 = document.getElementById("x2");
	var p3 = document.getElementById("x3");
	var p4 = document.getElementById("x4");
	var p5 = document.getElementById("x5");
	var p6 = document.getElementById("x6");
	var p7 = document.getElementById("x7");
	var p8 = document.getElementById("x8");
	var p9 = document.getElementById("x9");
	var p10 = document.getElementById("x10");
	var p11 = document.getElementById("x11");
	var p12 = document.getElementById("x12");
	var p13 = document.getElementById("x13");
	var p14 = document.getElementById("x14");
	var p15 = document.getElementById("x15");
	var p16 = document.getElementById("x16");
	var p17 = document.getElementById("x17");
	var p18 = document.getElementById("x18");
	var p19 = document.getElementById("nb1");
	var p20 = document.getElementById("nb2");
	var p21 = document.getElementById("nb3");
	var p22 = document.getElementById("nb4");
	var p23 = document.getElementById("nb5");
	var p24 = document.getElementById("nb6");
	var p25 = document.getElementById("r1");
	var p26 = document.getElementById("r2");
	var p27 = document.getElementById("r3");
	var p28 = document.getElementById("Result");
	p1.innerHTML="";
	p2.innerHTML="";
	p3.innerHTML="";
	p4.innerHTML="";
	p5.innerHTML="";
	p6.innerHTML="";
	p7.innerHTML="";
	p8.innerHTML="";
	p9.innerHTML="";
	p10.innerHTML="";
	p11.innerHTML="";
	p12.innerHTML="";
	p13.innerHTML="";
	p14.innerHTML="";
	p15.innerHTML="";
	p16.innerHTML="";
	p17.innerHTML="";
	p18.innerHTML="";
	p19.value="";
	p20.value="";
	p21.value="";
	p22.value="";
	p23.value="";
	p24.value="";
	p25.innerHTML="";
	p26.innerHTML="";
	p27.innerHTML="";
	p28.innerHTML="";
}