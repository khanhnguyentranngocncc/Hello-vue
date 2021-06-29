<template>
  <p>
    This game create by Khanh with VueJS 3 for beginner -
    <a href="#">view here</a>
  </p>
  <router-link class="link-to-menu" to="/">Back to home</router-link>
</template>

<script>
export default {
  name: "cory-right",
};
</script>

<style scoped>
p {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 0.5rem;
}
.link-to-menu {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 0.5rem;
}
</style>
