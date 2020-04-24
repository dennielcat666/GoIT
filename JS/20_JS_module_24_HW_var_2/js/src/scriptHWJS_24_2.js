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
import { View } from './view';
import { Model } from './model';
import { Controller } from './controller';

        $(function () {
        
            var firstToDoList = ['test 1', 'test 2', 'test 3'];

            const foo = () => {
                console.log('ya es 6');
                
            }

            foo();
        
            var model = new Model(firstToDoList);  //инциализируем модель (данные) 
            
            var view = new View(model);                //передвем двнные
            var controller = new Controller(model, view); //контроль процессв
        
        
        })
    // }

// )





//ЗАПУСК ПРИЛОЖЕНИЯ

