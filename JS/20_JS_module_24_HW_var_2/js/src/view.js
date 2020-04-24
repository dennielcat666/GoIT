export function View(model) {
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

