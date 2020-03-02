<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "App",
  watch: {
    $route(to, from) {
      store.dispatch("app/changePlace", to.name);
    }
  }
};
</script>
