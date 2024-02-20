
const user = {
  name: 'Jhon',
  age: 18,
  addresses: [
    'A',
    'B'
  ]
};

if (user.age >= 18){
  user.isAdult = true;
};


user.addresses.push('c')

console.log(user);


/*
function getStatement(hours){
  if (hours >= 12 && hours < 18) {
  return "Good afternoon";
  }
  if (hours >= 18 && hours < 22) {
  return "Good evening";
  }
  if (hours >= 22 || hours < 5) {
  return "Good night";
  }

  return 'Good morning';
};

function greetings(name, hours) {
const statement = getStatement(hours);
return `Hello ${name}, ${statement}`;
};
console.log(greetings("John",new Date().getHours()));
*/