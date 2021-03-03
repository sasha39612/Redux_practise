import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getGoods } from './Api';
import { actions } from './redux/basket';

export const GoodList = () => {
 const [goods, setGoods] = useState([]);

 const dispatch = useDispatch();

 useEffect(() => {
  getGoods().then(setGoods);
 }, [])

 return (
  <div>
   <h2>Goods</h2>
    <ul>
     {goods.map(good => (
      <li key={good.id}>
       {good.name}
       <button onClick={() => {
         dispatch(actions.addGood(good));
        }}
       >
        ADD
       </button>
    </li>
   ))}
  </ul>
  </div>
 )
}
