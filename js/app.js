$(document).ready(main);

let contador = 1;
function main(){
    $('.menu_bar').click(function(){
        if(contador == 1){
            $('nav').animate({
                left:'0'
            });
            contador = 0;
        }
        else {
            contador = 1;
                $('nav').animate({
                    left:'-100%'
                });
        }
    });
}


$(document).ready(function() {
    $('.img-header').click(function() {
        $(document).scrollTop($(document).height());
        
    });

});

