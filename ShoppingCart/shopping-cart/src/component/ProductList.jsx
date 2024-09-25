import '../component/productList.css';
const ProductList = ({products,setCart,cart}) => {


    const addToCart = (id) => {
        debugger
        const productToAdd = products.find(product => product.id === id);
        if (productToAdd) {
            const test = cart.includes(productToAdd);
            if (!test) {
                setCart(prevCart => {
                    let existingProduct = prevCart.find(item => item.id === id);
                    if (existingProduct) {
                        return prevCart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
                    } else {
                        return [...prevCart, productToAdd]
                    }

                }
                );
            }
        }
    };

    return (
        <div className="container">
            <div className='productList'>
                {products.map(product =>
                    <div className='product-container'>
                        <img src={product.image} />
                        <h4>{product.Pname}</h4>
                        <span className='price'>Price: {product.Price}</span>
                        <button onClick={() => addToCart(product.id)} className='btn'>Add to Cart</button>
                    </div>
                )}

            </div>
            <div className='partitonLine'></div>
        </div>
    )
}

export default ProductList;