<script>
export default {
  name: "AppEmployee",
  components: {},
  data() {
    return {
      id: "1001",
      name: "",
      email: "",
      phone: "",
      telegram: "",
      role: "",
      users: true,
      staff: true,
      shops: true,
      tickets: true,
      feedback: true,
      miners: true,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<template>
  <section class="wrapper">
    <div class="group-title">
      <h1>{{ id }}</h1>
      <button class="btn edit">Редактиовать</button>
    </div>
    <div class="card">
      <h2>Общая информация</h2>
      <div class="wrap-avatar">
        <div class="container-img">
          <img src="../assets/image.png" alt="" />
        </div>
        <div class="actions-avatar">
          <a class="edit-img">Изменить</a>
          <a class="delete">Удалить</a>
        </div>
      </div>
      <div class="wrap-group">
        <div class="group">
          <label for="name" class="group-value">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            class="group-item"
            placeholder="Введите свое имя"
          />
        </div>
        <div class="group">
          <label for="email" class="group-value">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            class="group-item"
            placeholder="Введите свою почту"
          />
        </div>
      </div>
      <div class="wrap-group">
        <div class="group">
          <label for="phone" class="group-value">Телефон</label>
          <input
            type="text"
            id="phone"
            name="phone"
            v-model="phone"
            class="group-item"
            placeholder="Введите свой телефон"
          />
        </div>
        <div class="group">
          <label for="telegram" class="group-value">Telegram</label>
          <input
            type="text"
            id="telegram"
            name="telegram"
            v-model="telegram"
            class="group-item"
            placeholder="Введите свой телеграмм аккаунт"
          />
        </div>
      </div>
      <div class="group">
        <label for="role" class="group-value">Роль</label>
        <select
          type="text"
          id="role"
          name="role"
          v-model="role"
          class="group-item"
          placeholder="Выберите роль"
        >
          <option value="boundary">Администратор</option>
        </select>
      </div>
      <button class="btn save">Сохранить</button>
    </div>
    <div class="card">
      <h2>Доступные разделы</h2>
      <div class="wrap-check">
        <input type="checkbox" v-model="users" id="users" class="checkbox" />
        <label for="users" class="group-value">Пользователи</label>
      </div>
      <div class="wrap-check">
        <input type="checkbox" v-model="staff" id="staff" class="checkbox" />
        <label for="staff" class="group-value">Сотрудники</label>
      </div>
      <div class="wrap-check">
        <input type="checkbox" v-model="shops" id="shops" class="checkbox" />
        <label for="shops" class="group-value">Заказы</label>
      </div>
      <div class="wrap-check">
        <input
          type="checkbox"
          v-model="tickets"
          id="tickets"
          class="checkbox"
        />
        <label for="tickets" class="group-value">Тикеты</label>
      </div>
      <div class="wrap-check">
        <input
          type="checkbox"
          v-model="feedback"
          id="feedback"
          class="checkbox"
        />
        <label for="feedback" class="group-value">Обратная связь</label>
      </div>
      <div class="wrap-check">
        <input type="checkbox" v-model="miners" id="miners" class="checkbox" />
        <label for="miners" class="group-value">Майнеры</label>
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

.edit-img,
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

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.save {
  width: 100%;
  background-color: #195ee6;
  color: #fff;
  font-weight: 600;
}

.wrap-avatar {
  display: flex;
  align-items: center;
  gap: 20px;
}

.container-img {
  width: 120px;
  height: 120px;
}

.container-img img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.actions-avatar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
