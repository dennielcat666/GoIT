var sendButtom = document.querySelector('.send_bottom');
var forText = document.querySelector('.for_text');
var form = document.querySelector('form')



/* forText.addEventListener("keypress", function (e){
    var val = String.fromCharCode(e.keyCode);
    forText.innerHTML = val;
}); */


/* var inputText = forText.value;
console.log('inputText', inputText); */


form.addEventListener('submit', function (e){

    e.preventDefault();

    console.log(e);
    

    var inputText = forText.value;
    /* console.log('inputText', inputText); */
    /* var inputText = forText.value; */

    function GoogleCallback (func, data) {
        window[func](data);
    }

    
    $.ajax({
        url: "http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=PHP&callback=GoogleCallback&context=?",
        /* url: "http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=YahooDemo&output=json&query=PHP&callback=?", */
        dataType: 'jsonp',
        data: inputText,
        success: function(data){
            var ul = document.createElement("ul");
            $.each(data.results, function(i, val){
                var li = document.createElement("li");
                li.innerHTML = '<a href="'+val.url+'" title="'+val.url+'" target="_blank">'+val.title+"</a> - "+val.content;                            
                ul.appendChild(li);
            });
            $('body').html(ul);


        }

        /* success: function(data) {
            var ul = document.createElement("ul");
            $.each(data.ResultSet.Result, function(i, val){
                var li = document.createElement("li");
                var inner = '<a href="'+val.Url+'" title="'+val.Url+'" target="_blank">'+val.Title+"</a>";
                if (val.Summary != "" && val.Summary != "undefined") {
                    inner += " - "+val.Summary;
                }
                li.innerHTML = inner;                               
                ul.appendChild(li);
            })
            $('body').html(ul);

        } */

    
    });


})
