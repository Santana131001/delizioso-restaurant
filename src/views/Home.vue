<template>
  <div class="root">
    <div class="slider-container d-flex center-v">
      <img :src="imagePath" class="slider-image">
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
          <div v-if="loading.category === false" class="card-body" style="padding-top: 0;">
            <div
              class="d-flex"
              style="margin-bottom: 1rem;"
              v-for="(datum, index) in category"
              :key="index"
            >
              <input
                type="radio"
                :id="index"
                :value="datum.strCategory"
                v-model="radioButtonModel"
                v-on:change="handleChangeRadio(datum.strCategory)"
              >
              <label :for="index">{{datum.strCategory}}</label>
            </div>
          </div>
          <div v-else class="card-body d-flex center-v" style="padding-top: 0;">
            <Loading/>
          </div>
        </div>
      </div>
      <div class="col">
        <div
          v-if="loading.meals === false"
          class="no-gutters"
          style="display: flex; flex-wrap: wrap;"
        >
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
                  <button class="button bg-primary" style="width: 100%;" type="button">
                    <span class="text-white" style="font-family: 'ProductSans-Medium';">Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="d-flex center-v" style="height: 100%;">
          <Loading/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Loading from "@/components/Loading";

export default {
  data() {
    return {
      radioButtonModel: [],
      meals: [],
      category: [],
      imagePath: require("@/assets/images/indian-banner.jpg"),
      slides: 6,
      active: 1,
      loading: {
        meals: true,
        category: true
      }
    };
  },
  components: {
    Loading
  },
  created: function() {
    this.getMeals();
    this.getCategory();
  },
  mounted: function() {
    setInterval(() => {
      if (this.active === this.slides) {
        if (this.active % 2 === 0) {
          this.imagePath = require("@/assets/images/burger-banner.jpg");
        } else {
          this.imagePath = require("@/assets/images/indian-banner.jpg");
        }
        this.active = 1;
      } else {
        if (this.active % 2 === 0) {
          this.imagePath = require("@/assets/images/burger-banner.jpg");
        } else {
          this.imagePath = require("@/assets/images/indian-banner.jpg");
        }
        this.active++;
      }
    }, 4500);
  },
  methods: {
    getMeals: function() {
      this.loading.meals = true;
      axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
        .then(response => {
          this.meals = response.data.meals;
          console.log(response.data.meals);
          this.loading.meals = false;
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    },
    getCategory: function() {
      this.loading.category = true;
      axios
        .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        .then(response => {
          this.category = response.data.meals;
          console.log("asu", response.data.meals);
          this.loading.category = false;
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
    handleChangeRadio(value) {
      console.log(value);
    }
  }
};
</script>
