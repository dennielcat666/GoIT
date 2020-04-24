// MVC

function Model(data) {                              //данные и работа с данными
    var self = this;                            //конструктор класса
    self.data = data;                           //массив (['test 1', 'test 2', 'test 3'])

    self.addItem = function (item) {            //добавление нового элемента в список
        if (item.length === 0) {                //проверка на корректность введенных данных
                                                //если пришла пустая строка (length === 0)...
            
            return;                             //...просто делем возврат
        }
        
        self.data.push(item);                   //добавление элемента в массив (в список)
        return self.data;                       //возвращаем обнавленные данные
    };
    self.removeItem = function (item) {         //удаление элемента из списка
        var index = self.data.indexOf (item);   //js будет искать совпадение строк. если придет например 
                                                //test 2, то js будет идти по элементам масства, искать совпадения
                                                //и если найдет совпадение, вернет индекс
        
        if (index === -1) {                     //если индекс не найден...
            return;                             //...делаем возврат
        }

        self.data.splice(index, 1);             //"удаляем" элемент из массива (схлопываем на 1)                                             
        return self.data;
    }

    self.editItem = function (item, newValue) {            //редактирование элемента списка
        var index = self.data.indexOf(item);   //js будет искать совпадение строк. если придет например 
                                                //test 2, то js будет идти по элементам масства, искать совпадения
                                                //и если найдет совпадение, вернет индекс
        
        if (index === -1) {                     //если индекс не найден...
            return;                             //...делаем возврат
        }

        self.data[index] = newValue;
        return self.data;
    }
}

function View(model) {
    var self = this;
    
    function init() {                           //вставка каркасса. вызывается 1 раз при загрузке приложения (при инициализвции)
        var wrapper = $('.wrapper').html();
        self.elements = {                       //место хранения ссылок на ДОМ элементы, которые отвечают за кнопку add и delete
            input: $('.item-value'),            //input с которого считываем информацию
            addBtn: $('.item-add'),              //кнопка
            listContainer: $('.common-list')      //ul в который будем вставлять список 
        };
        self.renderList(model.data);            //один раз рендерим список. data из Model (функция выше)
    };

    self.renderList = function(data) {          //вставка элементов списка в ul
        self.elements.listContainer.html('')
        for (let i = 0; i <= data.length - 1; i++) {
            var listItem = $('<li>', {class: 'list-item'}).html(data[i]);            //компеляция данных шаблонизатором. контент для рендеринга, передаем data
            var spanElDelete = $('<span>', {'data-value': data[i], class: 'item-delete'}).html('X').appendTo(listItem);
            var spanElEdit = $('<span>', {'data-value': data[i], class: 'item-edit'}).html('O').appendTo(listItem);
            self.elements.listContainer.append(listItem);       //вставляем list в listContainer 
        }
                     
    };

    init();                                     //вызов вставки
}

function Controller(model, view) {
    var self = this;
    view.elements.addBtn.on('click', addNewItem);
    view.elements.listContainer.on('click', '.item-delete', removeListItem);    //клик непосредственно на элемент
    view.elements.listContainer.on('click', '.item-edit', editListItem);

    function addNewItem() {
        var newItem = view.elements.input.val();       //cчитывает что пишится в инпуте
        model.addItem(newItem);
        view.renderList(model.data);            //отображение новых данных
        view.elements.input.val('');            //обнуляем значение импут пустой строкой 
    }

    function removeListItem() {
        var item = $(this).attr('data-value');      //вытягиваем значение конкретного элемента кторый должен удалиться (можно еще по индексу data[i])
        model.removeItem(item);                     //откуда удаляем и что удаляем
        view.renderList(model.data);                //снова отрендерила новы список
    }

    function editListItem() {
        var item = $(this).parent();
        var editedEl = $(this).attr('data-value')
        var spanElDelete = item.find('.item-delete')        //span для удаления элемента списка
        console.log(spanElDelete);
        
        item.html('')

        var editInput =  $('<input>', {type: 'text', class: 'input-for-edit', value: editedEl});  //создание инпута для редактирования
        editInput.appendTo(item);
        var saveBtn = $('<span>', {class: 'save-changes'}).html('S');
        saveBtn.appendTo(item);

        function saveChanges() {
            var newValue = editInput.val();
            model.editItem(editedEl, newValue);
            view.renderList(model.data);    //отображение новых данных
        } 

        saveBtn.on('click', saveChanges)
        
    }
}


//ЗАПУСК ПРИЛОЖЕНИЯ

$(function () {
    
    var firstToDoList = ['test 1', 'test 2', 'test 3'];

    var model = new Model(firstToDoList);  //инциализируем модель (данные) 
    
    var view = new View(model);                //передвем двнные
    var controller = new Controller(model, view); //контроль процессв


})