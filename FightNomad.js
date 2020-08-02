var VHealth=150;
var PoliceSuv_1=75;
var PoliceSuv_2=75;
var PoliceSuv_3=75;
var PoliceChooper=100;

function PistolSuv1(){
    
        if(VHealth<=10)
        {
            alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightNomad.html");
        }
        else{
            PoliceSuv_1=PoliceSuv_1-10;
        window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +PoliceSuv_1);
        if(PoliceSuv_1<=5)
        {
        alert("You won");
        location.replace("Nomad2.html")
        }
        VHealth=VHealth-15;
        window.alert("Suv1 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
        }
        
    
}

function PistolSuv_2(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_2=PoliceSuv_2-10;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +PoliceSuv_2);
    if(PoliceSuv_2<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Suv2 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function PistolSuv3(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_3=PoliceSuv_3-10;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +PoliceSuv_3);
    if(PoliceSuv_3<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Suv3 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function PistolChooper(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceChooper=PoliceChooper-10;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +PoliceChooper);
    if(PoliceChooper<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Chooper has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function AssaultSuv1(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_1=PoliceSuv_1-15;
    window.alert("Damage dealt:15HP"+"\n"+"Enemy HP:" +PoliceSuv_1);
    if(PoliceSuv_1<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Suv1 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function AssaultSuv2(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_2=PoliceSuv_2-15;
    window.alert("Damage dealt:15HP"+"\n"+"Enemy HP:" +PoliceSuv_2);
    if(PoliceSuv_2<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Suv2 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function AssaultSuv3(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_3=PoliceSuv_3-15;
    window.alert("Damage dealt:15HP"+"\n"+"Enemy HP:" +PoliceSuv_3);
    if(PoliceSuv_3<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Suv3 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function AssaultChooper(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightNomad.html");
    }
    else{
        PoliceChooper=PoliceChooper-15;
    window.alert("Damage dealt:15HP"+"\n"+"Enemy HP:" +PoliceChooper);
    if(PoliceChooper<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-15;
    window.alert("Chooper has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }
}
function RocketSuv1(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_1=PoliceSuv_1-50;
    window.alert("Damage dealt:50HP"+"\n"+"Enemy HP:" +PoliceSuv_1);
    if(PoliceSuv_1<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-30;
    window.alert("Suv1 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from fireing the rocket")
    }
}
function RocketSuv2(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_2=PoliceSuv_2-50;
    window.alert("Damage dealt:50HP"+"\n"+"Enemy HP:" +PoliceSuv_2);
    if(PoliceSuv_2<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-30;
    window.alert("Suv2 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from fireing the rocket")
    }
}
function RocketSuv3(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_3=PoliceSuv_3-50;
    window.alert("Damage dealt:50HP"+"\n"+"Enemy HP:" +PoliceSuv_3);
    if(PoliceSuv_3<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-30;
    window.alert("Suv3 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from fireing the rocket")
    }
}
function RocketChooper(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceChooper=PoliceChooper-50;
    window.alert("Damage dealt:50HP"+"\n"+"Enemy HP:" +PoliceChooper);
    if(PoliceChooper<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-30;
    window.alert("Chooper has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from fireing the rocket")
    }
}
function GrenadeSuv1(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_1=PoliceSuv_1-30;
    window.alert("Damage dealt:30HP"+"\n"+"Enemy HP:" +PoliceSuv_1);
    if(PoliceSuv_1<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-23;
    window.alert("Suv1 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from throwing the Grenade")
    }
}
function GrenadeSuv2(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_2=PoliceSuv_2-30;
    window.alert("Damage dealt:30HP"+"\n"+"Enemy HP:" +PoliceSuv_2);
    if(PoliceSuv_2<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-23;
    window.alert("Suv2 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from throwing the Grenade")
    }
}
function GrenadeSuv3(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightNomad.html");
    }
    else{
        PoliceSuv_3=PoliceSuv_3-30;
    window.alert("Damage dealt:30HP"+"\n"+"Enemy HP:" +PoliceSuv_3);
    if(PoliceSuv_3<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-23;
    window.alert("Suv3 has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from throwing the Grenade")
    }
}
function GrenadeChooper(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightNomad.html");
    }
    else{
        PoliceChooper=PoliceChooper-30;
    window.alert("Damage dealt:30HP"+"\n"+"Enemy HP:" +PoliceChooper);
    if(PoliceChooper<=5)
    {
    alert("You won");
    location.replace("Nomad2.html")
    }
    VHealth=VHealth-23;
    window.alert("Chooper has shot yoou with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    alert("You have taken damage from throwing the Grenade")
    }
}