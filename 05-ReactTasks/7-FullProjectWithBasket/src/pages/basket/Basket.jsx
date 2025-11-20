import React from "react";
import "./basket.css";
import "../../components/productCard/style.css";
import { MdOutlineDeleteOutline } from "react-icons/md";


const Basket = ({ basket, setBasket }) => {
  console.log(basket);

  const handleRemove = (arg) => {
    const arr = [...basket];
    const index = arr.findIndex(i => i.id == arg.id);

    if (arr[index].count > 1) {
      arr[index].count -= 1;
    }else{
      arr.splice(index,1)
    }

    setBasket(arr)
  }

  const handleIncrease = (arg) => {
    const arr = [...basket];
    const index = arr.findIndex(i => i.id == arg.id);

    arr[index].count += 1

    setBasket(arr)
  }

  const deleteItem = (arg) => {
    const arr = [...basket]
    const index = arr.findIndex(i => i.id == arg.id)

    arr.splice(index,1)

    setBasket(arr)
  }



  return (
    <>
      {basket.length > 0 ? (
        <div>
          {basket?.map((item) => {
            return (
              <div className="basket">
                <div className="image">
                  <img src={item.image} alt="" />
                </div>

                <div>
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="count">
                  <button className="plusMinus" onClick={() => handleIncrease(item)}>+</button>
                  <div className="count">
                    <h3>Count: </h3>
                    <h3>{item.count}</h3>
                  </div>
                  <button className="plusMinus" onClick={() => handleRemove(item)}>-</button>
                </div>
                <MdOutlineDeleteOutline size={20} className="delete" onClick={() => deleteItem(item)} />
              </div>
            );
          })}{" "}
          <button className="btn" onClick={() => setBasket([])}>
            Basketi temizle
          </button>
        </div>
      ) : (
        <p>Basket bosdur</p>
      )}
    </>
  );
};

export default Basket;
