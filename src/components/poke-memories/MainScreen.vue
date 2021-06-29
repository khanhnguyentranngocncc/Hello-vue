<template>
  <div class="screen">
    <h1>POKE MEMORIES</h1>
    <h3>Select mode to start game</h3>
    <div class="actions">
      <button @click="onStart(16)">
        <span class="first-child">4x4</span>
        <span class="last-child">Easy</span>
      </button>
      <button @click="onStart(36)">
        <span class="first-child">6x6</span>
        <span class="last-child">Medium</span>
      </button>
      <button @click="onStart(64)">
        <span class="first-child">8x8</span>
        <span class="last-child">Hard</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    onStart(totalOfBlock) {
      this.$emit("onStart", { totalOfBlock });
    },
  },
};
</script>

<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100%;
  min-height: 640px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: var(--dark);
  color: var(--light);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
}

.screen p {
  font-size: 2rem;
}

.actions {
  display: flex;
  margin-top: 2rem;
}

.actions button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.actions button:hover {
  background-color: var(--light);
  color: var(--dark);
}

.actions button span:first-child {
  font-size: 2rem;
}

.actions button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
