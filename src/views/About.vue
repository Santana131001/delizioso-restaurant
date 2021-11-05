<template>
  <div class="root">
    <div class="slider-container d-flex center-v">
      <img :src="require('@/assets/burger-banner.jpg')" class="slider-image">
      <div class="dots-container">
        <ul class="dots">
          <li
            v-for="(dot, index) in slides"
            :key="index"
            :class="{ active: index+1 === active ? true : false }"
            @click="handleSetActive(index+1)"
          />
        </ul>
      </div>
    </div>
    <div class="row" style="margin-top: 5rem;">
      <div class="col-lg-3" style="poisiton-relative">
        <div class="card-container" style="margin-bottom: 2rem; position: sticky; top: 100px;">
          <div class="card-header">
            <span style="font-weight: bold;">Category</span>
          </div>
          <div class="card-body" style="padding-top: 0;">
            <div
              class="d-flex"
              style="margin-bottom: 1rem;"
              v-for="(item, index) in checkOptions"
              :key="index"
            >
              <input
                type="checkbox"
                :id="index"
                :value="item.value"
                v-model="myCheckBoxModel"
                @change="handleChecked($event.target.value)"
              >
              <label :for="index">{{item.label}}</label>
            </div>
            <br>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="no-gutters" style="display: flex; flex-wrap: wrap;">
          <div
            class="col-md-4"
            style="margin-bottom: 2rem;"
            v-for="meal in meals"
            :key="meal.idMeal"
          >
            <div class="card-container" style="margin: 0 0.5rem 0 0.5rem; height: 100%;">
              <div class="card-header" style="text-align: center; padding: 0;">
                <img
                  :src="meal.strMealThumb"
                  style="width: 100%; border-top-left-radius: 5px;  border-top-right-radius: 5px;"
                >
              </div>
              <div class="card-body" style="padding-top: 0.5rem;">
                <span style="font-weight: bold;">{{meal.strMeal}}</span>
                <div style="margin-top: 1rem;">
                  <button class="button bg-primary" style="width: 100%;">
                    <span class="text-white" style="font-family: 'ProductSans-Medium';">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      checkOptions: [
        {
          label: "Option 1",
          value: "1"
        },
        {
          label: "Option 2",
          value: "2"
        },
        {
          label: "Option 3",
          value: "3"
        },
        {
          label: "Option 4",
          value: "4"
        }
      ],
      myCheckBoxModel: [],
      meals: [],
      imagePath: "",
      slides: 5,
      active: 1
    };
  },
  created: function() {
    this.getMeals();
  },
  mounted: function() {
    setInterval(() => {
      if (this.active === this.slides) {
        this.active = 1;
      } else {
        this.active++;
      }
    }, 3000);
  },
  methods: {
    getMeals: function() {
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
        .then(response => {
          this.meals = response.data.meals;
          console.log(response.data.meals);
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },
    handleSetActive(index) {
      this.active = index;
      this.handleChangeImage(index);
    },
    handleChangeImage(index) {
      if (index === 1) {
      } else if (index === 2) {
        this.imagePath = "";
      }
      console.log(this.imagePath);
    },
    handleChecked(item) {
      console.log(item);
    }
  }
};
</script>
