import { Button } from 'react-bootstrap';
import MyCard from '../component/Card.js';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';

const Main = ({shoes}) => {

    const [moreShoes,setMoreShoes] = useState([]);

    return (
        <>
            <div className='main-bg'></div>
            <div className='container'>
                <div className='row'>
                    {shoes.map((shoe, idx) => {
                        return (
                            <MyCard>
                                <img src={'https://codingapple1.github.io/shop/shoes' + (idx + 1) + '.jpg'} width="80%"/>
                                <Link to={"/detail/"+idx} className='link-custom'>
                                <h4>{shoe.title}</h4>
                                </Link>
                                <p>{shoe.price} 원</p>
                            </MyCard>
                        )
                    }
                    )}
                    {moreShoes.map((moreShoe, idx) => {
                        return(
                            <MyCard>
                                <img src={'https://codingapple1.github.io/shop/shoes' + (idx + 3) + '.jpg'} width="80%"/>
                                <Link to={"/detail/"+(idx+3)} className='link-custom'>
                                <h4>{moreShoe.title}</h4>
                                </Link>
                                <p>{moreShoe.price} 원</p>
                            </MyCard>
                        )
                    }
                    )}
                </div>
            </div>

            <Button variant="dark" onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                    setMoreShoes(result.data);
                })
                .catch(()=>{
                    console.log('실패함')
                })
            }}>상품 불러오기</Button>

        </>
    )
}


export default Main;