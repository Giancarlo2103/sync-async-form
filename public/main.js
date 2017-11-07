$(document).ready(function (){
    alert('Hola')

   $('input[type="submit"]').on("click", function(event) {
        /*var first_name = $('input[name="first_name"]').val();
        console.log(first_name);

        event.preventDefault();*/

        event.preventDefault();


        var first_name =$('#first_name').val();

        /*$.ajax('find.html',{
        	method = 'post',
        	data : {
        		'first_name' : first_name
        	}
        });*/


        $.post('find.html',{'first_name' : first_name});
         $.get('find.html',{'first_name' : first_name});

    });


})
