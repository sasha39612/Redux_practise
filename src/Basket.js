import { useSelector } from 'react-redux';
import store, { selectors } from './redux/store';

// const useSelector = (selector) => {
//  const [value, setValue] = useState(null);

//  store.subscribe(() => {
//   const newValue = selector(store.getState());
//   setValue(newValue)
//  })
// }

export const Basket = () => {
 // const items = useSelector(state => state.basket.items);
 const items = useSelector(selectors.getBasketItems);

 return (
  <div className="Basket">
    <h2>Basket</h2>

    <ul>
      {items.map(item => (
        <li key={item.good.id}>
          {item.good.name} ({item.quantity})
        </li>
      ))}
    </ul>
  </div>
)
};
