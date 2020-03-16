$(document).ready(function(){

    $('.square').click(function(){
        var questa = $(this);
        $.ajax({
                url: 'https://flynn.boolean.careers/exercises/api/random/int',
                method: 'GET',
                success: function (data) {
                    var numeroPC = data.response;
                    if (numeroPC > 5) {
                        questa.css('background-color', 'yellow');
                    } else if (numeroPC <= 5){
                        questa.css('background-color', 'green');
                    }
                    questa.children('p').text(numeroPC);
                },
                error: function () {

                }
            });
    });




});
