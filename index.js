//  a = 5;
//  b = 6;
//  c=a;
//  a=b;
//  b=c;
// console.log(a,b);
// a = 100;
// b = 6;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b)
// a = 25;
// b = 60;
// console.log(a,b);
//  mark =85;
//  if(mark>=60){
//     console.log("first class");
//  }else if(mark<=45){
//     console.log("second class");
//  }else{
//     console.log("thired class"); 
//  }
//  let marks = 0;
//  let grade;
//  if (marks>60){
//     console.log("first class");
//     grade = "A"
//  }else if(marks>45){
//     console.log("second class");
//     grade = "B"
//  }else{
//     console.log("fail")
//     grade ="no grade"
//  }



//  let day = 4;
//  switch (day) {
//      case 1:
//          console.log("Today is Monday");
//          break;
//      case 2:
//          console.log("Today is Tuesday");
//          break;
//      case 3:
//          console.log("Today is Wednesday");
//          break;
//      case 4:
//          console.log("Today is Thursday");
//          break;
//      case 5:
//          console.log("Today is Friday");
//          break;
//      case 6:
//          console.log("Today is Saturday");
//          break;
//      case 7:
//          console.log("Today is Sunday");
//          break;
//      default:
//          console.log("Invalid day");
//          break;
// //  }
// let vowel ="b"
// switch(vowel){
//     case "a":
//     console.log("vowel");
//     break;
//     case "e":
//         console.log("vowel");
//         break;
//      case "i":
//         console.log("vowel");
//         break;
//       case "o":
//         console.log("vowel"); 
//         break;
//       case "u":
//         console.log("vowel");
//         break;
//         default:
//             console.log("charactor is not vowel");   
//             break;   
// }
// let age = 5;
// if(age>=5){
//     console.log("free");
// }else if(age<=12){
//     console.log("10");
// }else{
//     console.log("15");
// }
// a = 12;
// b = 16;
// if(a<b){
//     console.log("a is a smallest number");
// }else if(b>a){
//     console.log("a is a smallest number");
// }else{
//     console.log("a is a smallest number" );
// } 

// let v=26
// if(v==26){
//     console.log("yes")
// }else if(v==25){
//     console.log("no")
// }else{
//     console.log("yes")
// }

// // 1 question:

// let lap = 1;
// let count = 10;
// while(Lap<=count){
//     console.log("lap"+lap);
//     lap++;
// }

// // 2 question:

// function robotmovement(){
//     let i = 100;
// while(i>=20){
//     console.log(i+"%");
//     i=i-5;
// }
// console.log("Battery is low");
// }
// robotmovement()


// 3 question:

directions(2)
function directions(n){
    switch(n){
        case 1:
            console.log("North");
            break;
        case 2:
            console.log("South");
             break;
        case 3:
            console.log("East");
            break;
        case 4:
            console.log("West");
            break;
        default:
            console.log("invalide");
     }
    
}

// //  4th question:

//  let i = 1000;
//  if(i<0){
//      console.log("Flight arrived");
//  }else(i>=0)
//  {
//     console.log("Flight arrived");
//  }

// 5th question:
// flight(3)
// function flight (n){
//     switch(n){
//         case 1:
//             console.log("runway"+n);
//             break;
//         case 2:
//             console.log("runway"+n);
//             break;
//         case 3:
//             console.log("runway"+n);
//             break;
//         case 4:
//             console.log("runway"+n);
//             break; 
//         default:
//             console.log("invalide");          
//     }
    
// }


// 6th question:

// for(i=1;i<=10;i++){
//  console.log(i*100+"ft");
// }

// let cars = ["Audi","BMW","Cooper"]
//  for(i=1;i<cars.length;i++){
//     console.log(cars[i]);
//  } 

// ARRAYS:
 
//  let color = ["Blue","Pink","White","Green"]
//  for(i=color.length-1;i>=0;i--){
//     console.log(color [i]);
//  }

//  let cars = ["Tesla", "BMW", "Toyota"];
// cars[1] = "Mercedes"; 
// console.log(cars);

// let nestedArray = [["a", "b", "c"], [1, 2, 3], [true, false]];
// console.log(nestedArray[1][2]);

// let fruits = ["Apple","orange","Graps","kiwi","Mango"]

// console.log(fruits[3]);//kiwi

// console.log(fruits[0]);//Apple

// console.log(fruits[0]+","+fruits[4]);//Apple,mango

// fruits[0]="Dragon fruits";
// console.log(fruits);//[ 'Dragon fruits', 'orange', 'Graps', 'kiwi', 'Mango' ]

// fruits[1]=fruits[4];
// console.log(fruits);//[ 'Apple', 'Mango', 'Graps', 'kiwi', 'Mango' ]

function greet(name) {
    console.log(`Hello, ${name}`);
}

function greetGoodAfternoon(name){
    console.log(`Good afternoon,${name}`)
}

function processUserInput(callback) {
    const name = console.log("Please enter your name:");
    callback(name);
}

processUserInput(greet)

