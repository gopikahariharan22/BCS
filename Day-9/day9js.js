//1.1

var y1 = "present";
var y2 = "present";
var y3 = "present";

if ([y1, y2, y3].every((status) => (status == "present")   )) {
  console.log("class started");
} else {
  console.log("No");
}


// 1.2

const students = [
  { name: "Aarav", status: "present" },
  { name: "Divya", status: "absent" },
  { name: "Rohan", status: "present" },
];

if(students.every( student => students.status == "present")){

        console.log("Class started   ...!");
}else{
    console.log("No")
}

// 1.2.1


