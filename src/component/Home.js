import '../css/home.css';
import React, { useState, useEffect } from "react";
import { Button, Center } from '@chakra-ui/react';
import plusIcon from '../asset/plus.png'
import removeIcon from '../asset/remove.png'


const Home = () => {
    useEffect(() => {
        document.title = "Homepage"
    }, []);

    if(JSON.parse(localStorage.getItem('listProduct'))==undefined){
        localStorage.setItem("listProduct", JSON.stringify([]));
    }

    let productData = [
        {
            "id": "001",
            "name": "Converse 70s",
            "img": "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/C/O/CON162053C-1.jpg",
            "price": 950000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "002",
            "name": "Masker KN95",
            "img": "https://3imed.co.id/wp-content/uploads/2020/12/KN95-kids.png",
            "price": 50000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "003",
            "name": "Mouse Gaming",
            "img": "https://www.blibli.com/friends-backend/wp-content/uploads/2021/12/howtogeekk.com_.jpg",
            "price": 150000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "004",
            "name": "Oli Shell",
            "img": "https://cf.shopee.co.id/file/4aac7295b4e2fb75bb347094f59e9970",
            "price": 95000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "005",
            "name": "Tumblr",
            "img": "https://lzd-img-global.slatic.net/g/p/8282b326b55c0475b6e77cd7b9e3a7af.jpg_720x720q80.jpg_.webp",
            "price": 100000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "006",
            "name": "Helm Retro",
            "img": "https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/qXlDfZrF89.jpg",
            "price": 1250000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "007",
            "name": "Topi Flat Cap",
            "img": "https://id-test-11.slatic.net/p/c0e3879ec2de7e3f6331f85bd354112e.jpg",
            "price": 250000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "008",
            "name": "Kipas Portable",
            "img": "https://cdn1.productnation.co/stg/sites/5/622b116954365.jpg",
            "price": 180000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },

        {
            "id": "009",
            "name": "Sambal Terasi",
            "img": "https://cdn.shopify.com/s/files/1/0268/3125/7678/products/7020C181-CE8A-4116-9A80-FC565A10E1C4_large.jpg?v=1622632374",
            "price": 50000,
            "qty": 0,
            "total": 0,
            "onCart": false
        },
    ]

    function addToCart(idx){
        let arrCart = JSON.parse(localStorage.getItem('listProduct'));
        productData[idx].onCart = true;
        productData[idx].qty += 1;
        productData[idx].total = productData[idx].qty * productData[idx].price

        if(arrCart.length==0){
            arrCart.push(productData[idx]);
        }
        else{
            let toPush = true;
            for(let cart of arrCart){
                if(cart.id==productData[idx].id){
                    cart.qty += 1;
                    cart.total = cart.qty * cart.price;
                    toPush = false;
                    break;
                }
            }

            if(toPush==true){
                arrCart.push(productData[idx]);
            }
        }
        localStorage.setItem("listProduct", JSON.stringify(arrCart));
        // localStorage.setItem("listProduct", JSON.stringify([]));

        window.location.reload(false);
    }

    function convertPriceFormat(price){
        const formatter = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
        });

        return formatter.format(price)
    }

    if(JSON.parse(localStorage.getItem('listProduct'))==undefined){
        localStorage.setItem("listProduct", JSON.stringify([]));
    }

    let arrCart = JSON.parse(localStorage.getItem('listProduct'));
    localStorage.setItem("totalItem", arrCart.length)



    return (
        <div className="Home">
            <div className="row">
                <div className="col-2 col-s-12"></div>

                <Center>
                    <div className='col-10 col-s-12 products'>
                        <Center>
                            <table className='table-home'>
                                    <tr>
                                        <td className='td-product1'><img className='product-img' src={productData[0].img}></img></td>
                                        <td className='td-product2'><img className='product-img' src={productData[1].img}></img></td>
                                        <td className='td-product3'><img className='product-img' src={productData[2].img}></img></td>
                                    </tr>

                                    <tr>
                                        <td className='td-product1 product-name'>{productData[0].name}</td>
                                        <td className='td-product2 product-name'>{productData[1].name}</td>
                                        <td className='td-product3 product-name'>{productData[2].name}</td>
                                    </tr>

                                    <tr>
                                        <td className='td-product1 product-price'>{convertPriceFormat(productData[0].price)}</td>
                                        <td className='td-product2 product-price'>{convertPriceFormat(productData[1].price)}</td>
                                        <td className='td-product3 product-price'>{convertPriceFormat(productData[2].price)}</td>
                                    </tr> 

                                    <tr>
                                        <td className='td-product1 pad'><button className='btn-add-to-cart' onClick={() => addToCart(0)}>Add to Cart</button></td>
                                        <td className='td-product2 pad'><button className='btn-add-to-cart' onClick={() => addToCart(1)}>Add to Cart</button></td>
                                        <td className='td-product3 pad'><button className='btn-add-to-cart' onClick={() => addToCart(2)}>Add to Cart</button></td>
                                    </tr> 





                                    <tr>
                                        <td className='td-product1'><img className='product-img' src={productData[3].img}></img></td>
                                        <td className='td-product2'><img className='product-img' src={productData[4].img}></img></td>
                                        <td className='td-product3'><img className='product-img' src={productData[5].img}></img></td>
                                    </tr>

                                    <tr>
                                        <td className='td-product1 product-name'>{productData[3].name}</td>
                                        <td className='td-product2 product-name'>{productData[4].name}</td>
                                        <td className='td-product3 product-name'>{productData[5].name}</td>
                                    </tr>

                                    <tr>
                                    <td className='td-product1 product-price'>{convertPriceFormat(productData[3].price)}</td>
                                        <td className='td-product2 product-price'>{convertPriceFormat(productData[4].price)}</td>
                                        <td className='td-product3 product-price'>{convertPriceFormat(productData[5].price)}</td>
                                    </tr> 

                                    <tr>
                                        <td className='td-product1 pad'><button className='btn-add-to-cart' onClick={() => addToCart(3)}>Add to Cart</button></td>
                                        <td className='td-product2 pad'><button className='btn-add-to-cart' onClick={() => addToCart(4)}>Add to Cart</button></td>
                                        <td className='td-product3 pad'><button className='btn-add-to-cart' onClick={() => addToCart(5)}>Add to Cart</button></td>
                                    </tr>





                                    <tr>
                                        <td className='td-product1'><img className='product-img' src={productData[6].img}></img></td>
                                        <td className='td-product2'><img className='product-img' src={productData[7].img}></img></td>
                                        <td className='td-product3'><img className='product-img' src={productData[8].img}></img></td>
                                    </tr>

                                    <tr>
                                        <td className='td-product1 product-name'>{productData[6].name}</td>
                                        <td className='td-product2 product-name'>{productData[7].name}</td>
                                        <td className='td-product3 product-name'>{productData[8].name}</td>
                                    </tr>

                                    <tr>
                                    <td className='td-product1 product-price'>{convertPriceFormat(productData[6].price)}</td>
                                        <td className='td-product2 product-price'>{convertPriceFormat(productData[7].price)}</td>
                                        <td className='td-product3 product-price'>{convertPriceFormat(productData[8].price)}</td>
                                    </tr> 

                                    <tr>
                                        <td className='td-product1 pad'><button className='btn-add-to-cart' onClick={() => addToCart(6)}>Add to Cart</button></td>
                                        <td className='td-product2 pad'><button className='btn-add-to-cart' onClick={() => addToCart(7)}>Add to Cart</button></td>
                                        <td className='td-product3 pad'><button className='btn-add-to-cart' onClick={() => addToCart(8)}>Add to Cart</button></td>
                                    </tr>
                            </table>       
                        </Center>
                    </div>
                </Center>

                <div className="col-2 col-s-12"></div>
            </div>
        </div>
    )
}


export default Home;