<template>
  <div class="root">
    <div>
      <div class="d-flex center-v" style="margin-bottom: 1rem;">
        <span style="font-family: 'ProductSans-Bold'; font-size: 60px">Japanese Food</span>
      </div>
      <div
        v-if="loadingJapanese === false"
        class="no-gutters"
        style="display: flex; flex-wrap: wrap; margin-bottom: 3rem;"
      >
        <div
          class="col-md-3"
          style="margin-bottom: 2rem;"
          v-for="meal in japanese"
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
              <span
                style="font-weight: bold;"
              >{{meal.strMeal.length > 27 ? `${meal.strMeal.slice(0, 27)}...` : meal.strMeal}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex center-v" style="height: 100%;">
        <Loading/>
      </div>
    </div>
    <div>
      <div class="d-flex center-v" style="margin-bottom: 1rem;">
        <span style="font-family: 'ProductSans-Bold'; font-size: 60px">Italian Food</span>
      </div>
      <div
        v-if="loadingItalian === false"
        class="no-gutters"
        style="display: flex; flex-wrap: wrap; margin-bottom: 3rem;"
      >
        <div
          class="col-md-3"
          style="margin-bottom: 2rem;"
          v-for="meal in italian"
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
              <span
                style="font-weight: bold;"
              >{{meal.strMeal.length > 27 ? `${meal.strMeal.slice(0, 27)}...` : meal.strMeal}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex center-v" style="height: 100%;">
        <Loading/>
      </div>
    </div>
    <div>
      <div class="d-flex center-v" style="margin-bottom: 1rem;">
        <span style="font-family: 'ProductSans-Bold'; font-size: 60px">Dutch Food</span>
      </div>
      <div
        v-if="loadingDutch === false"
        class="no-gutters"
        style="display: flex; flex-wrap: wrap; margin-bottom: 3rem;"
      >
        <div
          class="col-md-3"
          style="margin-bottom: 2rem;"
          v-for="meal in dutch"
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
              <span
                style="font-weight: bold;"
              >{{meal.strMeal.length > 27 ? `${meal.strMeal.slice(0, 27)}...` : meal.strMeal}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex center-v" style="height: 100%;">
        <Loading/>
      </div>
    </div>
    <div>
      <div class="d-flex center-v" style="margin-bottom: 1rem;">
        <span style="font-family: 'ProductSans-Bold'; font-size: 60px">American Food</span>
      </div>
      <div
        v-if="loadingAmerican === false"
        class="no-gutters"
        style="display: flex; flex-wrap: wrap; margin-bottom: 3rem;"
      >
        <div
          class="col-md-3"
          style="margin-bottom: 2rem;"
          v-for="meal in american"
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
              <span
                style="font-weight: bold;"
              >{{meal.strMeal.length > 27 ? `${meal.strMeal.slice(0, 27)}...` : meal.strMeal}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="d-flex center-v" style="height: 100%;">
        <Loading/>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import axios from "axios";
import Loading from "@/components/Loading";

export default {
  data() {
    return {
      loadingJapanese: true,
      loadingItalian: true,
      loadingDutch: true,
      loadingAmerican: true,
      japanese: [],
      italian: [],
      dutch: [],
      american: []
    };
  },
  setup() {
    const store = inject("store");
    return {
      store
    };
  },
  created() {
    this.getMeals("Japanese", "japanese");
    this.getMeals("Italian", "italian");
    this.getMeals("Dutch", "dutch");
    this.getMeals("American", "american");
  },
  methods: {
    getMeals: function(country, type) {
      this[`loading${country}`] = true;
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
        .then(response => {
          this[type] = response.data.meals;
          console.log(response.data);
          this[`loading${country}`] = false;
        })
        .catch(err => {
          // handle error
          console.log(err);
        });
    }
  },
  components: {
    Loading
  }
};
</script>
