import MyCard from '../component/Card.js';
import { Link } from 'react-router-dom';

const Main = ({shoes}) => {

    return (
        <>
            <div className='main-bg'></div>
            <div className='container'>
                <div className='row'>
                    {shoes.map((shoe, idx) => {
                        return (
                            <MyCard>
                                <img src={'https://codingapple1.github.io/shop/shoes' + (idx + 1) + '.jpg'} width="80%"/>
                                <Link to={"/detail/"+idx}>
                                <h4 className='link-custom'>{shoe.title}</h4>
                                </Link>
                                <p>{shoe.price} 원</p>
                            </MyCard>
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}


export default Main;