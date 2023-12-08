'use client'

import { useState } from "react"

export default function List() {
    let products = ['Tomatoes', 'Pasta', 'Coconut']
    let [amount, setAmount] = useState([0, 0, 0])
    /*let array = [2, 3, 4]
    let b = array.map((a) => { // array 자료형 개수만큼 반복실행
        return 10
    })
    console.log(b)*/

    return (
        <div>
            <h4 className="title">상품목록</h4>
            {/*<span>{amount[0]}</span>
            <button onClick={()=>{
                let copyAmount = [...amount] // 완전히 독립적인 array 사본을 만들어 달라
                copyAmount[0]++
                setAmount(copyAmount)
            }}>+</button>

            <span>{amount[1]}</span>
            <button>+</button>
            <span>{amount[2]}</span>
        <button>+</button>*/}
            {
                products.map((product, i) => {
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img" />
                            <h4> {product} $40</h4>
                            <button onClick={() => {
                                let copy = [...amount]
                                copy[i]--
                                setAmount(copy)
                            }}>-</button>
                            <span> {amount[i]} </span>
                            <button onClick={() => {
                                let copy = [...amount]
                                copy[i]++
                                setAmount(copy)
                            }}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}