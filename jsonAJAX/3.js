let callAjaxUsingJquery = () =>{
    let city = $('#textid').val() || 'pune';

    let url = "http://api.openweathermap.org/data/2.5/weather?appid=12a37c610fc89e28980ea60352d11aa9&units=metric&q="+ city ;
  
    $.ajax(url).done((data1) =>{
        $('#parent :nth-child(1)')
        //.clone(true)
        .html(data1.name + " " + data1.main.temp_max)
        .insertBefore($("#parent :nth-child(1)"));
        $("#textid").val("");
   });
};