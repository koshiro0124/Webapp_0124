<template>
  <div class="about">
    <select v-model="selectValue" @change="showWeather">
      <option disabled value>都市を選択してください</option>
      <option value="Sapporo">札幌</option>
      <option value="Tokyo">東京</option>
      <option value="Osaka">大阪</option>
      <option value="Okinawa">沖縄</option>
    </select>
    <div class="grid">
      <div class="day_1">
        <p class="weather_city">時間:{{ time1 }}</p>
        <p class="weather_city">気温:{{ temp1 }}℃</p>
        <p class="img" v-if="condition.main1 == 'Rain'">
          <img src="../assets/rain.png" />雨
        </p>
        <p class="img" v-else-if="condition.main1 == 'Clouds'">
          <img src="../assets/clouds.png" />曇り
        </p>
        <p class="img" v-else-if="condition.main1 == 'Clear'">
          <img src="../assets/clear.png" />晴れ
        </p>
        <p class="img" v-else-if="condition.main1 == 'Snow'">
          <img src="../assets/snow.png" />雪
        </p>
        <p v-else>それ以外</p>
      </div>
      <div class="day_2">
        <p class="weather_city">時間:{{ time2 }}</p>
        <p class="weather_city">気温:{{ temp2 }}℃</p>
        <p class="img" v-if="condition.main2 == 'Rain'">
          <img src="../assets/rain.png" />雨
        </p>
        <p class="img" v-else-if="condition.main2 == 'Clouds'">
          <img src="../assets/clouds.png" />曇り
        </p>
        <p class="img" v-else-if="condition.main2 == 'Clear'">
          <img src="../assets/clear.png" />晴れ
        </p>
        <p class="img" v-else-if="condition.main2 == 'Snow'">
          <img src="../assets/snow.png" />雪
        </p>
        <p v-else>それ以外</p>
      </div>
      <div class="day_3">
        <p class="weather_city">時間:{{ time3 }}</p>
        <p class="weather_city">気温:{{ temp3 }}℃</p>
        <p class="img" v-if="condition.main3 == 'Rain'">
          <img src="../assets/rain.png" />雨
        </p>
        <p class="img" v-else-if="condition.main3 == 'Clouds'">
          <img src="../assets/clouds.png" />曇り
        </p>
        <p class="img" v-else-if="condition.main3 == 'Clear'">
          <img src="../assets/clear.png" />晴れ
        </p>
        <p class="img" v-else-if="condition.main3 == 'Snow'">
          <img src="../assets/snow.png" />雪
        </p>
        <p v-else>それ以外</p>
      </div>
      <div class="day_5">
        <p class="weather_city">時間:{{ time4 }}</p>
        <p class="weather_city">気温:{{ temp4 }}℃</p>
        <p class="img" v-if="condition.main4 == 'Rain'">
          <img src="../assets/rain.png" />雨
        </p>
        <p class="img" v-else-if="condition.main4 == 'Clouds'">
          <img src="../assets/clouds.png" />曇り
        </p>
        <p class="img" v-else-if="condition.main4 == 'Clear'">
          <img src="../assets/clear.png" />晴れ
        </p>
        <p class="img" v-else-if="condition.main4 == 'Snow'">
          <img src="../assets/snow.png" />雪
        </p>
        <p v-else>それ以外</p>
      </div>
      <div class="day_5">
        <p class="weather_city">時間:{{ time5 }}</p>
        <p class="weather_city">気温:{{ temp5 }}℃</p>
        <p class="img" v-if="condition.main5 == 'Rain'">
          <img src="../assets/rain.png" />雨
        </p>
        <p class="img" v-else-if="condition.main5 == 'Clouds'">
          <img src="../assets/clouds.png" />曇り
        </p>
        <p class="img" v-else-if="condition.main5 == 'Clear'">
          <img src="../assets/clear.png" />晴れ
        </p>
        <p class="img" v-else-if="condition.main5 == 'Snow'">
          <img src="../assets/snow.png" />雪
        </p>
        <p v-else>それ以外</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectValue: "",
      time1: "",
      time2: "",
      time3: "",
      time4: "",
      time5: "",
      temp1: "",
      temp2: "",
      temp3: "",
      temp4: "",
      temp5: "",
      condition: {
        main: ""
      }
    };
  },
  methods: {
    showWeather() {
      console.log(this.selectValue);
      let apiURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        this.selectValue +
        ",jp&units=metric&lang=ja&APPID=b16de4e931c90aa53e29308741fc32c0";
      this.axios
        .get(apiURL)
        .then(
          function(response) {
            this.time1 = response.data.list[1].dt_txt;
            this.time2 = response.data.list[9].dt_txt;
            this.time3 = response.data.list[17].dt_txt;
            this.time4 = response.data.list[25].dt_txt;
            this.time5 = response.data.list[33].dt_txt;
            this.temp1 = response.data.list[1].main.temp;
            this.temp2 = response.data.list[9].main.temp;
            this.temp3 = response.data.list[17].main.temp;
            this.temp4 = response.data.list[25].main.temp;
            this.temp5 = response.data.list[33].main.temp;
            this.condition.main1 = response.data.list[1].weather[0].main;
            this.condition.main2 = response.data.list[9].weather[0].main;
            this.condition.main3 = response.data.list[17].weather[0].main;
            this.condition.main4 = response.data.list[25].weather[0].main;
            this.condition.main5 = response.data.list[33].weather[0].main;
            console.log(this.condition.main);
            console.log(response);
          }.bind(this)
        )
        .catch(function(error) {
          console.log("えらー" + error);
        });
    }
  }
};
</script>
<style>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin: 0 auto;
  margin-top: 70px;
  width: 95%;
}
.img img {
  width: 100px;
  height: 100px;
}
</style>