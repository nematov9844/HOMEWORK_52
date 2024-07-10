// 1. ixtiyoriy array yarating va undagi bir martadan ko'p takrorlangan item larni boshqa array ko'chiradigan function yarating 

let arr1 = [1, 2, 3, 4, 5,3,2];
const arrDuplicate = (arr) => {
     let newArr = arr.filter(function(item, index, array){
        return array.indexOf(item) !== index;
    });
    console.log(newArr);
}
arrDuplicate(arr1);


// 2. Array elementlari kvadratlaridan hosil bo’lgan array hosil qiling. Input: [1, 2, 3, 4, 5] Output: [1, 4, 9, 16, 25] 

let arr2 = [1, 2, 3, 4, 5];
const arrSquare = (arr) => {
    let newArr = arr.map(function(item){
        return item * item;
    });
    console.log(newArr);
}
arrSquare(arr2);

// 3.Arraydagi musbat sonlar yig’indisini hisoblang. (filter va reduce). Input: [ 1, -4, 12, 0, -3, 29, -150] Output: 42 

let arr3 = [ 1, -4, 12, 0, -3, 29, -150];

const arrSum = (arr) => {
    let newArr = arr.filter(function(item){
        return item > 0;
    });
    let sum = newArr.reduce(function(sum, item){
        return sum + item;
    });
    console.log(sum);
}
arrSum(arr3);

// 4. Stringdagi so’zlarning bosh harflarini oling. (split, map, join). Input: 'George Raymond Richard Martin'. Output: 'GRRM' 
let str = "George Raymond Richard Martin";

const strFirstLetter = (str) => {
    let newStr = str.split(' ').map(function(item){
        return item[0];
    });
    let strJoin = newStr.join('');
    console.log(strJoin);
}
strFirstLetter(str);

// 5. Berilgan stringni faqatgina harflardan iborat ekanligiga tekshiring

let str2 = "salom dunyo";

const strIsAlpha = (str) => {
  let arr = str.split('');
 arr.forEach(item => {
    if(isNaN(item)){
        console.log(`${item} harf`);
    }else{
        console.log(`${item} harf emas`);
    }
 });

}
strIsAlpha(str2);


// 6. String berilgan. Stringdagi so'zlar uzunligidan iborat bo'lgan array qaytaring. (split, map) Input: "Hello world" Output: [3, 9, 12] 

let str3 = "Hello world";

const strLength = (str) => {
    let newStr = str.split(' ');
    let arr = newStr.map(function(item){
        return item.length;
    });
    console.log(arr);
}
strLength(str3);


// 7. Stringni bo'sh joy bor yoki yo'qligini tekshiring. Input: "salom dunyo" Output: true 

let str4 = "salom  dunyo";

const strIsLower = (str) => {
   let newString = str.split("")
   newString.forEach(item => {
       if(item.includes(" ")){
           console.log(`${item} bosh joy`);
        }else{
           console.log(`${item} bosh joy emas`);
       }
   })
}
strIsLower(str4);

// 8. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring Input: {a: 2, b: 5, c: 7}. Output: ['a2', 'b5', 'c7']

let obj = {a: 2, b: 5, c: 7};

const objToString = (obj = {}) => {
    let newObj = Object.keys(obj).map(function(item){
        return `${item}${obj[item]}`;
    });
    
    console.log(newObj);
}
objToString(obj);