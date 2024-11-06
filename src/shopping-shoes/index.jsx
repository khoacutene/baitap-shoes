import Modal from "./modal"
import data from "./data.json";
import { useState } from "react";
export default function ShoppingShoes() {
    
    const [state, setState] = useState({
        shoes: data,
    })

    const renderListShoes = () => {
        const {shoes} = state
        const newShoes = shoes.map((item) => {
            return <Modal key={item.id} data={item}/>
        })
        return newShoes
    }
  return (
    <div>
        <h1 className="bg-gray-600 text-5xl text-center py-5">Shopping Shoes</h1>
        <div className="grid grid-cols-4">
            {renderListShoes()}
        </div>
    </div>
  )
}
