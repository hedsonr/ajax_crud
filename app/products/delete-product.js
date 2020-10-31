$(document).ready(function(){
 
    // will run if the delete button was clicked
    $(document).on('click', '.delete-product-button', function(){
         // get the product id
        var product_id = $(this).attr('data-id');
        // bootbox for good looking 'confirm pop up'
        bootbox.confirm({
 
            message: "<h4>Você tem certeza?</h4>",
            buttons: {
                confirm: {
                    label: '<span class="glyphicon glyphicon-ok"></span> Sim',
                    className: 'btn-danger'
                },
                cancel: {
                    label: '<span class="glyphicon glyphicon-remove"></span> Não',
                    className: 'btn-primary'
                }
            },
            callback: function (result) {
                if(result==true){
 
                    // send delete request to api / remote server
                    $.ajax({
                        //url: "http://localhost/rest_api/product/delete.php",
                        url: baseAPIURI_delete,
                        type : "POST",
                        dataType : 'json',
                        data : JSON.stringify({ id: product_id }),
                        success : function(result) {
                 
                            // re-load list of products
                            showProducts();
                        },
                        error: function(xhr, resp, text) {
                            console.log(xhr, resp, text);
                        }
                    });
                 
                }
            }
        });
    });
});