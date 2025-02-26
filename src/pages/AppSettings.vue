<script>
import PaymentSettings from "./settings/PaymentSettings.vue";
import ContentSettings from "./settings/ContentSettings.vue";
export default {
  name: "AppSettings",
  components: { PaymentSettings, ContentSettings },
  data() {
    return {
      id: 25616,
      email: "zankov.vadik@yandex.ru",
      active: 2,
    };
  },
  methods: {
    changeStat(n) {
      try {
        this.active = n;
      } catch (err) {
        console.log(err);
      }
    },

    checkQuery() {
      try {
        let active = this.$route.query.active;
        console.log(active);
        if (active) {
          this.active = active;
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.checkQuery();
  },
};
</script>
<template>
  <main class="wrapper">
    <h1>Настройки</h1>
    <div class="wrap-btns">
      <button
        class="btn"
        @click="changeStat(1)"
        :class="{ active: active == 1 }"
      >
        Оплата
      </button>
      <button
        class="btn"
        @click="changeStat(2)"
        :class="{ active: active == 2 }"
      >
        Управление контентом
      </button>
      <button
        class="btn"
        @click="changeStat(3)"
        :class="{ active: active == 3 }"
      >
        Управление сайтом
      </button>
      <button
        class="btn"
        @click="changeStat(4)"
        :class="{ active: active == 4 }"
      >
        Новости
      </button>
      <button
        class="btn"
        @click="changeStat(5)"
        :class="{ active: active == 5 }"
      >
        Шаблон писем
      </button>
      <button
        class="btn"
        @click="changeStat(6)"
        :class="{ active: active == 6 }"
      >
        Видео
      </button>
    </div>
    <PaymentSettings v-if="active == 1" />
    <ContentSettings v-if="active == 2" />
    <!-- <MinersUser v-if="active == 3" />
    <TicketsUser v-if="active == 4" /> -->
  </main>
</template>
<style scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

h1 span {
  color: #195ee6;
  text-decoration: underline;
  font-weight: 600;
  font-size: 24px;
  line-height: 32.78px;
}
.wrap-btns {
  display: flex;
  align-items: center;
  gap: 8px;
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

.active {
  background-color: rgba(25, 94, 230, 0.1);
  color: #195ee6;
}

.group-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
