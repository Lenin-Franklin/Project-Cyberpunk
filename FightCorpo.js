var VHealth=20;
var VoodooBoy_1=50;
var VoodooBoy_2=50;
var VoodooBoy_3=50;

function FunctionFirePistol1(){
    printToScreen();
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightCorpo.html");
    }
    else{
        VoodooBoy_1=VoodooBoy_1-9;
    window.alert("Damage dealt:9HP"+"\n"+"Enemy HP:" +VoodooBoy_1);
    if(VoodooBoy_1<=5)
    {
    alert("You won");
    location.replace("Corpo2.html")
    }
    VHealth=VHealth-9;
    window.alert("VoodooBoy_1 has shot you with a pistol"+"\nYour Remaing HP: "+VHealth);
    }

}

const printToScreen= () =>{
    document.getElementById('V-health').innerHTML=VHealth;
}

function FunctionFirePistol2(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightCorpo.html");
    }
    else{
        VoodooBoy_2=VoodooBoy_2-0;
    window.alert("Damage dealt:0HP"+"\n"+"Enemy HP:" +VoodooBoy_2);
    if(VoodooBoy_1<=5)
    {
    alert("You won");
    location.replace("Corpo2.html")
    }
    VHealth=VHealth-0;
    window.alert("VoodooBoy_2 is in Cover" +"\nYour Remaing HP: "+VHealth);
    }

}
function FunctionFirePistol3(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightCorpo.html");}
    else{
        VoodooBoy_3=VoodooBoy_3-9;
    window.alert("Damage dealt:9HP"+"\n"+"Enemy HP:" +VoodooBoy_3);
    if(VoodooBoy_1<=5)
    {
    alert("You won");
    location.replace("Corpo2.html")
    }
    VHealth=VHealth-10;
    window.alert("VoodooBoy_1 used a Meele Attack"+"\nYour Remaing HP: "+VHealth);
    }

}
function FunctionMeleeAttack1(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightCorpo.html");
    }
    else{
        VoodooBoy_1=VoodooBoy_1-10;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +VoodooBoy_1);
    if(VoodooBoy_1<=5)
    {
    alert("You won");
    location.replace("Corpo2.html")
    }
    VHealth=VHealth-10;
    window.alert("VoodooBoy_1 used a Meele Attack"+"\nYour Remaing HP: "+VHealth);
    }

}
function FunctionMeleeAttack2(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightCorpo.html");
    }
    else{
        VoodooBoy_2=VoodooBoy_2-10;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +VoodooBoy_2);
    if(VoodooBoy_1<=5)
    {
    alert("You won");
    location.replace("Corpo2.html")
    }
    VHealth=VHealth-15;
    window.alert("VoodooBoy_1 has shot you with an Assault Rifle"+"\nYour Remaing HP: "+VHealth);
    }

}
function FunctionMeleeAttack3(){
    if(VHealth<=10)
    {
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightCorpo.html");
    }
    else{
        VoodooBoy_3=VoodooBoy_3-0;
    window.alert("Damage dealt:0HP"+"\n"+"Enemy HP:" +VoodooBoy_1);
    if(VoodooBoy_1<=5)
    {
    alert("You won");
    location.replace("Corpo2.html")
    }
    VHealth=VHealth-0;
    window.alert("VoodooBoy_3 has taken cover"+"\nYour Remaing HP: "+VHealth);
    }

}
function FunctiontakeCover(){
        if(VHealth<=10)
        {
            alert("You Lost"+"\nGame will restarts with full health");
        
            location.replace("FightCorpo.html");
        }
        else{
            VoodooBoy_1=VoodooBoy_1-0;
        window.alert("Damage dealt:0HP"+"\n"+"Enemy HP:" +VoodooBoy_1);
        if(VoodooBoy_1<=5)
        {
        alert("You won");
        location.replace("Corpo2.html")
        }
        VHealth=VHealth-0;
        window.alert("Your in Cover"+"\nYour Remaing HP: "+VHealth);
        }
    
    }

