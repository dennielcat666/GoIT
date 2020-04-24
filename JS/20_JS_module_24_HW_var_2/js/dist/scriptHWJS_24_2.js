"use strict";

var _view = require("./view");

var _model = require("./model");

var _controller = require("./controller");

// MVC
// requirejs.config ({
//     paths: {
//         'jquery': 'https://code.jquery.com/jquery-3.4.1.min.js',
//         integrity: "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=",
//         crossorigin: "anonymous"
//     },
//     /* shim: {
//         'jquery': {
//             exports: 'jQuery'
//         }
//     } */
// })
// require(
//     [
//         'jquery',
//         'model',
//         'view',
//         'controller'
//     ],
//     function ($, model, view, controller) {
$(function () {
  var firstToDoList = ['test 1', 'test 2', 'test 3'];

  var foo = () => {
    console.log('ya es 6');
  };

  foo();
  var model = new _model.Model(firstToDoList); //инциализируем модель (данные) 

  var view = new _view.View(model); //передвем двнные

  var controller = new _controller.Controller(model, view); //контроль процессв
}); // }
// )
//ЗАПУСК ПРИЛОЖЕНИЯ
//# sourceMappingURL=scriptHWJS_24_2.js.map
