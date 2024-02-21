
const user = {
  name: 'Jhon',
  age: 18,
  addresses: [
    'Av. paulista',
    'rua nossa senhora das dores'
  ]
};


if (user.age >= 18){
  user.isAdult = true;
};

const user2 = {
  ...user,
  name: 'idk',
  age: 6
}

if(user2.age >= 18){
  user.isAdult = true;
};



user.addresses.push('c')

console.log(user);
console.log(user2);


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