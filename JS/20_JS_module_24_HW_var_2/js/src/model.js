
export function Model(data) {                              //данные и работа с данными
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


