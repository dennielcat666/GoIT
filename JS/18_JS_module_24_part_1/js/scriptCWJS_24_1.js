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
}

function View(model) {
    var self = this;
    
    function init() {                           //вставка каркасса. вызывается 1 раз при загрузке приложения (при инициализвции)
        var wrapper = $('.wrapper').html();
        self.elements = {                       //место хранения ссылок на ДОМ элементы, которые отвечают за кнопку add и delete
            input: $('.item-value'),            //input с которого считываем информацию
            addBtn: $('.item-add'),              //кнопка
            listContainer: $('.item-list')      //ul в который будем вставлять список 
        };
        self.renderList(model.data);            //один раз рендерим список. data из Model (функция выше)
    };

    self.renderList = function(data) {          //вставка элементов списка в ul
        self.elements.listContainer.html('')
        for (let i = 0; i <= data.length - 1; i++) {
            var listItem = $('<li>').html(data[i]);            //компеляция данных шаблонизатором. контент для рендеринга, передаем data
            var spanEl = $('<span>', {'data-value': data[i], class: 'item-delete'}).html('X').appendTo(listItem);
            self.elements.listContainer.append(listItem);
            console.log('listItem', listItem);  
        }
        
        

                     //вставляем list в listContainer
    };

    init();                                     //вызов вставки
}

function Controller(model, view) {
    var self = this;
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeListItem);    //клик непосредственно на элемент


    function addItem() {
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
}


//ЗАПУСК ПРИЛОЖЕНИЯ

$(function () {
    
    var firstToDoList = ['test 1', 'test 2', 'test 3'];

    var model = new Model(firstToDoList);  //инциализируем модель (данные) 
    console.log('model',model);
    
    var view = new View(model);                //передвем двнные
    var controller = new Controller(model, view); //контроль процессв


})