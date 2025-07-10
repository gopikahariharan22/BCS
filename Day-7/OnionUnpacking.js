// let me unPack The Onion

const me = {
    name1 : "Gopika",
    name2 : "Hariharan",
    name3 : "V",
    native : "Tiruvannamalai ",
    marks : {
        tamil : 90,
        english : 100,
        maths : 0,
    }
    
    }

//console.log(me);


// const  {
//     name1 : "Gopika",
//     name2 : "Hariharan",
//     name3 : "V",
//     native : "Tiruvannamalai ",
//     marks : { tamil : 90 , english : 40 };
    
//     } = me;

//     console.log(name1);

console.log(me.marks);
console.log(me.native);

const {name1,name2,name3,native,marks} = me;
console.log(name1);
console.log(native);
console.log(marks.tamil);