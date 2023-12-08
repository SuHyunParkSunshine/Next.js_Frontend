export default function Cart() {

    let cart = ['Tomatoes', 'Pasta'] //아무튼 DB 데이터임

    return (
        <div>
            <h4 className="title">Cart</h4>          
            <div className="cart-item">
                <p>상품명</p>
                <p>$40</p>
                <p>1개</p>
            </div>
            <CartItem items={cart[0]} />
            <CartItem items={cart[1]}/>
            <Banner content="롯데카드" />  
            <Banner content="현대카드" />
            <Button colour="red"/>
            <Button colour="blue"/>            
        </div>
    )
}

function Button(probs) {
    return <button style={{background : probs.colour}}>버튼</button>
}

function Banner(probs) {
    return <h5>{probs.content} 결제 행사 중</h5>
}

function CartItem(probs) {
    return (
        <div className="cart-item">
            <p>{probs.items}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}