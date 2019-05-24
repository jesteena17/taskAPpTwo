console.log("\n\n Variable n Types \n");
console.log("heloworld");
let completed:boolean=false;
let myname:string="jesteena";
var myfavcolor="orange";
console.log(myname);
console.log(myfavcolor);
let myfullname="jesteena baby";
var mydob="17-may-1993";
var myage=26;
let desc:string=`helooo, my name is ${myfullname}.
 i'll be ${myage+1} years old next year `;
 console.log(desc);
 console.log("heloo,my name is "+myfullname+"\n i'll be "+(myage+1)+"years old next year");
 console.log("\n\n Array \n");
 
 let myfriends:String[]=["riya","maya","kp","athira","archu","swathi"];
 console.log(myfriends[0]);

 var mymarks:any[]=[10,"twenty","thirty",40];
 console.log(mymarks[2]);
 
 var mymarks:any[]=[10,[11,222,3333,4444],"thirty",40];
 console.log(mymarks[1][0]);

 var mycoins:Array<Number>=[20,35,45,67];
 console.log(mycoins[3]);

 console.log("\n\n Tuple \n");

 let myx:[string,Number];
 myx=["jesty",26];
 console.log(myx[0]);
 console.log(myx[0].substr(1));
 myx[0]="niit";
 console.log(myx[1].toString()); 
 
 
 console.log("\n\n Enum \n");

 enum color{red,green,blue};
 let c:color=color.green;
 console.log(color);
 
 for (var t in color) {
    console.log("enum member: ", t);
 }