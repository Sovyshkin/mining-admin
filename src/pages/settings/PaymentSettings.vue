<script>
export default {
  name: "PaymentSettings",
  components: {},
  data() {
    return {
      id: "1",
      bank: "",
      btc: "",
      usdt: "",
    };
  },
  methods: {},
};
</script>
<template>
  <section class="wrapper">
    <h2>Готовый бизнес</h2>
    <div class="card">
      <div class="group">
        <label for="bank" class="group-value"
          >Данные оплаты (Банковская карта)</label
        >
        <input
          type="text"
          id="bank"
          name="bank"
          v-model="bank"
          class="group-item"
          placeholder="0000 0000 0000 0000"
        />
      </div>
      <div class="group">
        <label for="btc" class="group-value">Данные оплаты (BTC)</label>
        <input
          type="text"
          id="btc"
          name="btc"
          v-model="btc"
          class="group-item"
          placeholder="656bc1q00pasdfsdfjgpgntduq4yshm6quhqgkxh"
        />
      </div>
      <div class="group">
        <label for="usdt" class="group-value">Данные оплаты (USDT)</label>
        <input
          type="text"
          id="usdt"
          name="usdt"
          v-model="usdt"
          class="group-item"
          placeholder="656bc1q00pasdfsdfjgpgntduq4yshm6quhqgkxh"
        />
      </div>
      <button class="btn save">Сохранить</button>
    </div>
  </section>
</template>
<style scoped>
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #f0f0f5;
  transition: all 500ms ease;
  cursor: auto;
}

.card:hover,
.btn-action:hover {
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}

h2 {
  font-weight: 600;
  color: #5b6171;
}

.btn {
  padding: 14.5px 24px;
  border-radius: 8px;
  color: #5b6171;
  font-weight: 600;
  transition: all 500ms ease;
}

.group {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.group-value {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #5b6171;
  cursor: pointer;
}

.group-item {
  border-radius: 8px;
  padding: 12px 16px;
  border: 1px solid #dfe3ec;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #5b6171;
}

.group-item::placeholder {
  color: #8c93a6;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

.save {
  width: 100%;
  background-color: #195ee6;
  color: #fff;
  font-weight: 600;
}
</style>
