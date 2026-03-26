function showMessage (){
    alert ("this message is inside the function");
}

showMessage();

function sum(number1,number2){
return (number1+number2)
}

console.log(sum (25,4));

var arrowFunction= () => alert ("hello");

arrowFunction;

var arrowFunction= name => alert ('hello ${name}');

arrowFunction("tiara");

function dsFunction () {
  var localVar="Digital School";
  alert(localVar);
}
 dsFunction();

 var car={
    name: Mercedes,
    color:pink,
    year:2025,
    kilometres:20,
    startEngine: function(){
        alert("vroom");
    }
 }
 
 car.startEngine();

 var computer= new Object();

 computer.name = "Lenovo";
 computer.CPU ="Intel core i7";
 computer.RAM ="15gb";
 computer.GPU ="geforce";
 computer.type = function (){
    return this.name+', ' +this.CPU+ ',' +this.RAM+ ',' +this.GPU;
 };

 alert(computer.GPU);
 console.log(computer.type());
 this.name = name;
  this.CPU = CPU ;
 this.RAM= RAM;
 this.GPU = GPU;

 var computer1= new Computer("Macbook","m1", "5gb" , "5500"); 
 var computer2=new Computer("acer","intel", "5gb" , "intergraded"); 