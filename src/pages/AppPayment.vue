<script>
export default {
  name: "AppPayment",
  components: {},
  data() {
    return {
      id: "52",
      status: "Оплачен",
      type: "Покупка",
      name: "ChaCha",
      surname: "Rollsroyce",
      id_client: "45664",
      email: "rollsroyce@mail.com",
      tg: "@Rollsroyce",
      phone: "+7 999 999 99 99",
      headFrame: "UnassumingAntelopes",
      createdAt: "2024-12-23 11:43",
      type_payment: "buy_request",
      currency: "BTC",
      network: "Bep 20",
      id_trank: "202998",
      amount: "43795.17",
      gateway: "Tranzilla",
      filename: "Invoice",
      file_size: "9.29 MB",
    };
  },
  methods: {},
  mounted() {},
};
</script>
<template>
  <section class="wrapper">
    <h1>Оплата #{{ id }}</h1>
    <div class="card">
      <h2>Действия</h2>
      <div class="group">
        <label for="status" class="group-value">Состояние</label>
        <select
          type="text"
          id="status"
          name="status"
          v-model="status"
          class="group-item"
          placeholder="Выберите состояние"
        >
          <option value="Оплачен">Оплачен</option>
          <option value="Не оплачен">Не оплачен</option>
        </select>
      </div>
    </div>
    <div class="card">
      <h2>Основная информация</h2>
      <div class="info-item">
        <span class="info-title">Тип:</span>
        <span class="info-value open">{{ type }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Статус:</span>
        <span
          class="status"
          :class="{
            done: status == 'Оплачен',
            not_done: status == 'Не оплачен',
          }"
          >{{ status }}</span
        >
      </div>
      <div class="info-item">
        <span class="info-title">Имя:</span>
        <span class="info-value">{{ name }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Фамилия:</span>
        <span class="info-value">{{ surname }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">ID клиента:</span>
        <span class="info-value open">{{ id_client }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">E-mail:</span>
        <span class="info-value">{{ email }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Telegram:</span>
        <span class="info-value">{{ tg }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Телефон:</span>
        <span class="info-value">{{ phone }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Headframe-аккаунт:</span>
        <span class="info-value open">{{ headFrame }}</span>
      </div>
    </div>
    <div class="card">
      <h2>Информация о счёте</h2>
      <div class="info-item">
        <span class="info-title">Дата создания:</span>
        <span class="info-value">{{ createdAt }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Тип платежа:</span>
        <span class="info-value">{{ type_payment }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Валюта:</span>
        <span class="info-value">{{ currency }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Сеть:</span>
        <span class="info-value">{{ network }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Номер транзакции:</span>
        <span class="info-value open">{{ id_trank }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Сумма (USD):</span>
        <span class="info-value">{{ amount }}</span>
      </div>
      <div class="info-item">
        <span class="info-title">Шлюз:</span>
        <span class="info-value open">{{ gateway }}</span>
      </div>
    </div>
    <div class="card">
      <h2>Документ</h2>
      <div class="card-file">
        <div class="file">
          <img src="../assets/message-file.svg" alt="" />
          <div class="info">
            <span class="name">{{ filename }}</span>
            <span class="size">{{ file_size }}</span>
          </div>
        </div>
        <div class="doc-actions">
          <button class="btn edit-btn">Изменить</button>
          <button class="btn delete">Удалить</button>
        </div>
      </div>
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

.wrap-title {
  display: flex;
  align-items: center;
  gap: 8px;
}

.group-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

h1 span {
  font-weight: 600;
  font-size: 24px;
  line-height: 32.78px;
}

h2 {
  font-size: 20px;
  font-weight: 600;
  line-height: 27.32px;
  color: #14171f;
}

.btn {
  padding: 14.5px 24px;
  border-radius: 8px;
  color: #5b6171;
  font-weight: 600;
  transition: all 500ms ease;
}
.edit {
  color: #195ee6;
}

.user {
  color: #195ee6;
  text-decoration: underline;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.86px;
  letter-spacing: 0em;
}

.enable {
  width: fit-content;
  padding: 0;
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

.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: #5b6171;
}

.info-value {
  font-weight: 500;
  color: #262d40;
  font-size: 16px;
  line-height: 21.86px;
  letter-spacing: 0em;
  color: #262d40;
}
.wrap-check {
  display: flex;
  align-items: center;
  gap: 10px;
}

.send {
  background-color: #195ee6;
  font-weight: 600;
  letter-spacing: 0em;
  color: #fff;
}

.wrap-btns {
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-action {
  width: 33%;
  padding: 14.5px 24px;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0em;
  color: #fff;
  transition: all 500ms ease;
}

.status {
  width: fit-content;
  padding: 6px 14px;
  border-radius: 38.32px;
  font-weight: 600;
}

.done {
  background-color: #f0feed;
  color: #259800;
}

.not_done {
  background-color: #feeded;
  color: #dc2626;
}

.open {
  color: #195ee6;
  text-decoration: underline;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.86px;
  letter-spacing: 0em;
  cursor: pointer;
}

.card-file {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.file {
  display: flex;
  gap: 10px;
}

.info {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 500;
  font-size: 12px;
  line-height: 16.8px;
}

.size {
  color: #a7adbe;
  font-size: 10px;
  line-height: 14px;
  font-weight: 500;
}

.edit-btn,
.delete {
  width: fit-content;
  color: #195ee6;
  text-decoration: underline;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.86px;
  letter-spacing: 0em;
  cursor: pointer;
}

.delete {
  color: #dc2626;
}
</style>
