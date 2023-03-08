import '../css/navigation.css';
import { Link } from 'react-router-dom'
import { HashLink as HSLink } from 'react-router-hash-link';
import { useEffect } from 'react';
import homeIcon from '../asset/home.png'
import cartIcon from '../asset/cart.png'
import { Center } from '@chakra-ui/react';

function Navigation(){
    if(JSON.parse(localStorage.getItem('listProduct'))==undefined){
        localStorage.setItem("listProduct", JSON.stringify([]));
    }

    function convertPriceFormat(price){
        const formatter = new Intl.NumberFormat('id', {
            style: 'currency',
            currency: 'IDR',
        });

        return formatter.format(price)
    }

    let arrCart = JSON.parse(localStorage.getItem('listProduct'));
    localStorage.setItem("totalItem", arrCart.length)

    let total = JSON.parse(localStorage.getItem('totalItem'));

    return (
        <div className="header">
            <a className="logo">React Marketplace</a>
            <div className="header-right">
                <HSLink to='/marketplace-react/'>
                    <button type="button" className="icon-button">
                        <span className="material-icons"><img className='notif' src={homeIcon} alt="cart"></img></span>
                    </button>
                </HSLink>
                <HSLink className='link-hover' to='/marketplace-react/cart'>
                    <button type="button" className="icon-button">
                        <span className="material-icons"><img className='notif' src={cartIcon} alt="cart"></img></span>
                        <span className="icon-button__badge">{total}</span>
                    </button>
                    <span className='text-hover'>
                        <div className='table-cart'>
                            <h1 className='on-cart'>On Cart ({total})</h1>
                            {arrCart.map(arr => (  
                                    <tr>
                                        <Center>
                                            <td className='td-img'><img className='data-img' src={arr.img}></img></td>
                                        </Center>
                                        <td className='td-name'>{arr.name}</td>
                                        <td className='td-price'>{convertPriceFormat(arr.price)}</td>
                                        <td className='td-qty'>x{arr.qty}</td>
                                    </tr> 
                            ))}
                        </div>
                    </span>
                </HSLink>
            </div>
        </div>
    )
}

export default Navigation;