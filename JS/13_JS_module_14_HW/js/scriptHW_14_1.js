'use strict';


const data = [
    {
        question: "Вопрос №1",
        answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        rightAnswer: 2
    },
    {
        question: "Вопрос №2",
        answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        rightAnswer: 0
    },
    {
        question: "Вопрос №3",
        answers: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        rightAnswer: 1
    },
]


localStorage.setItem('data', JSON.stringify(data));





var commonBox = document.createElement('div');
commonBox.classList.add('common_box');

var body = document.querySelector('body');
body.appendChild(commonBox);

                                                                        /* СОЗДАЛИ ОБЩИЙ БЛОК */

var commonText = document.createElement('div');
commonText.classList.add('common_text');
commonText.innerHTML = 'Тест по программированию';

commonBox.appendChild(commonText);

                                                                /* СОЗДАЛИ БЛОК С ТЕКСТОМ-ЗАГОЛОВКОМ */

var commonTest = document.createElement('div');
commonTest.classList.add('common_test');

commonBox.appendChild(commonTest);

                                                                    /* СОЗДАЛИ ОБЩИЙ ТЕСТОВЫЙ БЛОК */

var commonList = document.createElement('ol');
commonList.classList.add('common_list');

commonTest.appendChild(commonList);

                                                                    /* СОЗДАЛИ СПИСОК С ТЕСТАМИ */

                                                                /* СОЗДАН ПЕРВЫЙ ЭЛЕМЕНТ СПИСКА */

function addCheckBox(item) {
    //item = 'Вариант ответа №0'
    var label = document.createElement('label');
    label.classList.add('label_answer');
    label.innerHTML = item;

    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";

    label.insertBefore(checkBox, label.childNodes[0]);
    label.style.display = 'block';

    return label;
}

var reservedData = localStorage.getItem('data');
reservedData = JSON.parse(reservedData);


function addListBox(item) {
    var form = document.createElement('form');
    var listItem = document.createElement('li');
    listItem.classList.add('list_item');
    listItem.innerHTML = item.question;
    for (let i = 0; i <= item.answers.length - 1; i++) {
        const foo = item.answers[i]; // foo = 'Вариант ответа №0'
        var checkBoxElement = addCheckBox(foo);
        form.appendChild(checkBoxElement);
    }
    listItem.appendChild(form);
    return listItem
}



for (let i = 0; i <= reservedData.length - 1; i++) {
    const listElement = addListBox(reservedData[i])
    commonList.appendChild(listElement);
}


var bottonClick = document.querySelector('.btn')

bottonClick.addEventListener('click', function(e){
    e.preventDefault();
    var questionEl = document.querySelectorAll('.list_item');
    var result = true;
    var ifUnCheckedAll = true;

    for (let i = 0; i <= questionEl.length - 1; i++) {
        var indexQuestion = questionEl[i];
        var answerEl = indexQuestion.querySelectorAll('.label_answer');
        var goodAnswer = reservedData[i].rightAnswer;
        
        for (let j = 0; j <= answerEl.length - 1; j++) {
            var currentAnswer = answerEl[j];
            var checkBoxAnswer = currentAnswer.querySelector('[type=checkbox]')

            if (checkBoxAnswer.checked) {
                ifUnCheckedAll = false;
            }
            
            if (checkBoxAnswer.checked && j !== goodAnswer) {
                result = false;
            } 
        }  
    }

    let modalTitle = document.querySelector('.modal-title');
    let modalBody = document.querySelector('.modal-body');

    if (result && !ifUnCheckedAll) {       // !ifUnCheckedAll ..... ifUnCheckedAll === false
        modalTitle.innerHTML = 'Поздравляю!';
        modalBody.innerHTML = 'Тест пройден!';
    } else {
        modalTitle.innerHTML = 'Упс...';
        modalBody.innerHTML = 'Вы допустили ошибку';
    }

    $('#myModal').modal({
        show: false
    });

})
    
    



