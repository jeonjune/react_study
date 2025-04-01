import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// 컴포넌트의 LifeCycle
// 페이지에 장착 : mount
// 가끔 업데이트 : update
// 필요 없으면 제거 : unmount

const Detail = ({shoes}) => {
    
    let [count, setCount] = useState(0);
    let [visible, setVisible] = useState(true);

    // useEffect 쓰는 이유 : html 렌더링이 다 되고나서 동작
    // 어려운 연산/ 서버에서 데이터 가져오는 작업/ 타이머 장착하는 거거
    useEffect(()=>{
        console.log('안녕');
        setTimeout(()=>{setVisible(false)},2000);
    },[])

    const { id } = useParams();
    console.log(id);
    const numCheck = isNaN(id);
    console.log(numCheck)

    const shoeDetail = shoes.find((shoe)=>{
        return shoe.id == id
    })
    
    return (
        numCheck ?
            (<div>존재하지 않는 상품입니다.</div>)
            :
            (
                <div className="container">
                {visible ? (
                <div className="alert alert-warning">
                    2초 이내 구매시 할인
                </div>) : (null)}
                {count}
                <button onClick={()=>{setCount(count+1)}}>버튼</button>
                    <div className="row">
                        <div className="col-md-6">
                            <img src={"https://codingapple1.github.io/shop/shoes"+(shoeDetail.id+1)+".jpg"} width="100%" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="pt-5">{shoeDetail.title}</h4>
                            <p>{shoeDetail.content}</p>
                            <p>{shoeDetail.price}원</p>
                            <button className="btn btn-danger">주문하기</button>
                        </div>
                    </div>
                </div>
            )

    )
}

export default Detail;