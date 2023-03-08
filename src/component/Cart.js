import '../css/cart.css';
import React, { useState, useEffect } from "react";
import { Button, Center } from '@chakra-ui/react';
import plusIcon from '../asset/plus.png'
import removeIcon from '../asset/remove.png'


const Cart = () => {
    useEffect(() => {
        document.title = "Item on Cart";  
    }, []);

    if(JSON.parse(localStorage.getItem('listProduct'))==undefined){
        localStorage.setItem("listProduct", JSON.stringify([]));
    }

    let arrCart = JSON.parse(localStorage.getItem('listProduct'));

    let totalPrice = 0
    if(arrCart.length>0){
        for(let arr_item of arrCart){
            totalPrice += arr_item.total
        }
    }

    function convertPriceFormat(price){
        const formatter = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
        });

        return formatter.format(price)
    }

    function addQty(id_item){
        let edit_arr = JSON.parse(localStorage.getItem('listProduct'));

        for(let i=0; i<edit_arr.length; i++){
            if(edit_arr[i].id==id_item){
                edit_arr[i].qty += 1;
                edit_arr[i].total = edit_arr[i].price * edit_arr[i].qty
                break;
            }
        }

        localStorage.setItem("listProduct", JSON.stringify(edit_arr));
        window.location.reload(false);
    }

    function minQty(id_item){
        let edit_arr = JSON.parse(localStorage.getItem('listProduct'));

        for(let i=0; i<edit_arr.length; i++){
            if(edit_arr[i].id==id_item){
                edit_arr[i].qty -= 1;
                edit_arr[i].total = edit_arr[i].price * edit_arr[i].qty

                if(edit_arr[i].qty==0){
                    edit_arr.splice(i, 1)
                }
                break;
            }            
        }

        localStorage.setItem("listProduct", JSON.stringify(edit_arr));
        window.location.reload(false);
    }

    function deleteCart(){
        localStorage.setItem("listProduct", JSON.stringify([]));
        window.location.reload(false);
    }


    return (
        <div className="Cart">
            <div className="row">
                <div className="col-3 col-s-12"></div>

                <Center>
                    <div className="col-7 col-s-12 main-cart">
                        <h1 id='cart-tittle'><b>Items on Cart</b></h1>
                        
                        <div className='table-item'>
                            <table className='table-cart'>
                                
                                <tr>
                                    <th className='td-table-img'>Product</th>
                                    <th className='td-table-normal'></th>
                                    <th className='td-table-normal'></th>
                                    <th className='td-table-icon-plus'></th>
                                    <th className='td-table-qty'>Qty</th>
                                    <th className='td-table-icon-min'></th>
                                    <th className='td-table-normal'>Total</th>
                                </tr>

                                {arrCart.map(arr => (  
                                    <tr>
                                        <Center>
                                            <td className='td-table-img'><img className='cart-img' src={arr.img}></img></td>
                                        </Center>
                                        <td className='td-table-name'>{arr.name}</td>
                                        <td className='td-table-normal'>{convertPriceFormat(arr.price)}</td>
                                        <td className='td-table-icon-plus'><button className='btn-qty' onClick={() => addQty(arr.id)}>+</button></td>
                                        <td className='td-table-qty'>{arr.qty}</td>
                                        <td className='td-table-icon-min'><button className='btn-qty' onClick={() => minQty(arr.id)}>-</button></td>
                                        <td className='td-table-normal'>{convertPriceFormat(arr.total)}</td>
                                    </tr> 
                                ))}                                                               
                            </table>
                        </div>
                        <h1 id='total-price'><b>Total Price: {convertPriceFormat(totalPrice)}</b></h1>
                        <button className='btn-reset' onClick={deleteCart}>Delete All Items</button>
                    </div>
                </Center>

                <div className="col-3 col-s-12"></div>
            </div>
        </div>
    )
}


export default Cart;