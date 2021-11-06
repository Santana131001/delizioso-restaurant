import { reactive } from "vue";

const state = reactive({
  items: [],
  cart: [],
  popped: false
});

const methods = {
  handleAddToCart(item) {
    // Add Items to Cart /w Popped Animation
    state.popped = true;
    let payload = {
      strMeal: item.strMeal,
      idMeal: item.idMeal,
      strMealThumb: item.strMealThumb,
      numberBuy: state.items.length + 1
    };
    state.items.push(payload);
    setInterval(() => {
      state.popped = false;
    }, 1200);
    console.log(state.items);
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

    for (const property in counts) {
      data.push({ name: property, total: counts[property] });
    }

    // Inserting Image
    let newData = [];
    data.forEach(datum => {
      let obj = state.items.find(o => o.strMeal === datum.name);
      newData.push({
        name: datum.name,
        total: datum.total,
        imagePath: obj.strMealThumb
      });
    });

    //Final Cart Data
    state.cart = newData;
    console.log(state.cart);
  }
};

export default { state, methods };
