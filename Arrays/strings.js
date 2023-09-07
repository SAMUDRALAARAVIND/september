// let str = "aravind";

// console.log(str.length); // 7

// let x = str.charAt(100); // ""
// console.log(x, x.length);

// a = 97, b = 98, c = 99 ..
// A = 65, B = 66 ..
// let x = "akB";
// console.log(x.charCodeAt(2));

// comparision of strings
// lexicographical order ( )
// "abc" , "abm"
// "mno", "mn"

// console.log("ab" < "ac");

// let str = "I am aravind";

// let x = str.slice(2, 7);

// console.log(x); //

// let x = "de$va$ku$mar";
// 2 words
// let frags = x.split("$");
// console.log(frags);
// "deva" v

// let arr = ["a", "mn", "o", "xyz"];

// let joinedString = arr.join(""); // "a-mn-o-xyz"
// console.log(joinedString);

// let str = "i am aravind";

// let result = str.replace("i", "MNO");

// console.log(result); // "I am aravind"

// regular expressions.

// let str = "ant act amnt";
// "Y Y amnt"

// a_t => ["ant", "act"]

// global flag used to match all the occurances
// insensitive

// meta charecters :
// . => matches with any charecter
// ? => 0 or 1 occurence of it's previous char.
// + => 1 or more occurance of it's preceeding char
// * => 0 or more occurances of it's preceeding char

// let regex = /a..t/g;

// console.log(str.match(regex));

// let result = str.replace(/a.t/g, "Y");

// console.log(result);

// let str = "abaaa bmno";

// "b" , "ba"

// "ba", "baa", "baaa",
// ["baaa", "b"]
// ["b", "ba", "baa", "baaa", "baaaaaa..."]

// "b", "d", "b", "b"
// /b./g = ["bd", "bm", "by"]
// console.log(str.split(/b./g));
// console.log(str.match(/b|d/g));
// console.log(str.match(/ba*/g));

// b, ba, baa, baaa, baaaaaaaaaaaa
// b, ba, baaa

// let str = "amn akn asn";
// // a_n
// // [k, s]
// // akn
// // asn
// console.log(str.match(/a[ks]n/g));

// Remove all the extra spaces between the string.
// let str = "a     xyz  mno   ";

// let regexp = / +/g;

// let result = str.replace(regexp, " ");
// console.log(result);
