import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStoreFuncs";
import { BsFillCartDashFill } from 'react-icons/bs';
import { ProductsArea } from "../css/style";
import { Header } from "../Components/Header";


export const Cart = () => {

    const [data, setData] = useState(getItem('carrinhoyt') || [])

    const removeItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoyt', arrFilter)
    }
    return (
        <div>
            <Header />
            <ProductsArea>
                {
                    data.map((e) => (
                        <div key={e.id}>
                        <h4>{e.title}</h4>
                        <img src={e.thumbnail} alt={e.title} />
                        <h4>{e.price}</h4>
                        <button
                        onClick={ () => removeItem(e)}
                        >
                            <BsFillCartDashFill />
                        </button>
                    </div>
                    ))
                }
            </ProductsArea>
        </div>
    )
}