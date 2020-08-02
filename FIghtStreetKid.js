var VHealth=200;
var Enemy1Health=100;
var Enemy2Health=100;

function FunctionHEnemy1()
{

    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");

}
    else{
    Enemy1Health=Enemy1Health-10;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy1Health<=5)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    VHealth=VHealth-15;
    window.alert("Enemy1 has Jabbed You Dealing 15HP Damage");
    window.alert("Your Remaing HP: "+VHealth);
    }
}

function FunctionHEnemy2()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");

    }
        else{
    Enemy2Health=Enemy2Health-5;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy2Health<=10)
    {
    alert("You won")
    location.replace("StreetKid2.html");
    }
    VHealth=VHealth-0;
    window.alert("Enemy2 has Blocked Your Hook");
    window.alert("Your Remaing HP: "+VHealth);
}
}
function FunctionJEnemy1()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");

    }
        else{
    Enemy1Health=Enemy1Health-7;
    window.alert("Damage dealt:15HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy1Health<=10)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    VHealth=VHealth-10;
    window.alert("Enemy1 has Blocked Your Jab");
    window.alert("Your Remaing HP: "+VHealth);
}
}
function FunctionJEnemy2()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");

    }
        else{
    Enemy2Health=Enemy2Health-15;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy2Health<=10)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    VHealth=VHealth-10;
    window.alert("Enemy1 has Hookked You Dealing 10HP Damage");
    window.alert("Your Remaing HP: "+VHealth);
}
}
function FunctionUEnemy1()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");}

        else{
    Enemy1Health=Enemy1Health-20;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy1Health<=5)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    VHealth=VHealth-15;
    window.alert("Enemy1 has Jabbed You Dealing 15HP Damage");
    window.alert("Your Remaing HP: "+VHealth);
}
}

function FunctionUEnemy2()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");

    }
        else{
    Enemy1Health=Enemy1Health-20;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy2Health<=5)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    VHealth=VHealth-15;
    window.alert("Enemy1 has Hooked You Dealing 10HP Damage");
    window.alert("Your Remaing HP: "+VHealth);}
}
function FunctionBEnemy1()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");}

        else{
    Enemy1Health=Enemy1Health-0;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy1Health==0)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    if(Enemy1Health<=0)
    alert("You won");
    VHealth=VHealth-7;
    window.alert("Enemy1 has Jabbed You Dealing 15HP Damage");
    window.alert("Your Remaing HP: "+VHealth);
}
}
function FunctionBEnemy2()
{
    if(VHealth<=10){
        alert("You Lost"+"\nGame will restarts with full health");
        
        location.replace("FightStreetKid.html");

    }
        else{
    Enemy1Health=Enemy1Health-0;
    window.alert("Damage dealt:10HP"+"\n"+"Enemy HP:" +Enemy1Health);
    if(Enemy2Health<=0)
    {
    alert("You won");
    location.replace("StreetKid2.html")
    }
    if(Enemy1Health<=0)
    {
    alert("You won");
}
    VHealth=VHealth-10;
    window.alert("Enemy1 has Uppercut You Dealing 10HP Damage");
    window.alert("Your Remaing HP: "+VHealth);
            }
}
