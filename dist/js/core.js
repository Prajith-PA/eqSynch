$(function() {
    var currTask;
    var notMsgCount = 0;
    $('.list-group-item').click(function(){
        $('.task-list').hide();
        if($(this).hasClass('task-complete')){
            $('.task-complete-btn').attr("disabled");
        }
        $('.task-details').fadeIn();
        $('.msg-view-details .replay-sub-head').html($(this).find('.sub-head').html()).parent().fadeIn();
        $('.page-header').html('Reply');
        currTask = $(this).data('taskid');
    });
    
    $('.task-complete-btn').click(function(){
        $('.replay-view-box').append('<span class="glyphicon glyphicon-share-alt" aria-hidden="true"></span><em> 2 minutes ago</em><p>'+$('.msg-replay').val()+'</p>');
        $('.msg-replay').val('');
        if(! $('.task-'+currTask).hasClass('task-complete')){
            $('.task-'+currTask).addClass('task-complete');
            console.log(parseInt($('.notification-msg').html()));
            if(parseInt($('.notification-msg').html())>0){
                $('.notification-msg').html(parseInt($('.notification-msg').html())-1);
            }
        }        
        $('.page-header').html('Notifications');
        $('.task-details').hide();
        $('.task-list').fadeIn();
    });
    $('.btn-login').click(function(){
        var email = $('.txt_email').val();
        var pass = $('.txt_pass').val();
        if(email == '9998887770' && pass == 'admin'){
            $('.login-page').hide();
            $('.after-login').fadeIn();
        }else{
            $('.login-error').show();
            $('.txt_email').val('');
            $('.txt_pass').val('');            
        }
    });  
    $('.home-btn').click(function(){
        showHomePage();
    });
    $('.all-msg-btn').click(function(){
        showHomePage();
    });
    $('.logout-btn').click(function(){
        $('.after-login').hide();
        $('.login-page').fadeIn();
    });     
});

function showHomePage(){
    $('.page').hide();
    $('.page-2').fadeIn();
    $('.page-header').html('Notifications');
}