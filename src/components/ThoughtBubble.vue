<template>
  <div class="thought__bubble">
    <div class="thought__bubble--text">
      <p>Quel temps, il fait à</p>
      <div id="cities-datalist" :class="{ active: isActive }">
        <input
          v-model="searchCity"
          v-on:keyup="getCities($event)"
          id="cities-datalist-input"
          type="text"
          placeholder="Entrez le nom d'une ville"
        />
        <ul id="cities-datalist-ul">
          <li
            :key="weather.key"
            v-for="weather in filteredCities"
            :id="weather.value"
            @click="selectCity($event)"
          >
            {{ weather.text }}
          </li>
        </ul>
      </div>
      <p>en ce moment ?</p>
    </div>
    <div class="thought__bubble--tail"></div>
  </div>
</template>

<script>
export default {
  name: "ThoughtBubble",
  data() {
    return {
      isActive: undefined,
      searchCity: "",
      filteredCities: [],
      weatherList: [
        { value: "jour_ciel-clair", text: "Jour Ciel Clair" },
        { value: "jour_nuageux", text: "Jour Nuageux" },
        { value: "jour_pluie", text: "Jour Pluie" },
        { value: "jour_orage", text: "Jour Orage" },
        { value: "jour_neige", text: "Jour Neige" },
        { value: "jour_brouillard", text: "Jour Brouillard" },
        { value: "jour_fumee", text: "Jour Fumée" },
        { value: "jour_sable", text: "Jour Sable" },
        { value: "jour_volcan", text: "Jour Volcan" },
        { value: "jour_tornade", text: "Jour Tornade" },
        { value: "nuit_ciel-clair", text: "Nuit Ciel Clair" },
        { value: "nuit_nuageux", text: "Nuit Nuageux" },
        { value: "nuit_pluie", text: "Nuit Pluie" },
        { value: "nuit_orage", text: "Nuit Orage" },
        { value: "nuit_neige", text: "Nuit Neige" },
        { value: "nuit_brouillard", text: "Nuit Brouillard" },
        { value: "nuit_fumee", text: "Nuit Fumée" },
        { value: "nuit_sable", text: "Nuit Sable" },
        { value: "nuit_tornade", text: "Nuit Tornade" },
        { value: "nuit_volcan", text: "Nuit Volcan" },
      ],
    };
  },
  methods: {
    getCities(event) {
      if (event.key == "Shift" || event.keyCode == 16) {
        return;
      }
      this.filteredCities = [];
      console.log(this.searchCity);
      this.filteredCities = this.weatherList.filter((x) =>
        x.text.toLowerCase().startsWith(this.searchCity.toLowerCase())
      );
      console.log(this.filteredCities.length);
      console.log(this.searchCity.length);
      if (this.searchCity.length > 0) {
        this.isActive = true
      }
      else if (this.searchCity.length < 1) {
        this.isActive = undefined;
      }
    },
    selectCity(event) {
      console.log(event.target.textContent);
      this.searchCity = event.target.textContent.replace(/\s+/g, " ").trim(),
      this.isActive = undefined;
    }
  },
};
</script>

<style lang="scss" scoped>
.thought__bubble {
  z-index: 1;
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: $thought-bubble-width;
  height: $thought-bubble-height;
  border: $thought-bubble-height/30 solid;
  border-radius: 50%;
  background-color: white;

  &--tail {
    position: absolute;
    bottom: 0;
    right: 0;
    width: $thought-bubble-width/10;
    height: $thought-bubble-height/10;
    border: $thought-bubble-height/60 solid;
    border-radius: 50%;
    background-color: white;

    &::before {
      content: "";
      position: absolute;
      bottom: -$thought-bubble-height/15;
      right: -$thought-bubble-width/10;
      width: $thought-bubble-width/15;
      height: $thought-bubble-height/15;
      border: $thought-bubble-height/60 solid;
      border-radius: 50%;
      background-color: white;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -$thought-bubble-height/15 * 2;
      right: -$thought-bubble-width/11 * 2;
      width: $thought-bubble-width/20;
      height: $thought-bubble-height/20;
      border: $thought-bubble-height/60 solid;
      border-radius: 50%;
      background-color: white;
    }
  }

  &--text {
    position: absolute;
    top: 15%;
    left: 20%;
    width: 60%;
    height: 70%;
    font-size: $thought-bubble-font-size;

    & #cities-datalist {
      margin: 0.25vw 0 0 0;
      width: 100%;

      &.active #cities-datalist-ul {
        display: block;
      }

      &-input {
        margin: 0.25vw 0 0 0;
        width: 100%;
        font-size: $thought-bubble-font-size;
        border-radius: $thought-bubble-font-size/5;
      }

      &-ul {
        display: none;
        position: absolute;
        margin: 0;
        padding: 0;
        width: 100%;
        max-height: 50%;
        font-size: $thought-bubble-font-size;
        list-style: none;
        background: #fff;
        overflow: hidden;
        overflow-y: scroll;

        & li {
          display: block;
          text-align: left;
          color: #999;
          cursor: pointer;
        }
      }

      & > p {
        margin: 0.5vw 0 0 0;
        font-size: $thought-bubble-font-size;
      }
    }
  }
}
</style>