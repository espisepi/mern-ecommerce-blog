import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { listProducts } from '../actions/productActions';

function HomeScreen(props) {
    const productList = useSelector((state) => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts());
        return () => {};
    }, []);
    return (
        <>
            <h1>HOME SCREEN</h1>
            {loading ? (<div>Loading...</div>) : 
             error ? (<div>{error}</div>) :
            (<div>
                {products.map((product) => (
                    <h1 key={product._id}>{product.name}</h1>
                ))}
            </div>)
             }
        </>
    );
}

export default HomeScreen;