const search = () =>{
    const searchProduct = document.getElementById('search-bar').value.toUpperCase()
    const gallery = document.getElementById('product-list')
    const product = document.querySelectorAll('.product')
    const pname = gallery.getElementsByTagName('h3')


    for(var i = 0; i < pname.length; i++)
    {
        let match = product[i].getElementsByTagName('h3')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML;

            if(textValue.toUpperCase().indexOf(searchProduct) > -1){
            product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }
    }
}

