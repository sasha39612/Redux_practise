const ADD = 'basket/ADD';

export const actions = {
 addGood: (good) => ({ type: ADD, good }),
};

export const selectors = {
 getItems: basket => basket.items,
}

const initialBasket = {
 items: [],
};

const basketReducer = (basket = initialBasket, action) => {
 switch (action.type) {
  case ADD:
   return {
    ...basket,
    items: [
     ...basket.items,
     {
      good: action.good,
      quantity: 1,
     }
    ]
   }

  default:
   return basket;
 }
};

export default basketReducer;
