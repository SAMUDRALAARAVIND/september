/**
 * Regular Expressions: 
 * 
Basic Characters and Metacharacters:

        Ordinary characters (e.g., letters and digits)
        in a regular expression match themselves. For example, /abc/ matches the string "abc".
        Some characters have special meanings, called metacharacters. 
        Common metacharacters include ., *, +, ?, | etc. To match these characters literally, you need to escape them with a backslash (\).

        \d used for digit match
        \w used for word char match ( alpha, _, numeric )

Character Classes:

    Square brackets [] define a character class. For example, [aeiou] matches any single vowel.
    You can use hyphens to specify a range, like [0-9] for any digit.
    You can use ^ inside a character class to negate it. For example, [^0-9] matches any character that is not a digit.
    
Quantifiers:

    Quantifiers control the number of times a character or group can be matched:
    *: Matches 0 or more occurrences (e.g., a* matches "", "a", "aa", ...).
    +: Matches 1 or more occurrences (e.g., a+ matches "a", "aa", ...).
    ?: Matches 0 or 1 occurrence (e.g., a? matches "", "a").
    {n}: Matches exactly n occurrences (e.g., a{3} matches "aaa").
    {n,}: Matches at least n occurrences (e.g., a{3,} matches "aaa", "aaaa", ...).
    {n,m}: Matches between n and m occurrences (e.g., a{2,4} matches "aa", "aaa", "aaaa").

Anchors:

    Anchors define where in the text a match should occur:
    ^: Matches the start of a line (or string).
    $: Matches the end of a line (or string).
    \b: Matches a word boundary.

Modifiers:

    Modifiers affect how the regular expression is applied:
    i: Case-insensitive matching (e.g., /abc/i matches "ABC", "abc", etc.).
    g: Global matching (matches all occurrences, not just the first).
 */

// let str = "g goo goooo is good one";

// o+ => "o", "oo", "ooo", "oooooo"
// console.log(str.match(/o+/g));

// go* => "g", "go", "goo", "goooo"
// console.log(str.match(/go*/g));

// go? => "g" , "go"
// console.log(str.match(/go?/g));

// go{2} => `goo`
// go{2,4} => `goo`, `gooo`, `goooo`
// console.log(str.match(/goo|is/g));

// go* => g, go, goo, goooo
// go+ => go, gooo, gooooo

// let str = "a$-_8b91"; // 8, 9, 1
// "8", "91"

// /pattern/flga => pattern = \d => extracts digits
// console.log(str.match(/\d+/g));

// exp = / \d+ /g = digit+

// 12, 8, 37389939393

// let x = "ab$23_()";
//"a", "b", "2", "3", "_"
// word charecters => alpha, numerics, _

// the most
// \w => matches all the word charecters.
// console.log(x.match(/\w/g));

// \b => word boundary

// console.log(x.match(/\b/g));

// let str = "the sathe man an";

// // a, an ,the are the three articles
// console.log(str.match(/\bthe\b/g));

let str = "an rockey launched a the rocket";

// console.log(str.match(/\bthe\b|\ban\b|\ba\b/g));

let regexp = /\bthe\b|\ban\b|\ba\b/gi;
// "$ rockey launched $ $ rocket"
console.log(str.replace(regexp, "$"));

let arr = [
  "The Virupaksha Temple", // "Virupaksha Temple"
  "a Victoria Memorial", //"Victoria Memorial"
  "an Tajmahal", // "Tajmahal"
];

let articleLessArray = [];
/* ["Virupaksha Temple", "Victoria Memorial", "Tajmahal" ]

{
    "Virupaksha Temple": "The Virupaksha Temple",
    "Victoria Memorial": "a Victoria Memorial",
    "Tajmahal": "an Tajmahal"
}
*/
let mp = {};
// {aricleLessItem: ""}

for (let i = 0; i < arr.length; i++) {
  let articleLessItem = arr[i].replace(regexp, "").trim();
  articleLessItem = articleLessItem.replace(/  /g, " "); // remove two spaces with a single space
  articleLessArray.push(articleLessItem);
  mp[articleLessItem] = arr[i];
  // for i = 0 arr[i] = "The Virupaksha Temple", articlLessItem = "Virupaksha Temple"

  // mp = { "Virupaksha Temple": "The Virupaksha Temple" }
}
// articleLessArray = ["Virupaksha Temple",  "Victoria Memorial", "Tajmahal" ]
//
articleLessArray.sort();

let ans = [];

for (let i of articleLessArray) {
  ans.push(mp[i]);
}

console.log(ans);
// without removing articles the sorting order will be as follows
// 'a Victoria Memorial'
// 'an Tajmahal'
// 'The Virupaksha Temple'

// [
//     "Virupaksha Temple",
//     "Victoria Memorial",
//     "Tajmahal"
// ]

// 'an Tajmahal'
// 'a Victoria Memorial'
// 'The Virupaksha Temple'

// originalArray = ["the king",  "an apple", "a blanket"]
// articleLessArray = ["king", "apple", "blanket"]
// mp = {"king" : "the king", "apple" : "an apple", "blanket" : "a blanket"}
// articleLessArray.sort();
// articleLessArray = ["apple", "blanket", "king"]

// ans = ["an apple", "a blanket", "the king"]

// output = ["an apple", "a blanket", "the king"]
