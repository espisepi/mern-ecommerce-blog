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
            (<div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                {products.map((product) => (
                    <>
                    <div>
                        <div className="uk-card uk-card-default uk-card-body">{product.name}</div>
                    </div>
                    </>
                ))}
            </div>)
             }
        </>
    );
}

export default HomeScreen;