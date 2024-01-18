let text = document.querySelector("#text");
let see = document.querySelector("#see");
let result = document.querySelector("#result");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let concetin = document.querySelector("#concat");

let subbtn = document.querySelector("#sub");
let Countvowelbtn = document.querySelector("#countv");
let CountConsonent = document.querySelector("#countcon");
let reversebtn = document.querySelector("#reverse");
let splitbtn = document.querySelector("#split");
let concet = document.querySelector("#concet");
let see2 = document.querySelector("#see2");
let palindrome=document.querySelector("#palindrome");
let low=document.querySelector("#Lower");
let upper=document.querySelector("#upper");


// Sub String  getting part 
let c = 0;

function GettingSubString(Firstindex, Secondindex) {
    let textvalue = text.value;
    const ar = textvalue.substring(Firstindex, Secondindex);
    return ar;
}
// Showing result part of sub string 
function Showingresult() {
    see.addEventListener("click", (e) => {
        e.preventDefault();
        let r = GettingSubString(start.value, end.value);
        result.innerHTML = `Sub String is :${r}`;

    })
}
// Sub Strig button clicking part
subbtn.addEventListener("click", (e) => {
    e.preventDefault();


    if ((c % 2) === 0) {
        if (text.value !== '') {
            start.style.display = "block";
            end.style.display = "block";


            see.style.display = "block";

            Showingresult();

        }
    } else {
        console.log("false");
        start.style.display = "none";
        end.style.display = "none";
        see.style.display = 'none';
        result.style.display = 'none';
    }

    c++;

});


function countVowel(text) {

    let count = 0;
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < text.length; i++) {
        if (vowel.includes(text[i])) {
            count++;
        }
    }
    return count;


}

// Count Vowel
let cc = 0;
Countvowelbtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (cc % 2 == 0) {
        if (text.value !== '') {

            let r = countVowel(text.value);
            result.style.display = 'block';
            result.innerHTML = `Total vowel is:${r}`;
        }
        else {
            alert("Enter the string first");
        }
    }
    else {
        result.style.display = 'none';
    }
    cc++;


})
// Count Consonent


function countConsonent(text) {

    let count = 0;
    let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let i = 0; i < text.length; i++) {
        if (!vowel.includes(text[i])) {
            count++;
        }
    }
    return count;


}

let ccc = 0;
CountConsonent.addEventListener("click", (e) => {
    e.preventDefault();
    if (ccc % 2 == 0) {
        if (text.value !== '') {

            let r = countConsonent(text.value);
            result.style.display = 'block';
            result.innerHTML = `Total Consonent is:${r}`;
        }
        else {
            alert("Enter the string first");
        }
    }
    else {
        result.style.display = 'none';
    }
    ccc++;


})


// Reversing the String 
function Reverse() {
    let reverse = text.value.split('').reverse().join('');
    result.style.display = 'block';
    result.innerHTML = `Total vowel is:${reverse}`;

}
let cccc = 0;
reversebtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (cccc % 2 == 0) {
        if (text.value !== '') {

            Reverse();


        }
        else {
            alert("Enter the string first");
        }
    }

})
// Spilting one
let c5 = 0;
splitbtn.addEventListener("click", (e) => {
    e.preventDefault();
    let split = text.value.split('');
    if (c5 % 2 == 0) {
        if (text.value !== '') {
            result.style.display = 'block';
            result.innerHTML = split;
        }
        else {
            alert("Enter String first ");
        }
    }
    else {
        result.style.display = 'none';
    }
})
/* // Concetination 
let c6 = 0;
function ConcatString(value1, value2) {
    let see2 = document.querySelector("#see2");

    // Attach event listener outside the function
    see2.addEventListener("click", (r) => {
        let concetoftwo = value1.concat(value2);
        result.style.display = 'block';
        result.innerHTML = `Concatenated String is: ${concetoftwo}`;
    });
}

concet.addEventListener("click", (e) => {
    e.preventDefault();
    if (c6 % 2 == 0) {
        if (text.value !== '') {
            concetin.style.display = 'block';
            ConcatString(text.value, concetin.value);
            see2.style.display='block';
        }
    }
    c6++;
});


*/

// palidrome check
function checkpalindrome(value)
{
let orginal=value;
let reverse=value.split('').reverse().join('');
if(orginal===reverse)
{
return true;
}
return false;

}
let c7=0;
palindrome.addEventListener("click",(e)=>{
e.preventDefault();
if(c7%2==0)
{
if(text.value!=='')
{
    let getr=checkpalindrome(text.value);
    if(getr===true)
    {
        result.style.display='block';
        result.innerHTML=`${text.value} is palindrome`;
    }
    else{
        result.style.display='block';
        result.innerHTML=`${text.value} is not palindrome`;

    }
}
}
else{
result.style.display='none';
}
c7++;
})
// Lowercase 
let c8=0;
low.addEventListener("click",(e)=>{
e.preventDefault();
if(c8%2==0)
{
if(text.value!=='')
{
    result.style.display='block';
    result.innerHTML=`Lower case is : ${text.value.toLowerCase()}`;
}
}
else
{
result.style.display='none';
}
c8++;

})
// Uppercase 
let c9=0;
upper.addEventListener("click",(e)=>{
e.preventDefault();
if(c9%2==0)
{
if(text.value!=='')
{
    result.style.display='block';
    result.innerHTML=`Lower case is : ${text.value.toUpperCase()}`;
}
}
else{
result.style.display='none';
}
c9++;
})


