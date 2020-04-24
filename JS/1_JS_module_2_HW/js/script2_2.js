var arrName = [];
for (var i = 0; i < 5; i++) {
    arrName[i] = prompt('Введите имя');
}

newArr = arrName;
console.log(newArr);

alert(`Список составлен`);

var user;
var foundUser;

user = prompt('Введите имя пользователя');
for (var userItem of newArr) {
    console.log('ddd ', userItem);
    if (user === userItem) {
        console.log(userItem);
        foundUser = userItem;
        break;
    }
}

if (foundUser) {
    alert(`${user}, вы вошли!`);
} else {
    alert(`Пользователь не найден`);
}




/* user = prompt('Введите имя пользователя');
for (var userItem of newArr) {
    if (user === userItem) {
        alert(`${user}, вы вошли!`);
    }
} */




/* 
alert(`${user}, вы вошли!`);
alert(`Полтзователь не найден`);
 */