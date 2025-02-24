<script>
export default {
  name: "AppCategory",
  components: {},
  data() {
    return {
      id: "1",
      name: "",
      rang: "",
      desc: "",
      closed: true,
    };
  },
  methods: {},
};
</script>
<template>
  <section class="wrapper">
    <div class="group-title">
      <h1>Категория #{{ id }}</h1>
      <button class="btn edit">Редактиовать</button>
    </div>
    <div class="card">
      <h2>Общая информация</h2>
      <div class="wrap-group">
        <div class="group">
          <label for="name" class="group-value">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="name"
            class="group-item"
            placeholder="Введите название"
          />
        </div>
        <div class="group">
          <label for="rang" class="group-value">Приоритет</label>
          <input
            type="text"
            id="rang"
            name="rang"
            v-model="rang"
            class="group-item"
            placeholder="Введите приоритет"
          />
        </div>
      </div>
      <div class="group">
        <label for="desc" class="group-value">Описание</label>
        <input
          type="text"
          id="desc"
          name="desc"
          v-model="desc"
          class="group-item"
          placeholder="Введите описание"
        />
      </div>
      <div class="wrap-check">
        <input type="checkbox" v-model="closed" id="closed" class="checkbox" />
        <label for="closed" class="group-value">Скрыть</label>
      </div>
    </div>
    <div class="wrap-btns">
      <button class="btn delete">Удалить</button>
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

.wrap-group {
  display: flex;
  align-items: center;
  gap: 20px;
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
  background-color: #fff;
  gap: 20px;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #f0f0f5;
  transition: all 500ms ease;
  cursor: auto;
}

.save {
  width: 100%;
  background-color: #195ee6;
  color: #fff;
  font-weight: 600;
}

.delete {
  width: 100%;
  background-color: #dc2626;
  color: #fff;
  font-weight: 600;
}
</style>
