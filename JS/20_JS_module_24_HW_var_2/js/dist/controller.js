"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controller = Controller;

function Controller(model, view) {
  var self = this;
  view.elements.addBtn.on('click', addNewItem);
  view.elements.listContainer.on('click', '.item-delete', removeListItem); //клик непосредственно на элемент

  view.elements.listContainer.on('click', '.item-edit', editListItem);

  function addNewItem() {
    var newItem = view.elements.input.val(); //cчитывает что пишится в инпуте

    model.addItem(newItem);
    view.renderList(model.data); //отображение новых данных

    view.elements.input.val(''); //обнуляем значение импут пустой строкой 
  }

  function removeListItem() {
    var item = $(this).attr('data-value'); //вытягиваем значение конкретного элемента кторый должен удалиться (можно еще по индексу data[i])

    model.removeItem(item); //откуда удаляем и что удаляем

    view.renderList(model.data); //снова отрендерила новы список
  }

  function editListItem() {
    var item = $(this).parent();
    var editedEl = $(this).attr('data-value');
    var spanElDelete = item.find('.item-delete'); //span для удаления элемента списка

    console.log(spanElDelete);
    item.html('');
    var editInput = $('<input>', {
      type: 'text',
      class: 'input-for-edit',
      value: editedEl
    }); //создание инпута для редактирования

    editInput.appendTo(item);
    var saveBtn = $('<span>', {
      class: 'save-changes'
    }).html('S');
    saveBtn.appendTo(item);

    function saveChanges() {
      var newValue = editInput.val();
      model.editItem(editedEl, newValue);
      view.renderList(model.data); //отображение новых данных
    }

    saveBtn.on('click', saveChanges);
  }
}
//# sourceMappingURL=controller.js.map
