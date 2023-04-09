import { useState } from 'react';

const Filter = ({produses}) => {
    const [currentCategory, setCurrentCategory] = useState('all');

    const filteredProducts = produses.filter((product) => {
        return currentCategory === 'all' || product.category === currentCategory;
    });

    return(
        <div>
            <div>
                <button onClick={() => setCurrentCategory('all')}>All</button>
                <button onClick={() => setCurrentCategory('category1')}>Category 1</button>
                <button onClick={() => setCurrentCategory('category2')}>Category 2</button>
            </div>
            {filteredProducts.map((product) => (
                <div key={product.id}>
                    {product.attributes.price}$
                </div>
            ))}
        </div>
    )
}

export default Filter;
