import { reactive } from "vue";

const state = reactive({
  items: [],
  cart: [],
  lastNumberBuy: 0,
  popped: false
});

const methods = {
  handleAddToCart(item) {
    // Add Items to Cart /w Popped Animation
    state.popped = true;
    let payload = {
      strMeal: item.strMeal,
      idMeal: item.idMeal,
      strMealThumb: item.strMealThumb
    };
    if (state.lastNumberBuy === 0) {
      state.lastNumberBuy = 1;
    } else {
      state.lastNumberBuy++;
    }
    state.items.push({ ...payload, numberBuy: state.lastNumberBuy });

    // Convert to Cart Payload
    let emptyArray = [];
    let data = [];
    state.items.forEach(meal => {
      emptyArray.push(meal.strMeal);
    });
    const counts = {};
    emptyArray.forEach(function(x) {
      counts[x] = (counts[x] || 0) + 1;
    });

    const emptyObject = {};
    state.items.forEach(meal => {
      if (!Array.isArray(emptyObject[meal.strMeal])) {
        emptyObject[meal.strMeal] = [];
        emptyObject[meal.strMeal].push(meal.numberBuy);
      } else {
        emptyObject[meal.strMeal].push(meal.numberBuy);
      }
    });

    // Add Total and Number Buy
    for (const property in counts) {
      data.push({
        name: property,
        total: counts[property],
        numberBuy: emptyObject[property]
      });
    }

    // Inserting Image
    let newData = [];
    data.forEach(datum => {
      let obj = state.items.find(o => o.strMeal === datum.name);
      newData.push({
        name: datum.name,
        total: datum.total,
        numberBuy: datum.numberBuy,
        imagePath: obj.strMealThumb
      });
    });

    //Final Cart Data
    state.cart = newData;

    setInterval(() => {
      state.popped = false;
    }, 1200);
  }
};

export default { state, methods };
