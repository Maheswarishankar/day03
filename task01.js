

//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)
//2.Create your own resume data in JSON format
//3.Read about the difference between window, screen and document in javascript


//for in loop in object
    let studentsinfo = {  
        name : "Maheswari",
        class : "VII - STD",
        Section: "c- section",     
        subject :{
            'tamil': "78",
            'English':"84",
            'maths':"88",
            'science':"75",
            'social':"79",
        },
         Totalmark : "401"
    }
         console.log(studentsinfo);
    
    
    for (let key in studentsinfo){
        console.log(key);
    }

//for loop
let arr=["tamil,english,maths,science,social"];
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
//for of loop
let subject=["tamil,english,maths,science,social"];
for (let ele of arr){
    console.log(ele);

}

//for each 
 //not teach this class

