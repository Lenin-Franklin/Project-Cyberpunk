var V=new Object();
V.resolve=50;
V.intelligence=50;
V.power=75;
V.endurance=100;
V.credibility=50;

function One1(){
    alert('Dex: Thats not for u');
    alert('Credibility : -5');
    alert('V: Ok ..Ok .. Fine');
    V.credibility=V.credibility-5;
    document.getElementById("A2").style.pointerEvents='none';
    document.getElementById("A3").style.pointerEvents='none';
}
function One2(){
    alert('Dex: Good enough for another couple of months');
    alert('Credibility: +10');
    alert('V:That’s all I need');
    V.credibility=V.credibility+10;
    document.getElementById("A1").style.pointerEvents='none';
    document.getElementById("A3").style.pointerEvents='none';
}
function One3(){
    alert('Dex: My contact will get to u  in some time');
    alert('Intelligence: +10');
    alert('V: Consider it Done');
    V.intelligence=V.intelligence+10;
    document.getElementById("A2").style.pointerEvents='none';
    document.getElementById("A1").style.pointerEvents='none';
}
function Two1(){
    alert('Bruno-(Kicks in the face) Shut up');
    alert('Endurance : +5');
    V.endurance=V.endurance+5;
    document.getElementById("B2").style.pointerEvents='none';
    document.getElementById("B3").style.pointerEvents='none';
}
function Two2(){
    alert('Jackie: Are you stupid Pandengo…Im cuffed just like you');
    alert('Resolve: -10');
    V.resolve=V.resolve+10;
    document.getElementById("B1").style.pointerEvents='none';
    document.getElementById("B3").style.pointerEvents='none';
}
function Two3(){
    alert('V: Wait Wait No..');
    alert('Credibility: -10');
    V.credibility=V.credibility-10;
    document.getElementById("B2").style.pointerEvents='none';
    document.getElementById("B1").style.pointerEvents='none';
}
function Three1(){
    alert('Bruno: Doesn’t matter don’t care');
    alert('Power: +10');
    V.power=V.power+10;
    document.getElementById("B1").style.pointerEvents='none';
    document.getElementById("B3").style.pointerEvents='none';
}
function Three2(){
    alert('Bruno: Take a guess');
    alert('Resolve: +10');
    V.resolve=V.resolve-10;
    document.getElementById("B2").style.pointerEvents='none';
    document.getElementById("B1").style.pointerEvents='none';
    console.log(V);
}

