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

function addCheckBox(index) {
    var label = document.createElement('label');
    label.innerHTML = 'Вариант ответа №' + index;

    var checkBox = document.createElement('input');
    checkBox.type = "checkbox";

    label.insertBefore(checkBox, label.childNodes[0]);
    label.style.display = 'block';

    return label;
}



function addListBox(index) {
    var form = document.createElement('form');
    var listItem = document.createElement('li');
    listItem.classList.add('list_item');
    listItem.innerHTML = 'Вопрос №' + index;
    for (let i = 1; i < 4; i++) {
        var checkBoxElement = addCheckBox(i);
        form.appendChild(checkBoxElement);
    }
    listItem.appendChild(form);
    return listItem
}


for (let i = 1; i < 4; i++) {
    const listElement = addListBox(i)
    commonList.appendChild(listElement);
}







var botton = document.createElement('div');
botton.classList.add('botton');

commonBox.appendChild(botton);

var formForBotton = document.createElement('form');

botton.appendChild(formForBotton);

var bottonClick = document.createElement('input');
bottonClick.type = 'submit';
bottonClick.value = 'Проверить мои результаты';

formForBotton.appendChild(bottonClick);






