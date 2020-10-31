$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-product-button', function(){
        // get product id
        var id = $(this).attr('data-id');             
            // read product record based on given ID
        //$.getJSON("http://localhost/rest_api/product/read_one.php?id=" + id, function(data){
        $.getJSON(baseAPIURI_readOne + id, function(data){
            // start html
            var read_one_product_html=`
            
                <!-- when clicked, it will show the product's list -->
                <div id='read-products' class='btn btn-primary pull-right m-b-15px read-products-button'>
                    <span class='glyphicon glyphicon-list'></span> Ler Produto
                </div>

                <!-- product data will be shown in this table -->
                <table class='table table-bordered table-hover'>
                
                    <!-- product name -->
                    <tr>
                        <td class='w-30-pct'>Nome</td>
                        <td class='w-70-pct'>` + data.name + `</td>
                    </tr>
                
                    <!-- product price -->
                    <tr>
                        <td>Preço</td>
                        <td>` + data.price + `</td>
                    </tr>
                
                    <!-- product description -->
                    <tr>
                        <td>Descrição</td>
                        <td>` + data.description + `</td>
                    </tr>
                
                    <!-- product category name -->
                    <tr>
                        <td>Categoria</td>
                        <td>` + data.category_name + `</td>
                    </tr>
                
                </table>`;
                // inject html to 'page-content' of our app
                $("#page-content").html(read_one_product_html);
                
                // chage page title
                changePageTitle("Ver Produto");
        });
    });
});