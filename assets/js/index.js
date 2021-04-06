'use strict';
function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(Math.random() * (max-min+1)) + min;
}

const numsArr = [];
for (let i = 0; i<10; i++){
  numsArr.push(getRandomIntInclusive(100, 200));
}

function User(firstName, lastName, email, age, isMale, isSubscribed = false){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isMale = isMale;
  this.isSubscribed = isSubscribed;
}
const NATIONALITIES = [
  'uk',
  'us',
  'bg',
  'ru',
  'uk',
  'fr',
]

User.prototype = new UserProto();
function UserProto(){
this.getFullName = function(){
  return `${this.firstName} ${this.lastName}`;
}
}
 function getRandomUsers (amount){
   const usersArray = [];
   for (let i = 0; i < amount; i++){
     usersArray.push(
       new User(
         `Name${i}`, //first name
         `Surname${i}`, // last name
         `user${i}@gmail.com`, //email
         getRandomIntInclusive(10, 50), // age
         getRandomNationality(),
         Math.random() < 0.5, // isMale
         Math.random() <0.5 // isSubscribed
       )
     );
   }
   return usersArray;
 }

 function getRandomNationality(){
   return NATIONALITIES [getRandomIntInclusive(0,NATIONALITIES.length - 1)];
 }

 const userList = getRandomUsers(100);

 function getSubscribedAdultWoman(arr){
 return arr.filter(function(user){
  return user.age >= 18 && !user.isMale && user.isSubscribed;
});
 }
 
