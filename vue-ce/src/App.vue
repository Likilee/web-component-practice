<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import {ref} from 'vue';

const count = ref(3);

const customCounter = ref<HTMLElement>();

const handleCountChange = (e) => {
  count.value = e.detail.count;
  console.log(e, count.value);
  customCounter.value?.setAttribute('count', `${count.value}`);
}

const handlePlus = () => {
  count.value++;
  customCounter.value?.setAttribute('count', `${count.value}`);
}

const msg=ref('hello');
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <custom-counter ref="customCounter" :count="count" @count-change="handleCountChange"/>
    <p>{{count}}</p>
    <button @click="handlePlus">plus</button>
    <my-card-element :msg="msg"></my-card-element>
    <input v-model="msg" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
