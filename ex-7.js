function isPalindrome(string) {
  // Start coding here
  const reverseString = string.split("").reverse().join("");
  // if (reverseString === string) {
  //   return true;
  // } else {
  //   return false;
  // }
  return reverseString === string ? true : false;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
