/* Author: Jason Gonzales

*/

$(document).ready(function(){
    $('.buyIt').hover(
        function(){
            $(this).html('Scroll Down Please &dArr;');
        },
        function(){
            $(this).html('Download Our Album &dArr;');
        }
    );
    
    
    $('form').submit(function(){
       var $val = parseInt($('.priceInput').val());
       console.log($val);
       if( $val === 0 ){
        //console.log('cheapskate');
        cheapskateMsg();
         return false;
       }
       
       else if ($val > 0) {
        //console.log('go ahead');
        return true;
       }
       
       else {
        errorMsg();
        return false;
       }
    });
    
    function cheapskateMsg(){
        var html = '<p>Seriously? Nothing? Zero? Nada?<p>';
        html += '<p>Ok, here\'s your link to <a class="button" href="album/TheRegionals.zip">Download</a></p>';
        html += '<p>Or reconsider and pay any old pittance you want. Seriously, would $2 kill you?</p>';
        $('.userMsg').empty().html(html).hide().slideDown();
    }
    
    function errorMsg(){
        console.log('fires');
        var html = '<p>It looks like you entered nonsense, try again please.</p>';
        $('.userMsg').empty().html(html).hide().slideDown();
    }
});





















