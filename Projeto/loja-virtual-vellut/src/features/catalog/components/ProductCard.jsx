export function ProductCard({ name, price, category, subcategory, brand, image }) {
    return (
        <div className="product-card">
            <div>{name}</div>
            <div>{price}</div>
            <div>{category}</div>
            <div>{subcategory}</div>
            <div>{brand}</div>
            <div>
                <img src={image} width={100} />
            </div>
        </div>
    );
}


  {/*
                Apresente os dados de um produto
                - id : Todo produto tem um id, mas ele não precisa ser apresentado ao usuário
                
                Para os campos abaixo, talvez uma <div> poderá ser uma boa opção para apresentação
                - name : Nome do produto
                - price : Preço do produto
                - category Categoria do produto

                Utilize <img /> para apresentar uma imagem. As imagens dos produtos devem estar 
                dentro da pasta "/src/assets/images/"
                - image : Imagem do produto, exemplo: "/src/assets/images/produto.jpg"
            */}