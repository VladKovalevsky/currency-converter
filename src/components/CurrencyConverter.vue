<template>
  <div class='container'>
    <div class='box'>
      <div>USD</div>
      <input v-model='value' type='number' v-input-mask>
    </div>
    <div class='box'>
      <div>EUR</div>
      <div class='result'>{{getResult}}</div>
    </div>
    <button @click='submit'>Конвертировать</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CurrencyConverter',

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
      this.getResult = this.value * this.k
      this.getResult = this.getResult.toFixed(2)
    }
  },

  mounted() {
    axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
    .then(res => {
      this.USD = parseFloat(res.data[0].buy)
      this.EUR = parseFloat(res.data[1].buy)
    }).catch(error => console.log(error))
  },
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
