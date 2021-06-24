
// string and number data types 
// variables

var a=1;
console.log(a);

let b='1a!@#$%';
console.log(b);

// variable name

let a_$12dsa='Types of variable name';

console.log(a_$12dsa);

//types of operatores 

console.log(1+2);
console.log(1*2);
console.log(1/2);
console.log(1%2);

//case sensitive

h=100
H=200
console.log(H);
console.log(h);


//boolean

var bool=true;
console.log(bool);

//undefined 

var und=undefined;
console.log(und);

//null

let nu=null;
console.log(nu);

//arrays

var arr=[10,'gopi',20,'!@#$'];

console.log(arr);
console.log(arr[0]);
arr[0]=1000;
console.log(arr);
arr.push(5000);
console.log(arr);
console.log(arr.length);
console.log(arr.sort());
console.log(arr.reverse());

//loops
//for loop
for(var i=0; i<10;i++){

console.log(i);
}
var j=0
for( j;j<20;j++){

    console.log(j);
    }

//for each loop
a=[10000,20000,30000,'gopi']
a.forEach(function(g){

    console.log(g);

});

//while loop
var k=990;
while(k<1000){

    console.log(k);
    k++
}

//switch

var vare=20
switch(vare){

case(20):console.log(vare);
break;
default:console.log('please enter your choose');
break;
}

//default
var vare=30
switch(vare){

case(20):console.log(vare);
break;
default:console.log('please enter your choose');
break;
}

//if else

var hi=20;
if (hi==20){

    console.log(hi);

}

else{

    console.log('no matches found')
}

var hi=30;
if (hi==20){

    console.log(hi);

}

else{

    console.log('no matches found')
}

var hi=20;
if (hi=='20'){

    console.log(hi);

}

else{

    console.log('no9 matches found')
}

var hi=20;
if (hi==='20'){

    console.log(hi);

}

else{

    console.log('no matches found')
}

//object

var obj={
    name:'Gopi',
    native:"Salem",
    address:{
          dono:'10',
          street:'Ghandhi street',
          arr:[10,20,30]
    },
    
    
}

console.log(obj.name);
console.log(obj.native);
console.log(obj.address.street);
console.log(obj.address.arr[2]);
console.log(obj.address.arr)

//2
 var objj=new Object();

 objj.name='Tiger'
 objj.nature='killer'

 console.log(objj.name);
 console.log(objj.nature);


 //constructors

 function store(a,b,c){
     this.name=a;
     this.city=b;
     this.native=c;

 }

 var indi=new store("gopi","salem","india");
 var pak=new store("saravanan","dharmapuri","china");

 console.log(indi.native);
 console.log(pak.native);