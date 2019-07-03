<template>
  <form @submit.prevent='submit'>
    <div class='box'>
      <div>USD</div>
      <input v-model='value' type='number' v-input-mask>
    </div>
    <div class='box'>
      <div>EUR</div>
      <div class='result'>{{getResult}}</div>
    </div>
    <button>Конвертировать</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrencyConverter_form',

  data() {
    return {
      value: '',
      USD: null,
      EUR: null,
      getResult: null
    }
  },

  computed:{
    k:function(){
      return  this.USD / this.EUR
    },
  },

  methods: {
    submit() {
      axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
      .then(res => {
        this.USD = parseFloat(res.data[0].buy)
        this.EUR = parseFloat(res.data[1].buy);
        this.getResult = this.value * this.k
        console.log(res);
      }).catch(error => console.log(error));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  position: relative;
  left: 32%;
}
.box {
  width: 150px;
  height: 20px;
}
.result {
  border: 1px solid #C0C0C0;
  height: 17px;
  margin-top: 2px;
}
button {
  margin: 24px 0 0 10px;
}
</style>