function one1()
{
    alert('Resolve: +10');
    V.resolve=V.resolve+10;
    document.getElementById("A2").style.pointerEvents='none';
    document.getElementById("A3").style.pointerEvents='none';
}
function one2()
{
    alert('Resolve: +15');
    V.resolve=V.resolve+15;
    document.getElementById("A1").style.pointerEvents='none';
    document.getElementById("A3").style.pointerEvents='none';
}
function one3()
{
    alert('Intelligence: +10');
    V.resolve=V.resolve+10;
    document.getElementById("A1").style.pointerEvents='none';
    document.getElementById("A2").style.pointerEvents='none';
}
function one4()
{
    alert('V: Fine ..Im ');
    alert('Corpo Exec: Good');
    alert('Credibility: +10')
    V.credibility=V.credibility+10;
    document.getElementById("B2").style.pointerEvents='none';
   
}
function one5()
{
    alert('V: Im out');
    alert('Corpo Exec: Well ull loose your comapany');
    alert('Resolve: +5');
    V.resolve=V.resolve+5;
    document.getElementById("B1").style.pointerEvents='none';
}
function one6()
{
    alert('Dex: Best get the job done without any violence');
    alert('Intelligence: +15');
    V.intelligence=V.intelligence+15;
    document.getElementById("C2").style.pointerEvents='none';
    document.getElementById("C3").style.pointerEvents='none';
}
function one7()
{
    alert('Dex :Nothing which you need to know');
    alert('Credibility: -10');
    V.credibility=V.credibility-10;
    document.getElementById("C1").style.pointerEvents='none';
    document.getElementById("C3").style.pointerEvents='none';
}
function one8()
{
    alert('Good');
    alert('Power: +10');
    V.power=V.power+10;
    document.getElementById("C2").style.pointerEvents='none';
    document.getElementById("C1").style.pointerEvents='none';
}
function one9()
{
    alert('Intelligence: +10');
    V.intelligence=V.intelligence=10;
    document.getElementById("D2").style.pointerEvents='none';
}
function one10()
{
    alert('Power: +20');
    V.power=V.power+20;
    document.getElementById("D1").style.pointerEvents='none';
}
function one11()
{
    alert('V: Jackie!! give it to him');
    alert('Credibility: +15');
    V.credibility=V.credibility+15;
    document.getElementById("E2").style.pointerEvents='none';
}
function one12()
{
    alert('V: Jackie!! Run');
    alert('Resolve: +15');
    V.resolve=V.resolve+15;
    document.getElementById("E1").style.pointerEvents='none';
}
function two1()
{
    alert('Car doesn’t start-Cars busted');
    alert('Intelligence: -5');
    V.intelligence=V.intelligence-5;
    document.getElementById("A2").style.pointerEvents='none';
}
function two2()
{
    alert('Car Starts-Checks walkie');
    alert('Intelligence: +15');
    V.intelligence=V.intelligence+15;
    document.getElementById("A1").style.pointerEvents='none';
}
function two3()
{
    alert('Sherif: From the north huh..My cousin’s up there as a Truauma Team');
    alert('So was my friend.. Pretty tough work. That’s y I came here to get something       lighter');
    alert('Credibility: +20');
    V.credibility=V.credibility+20;
    document.getElementById("B2").style.pointerEvents='none';
    document.getElementById("B3").style.pointerEvents='none';
    document.getElementById("B4").style.pointerEvents='none';
}
function two4()
{
    alert('Sherif: I See');
    alert('Credibility: +5');
    V.credibility=V.credibility+5;
    document.getElementById("B1").style.pointerEvents='none';
    document.getElementById("B3").style.pointerEvents='none';
    document.getElementById("B4").style.pointerEvents='none';
}
function two5()
{
    alert('Sherif: I see');
    alert('Credibility: +5');
    V.credibility=V.credibility+5;
    document.getElementById("B1").style.pointerEvents='none';
    document.getElementById("B2").style.pointerEvents='none';
    document.getElementById("B4").style.pointerEvents='none';
}
function two6()
{
    alert('Sherif: Oh..your from night city');
    alert('V: Oh no.. Just the badlands around the city');
    alert('Credibility: -10');
    V.credibility=V.credibility-10;
    document.getElementById("B1").style.pointerEvents='none';
    document.getElementById("B2").style.pointerEvents='none';
    document.getElementById("B3").style.pointerEvents='none';
}
function two7()
{
    alert('Sherif: Do this and I ill give you a free lift into the city');
    alert('V: What I got to do')
    alert('Endurance: +15');
    V.endurance=V.endurance+15;
    document.getElementById("C2").style.pointerEvents='none';
}
function two8()
{
    alert('Sherif: (Points a gun)-Are You sure');
    alert('Sherif: Ok Ok man…What should I do..')
    alert('Resolve: -15');
    V.resolve=V.resolve-15;
    document.getElementById("C1").style.pointerEvents='none';

}
function two9()
{
    alert('Jackie: Good ..  Take it from the glove box and fire');
    alert('Power: +20');
    V.power=V.power+20;
    document.getElementById("D2").style.pointerEvents='none';
}
function two10()
{
    alert('Jackie: Well.. Its just like in the movies..Just point and pull the trigger');
    alert('Power: -10');
    V.power=V.power-10;
    document.getElementById("D1").style.pointerEvents='none';
}