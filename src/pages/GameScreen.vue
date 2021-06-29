<template>
  <main-screen
    v-if="statusMatch === 'default'"
    @onStart="onHandleBeforeStart"
  />
  <interact-screen
    v-if="statusMatch === 'match'"
    :cardsContext="setting.cardsContext"
    @onFinish="onGetResult"
  />
  <result-screen
    v-if="statusMatch === 'result'"
    :timer="timer"
    @onMain="statusMatch = 'default'"
  />
  <copy-right-screen />
</template>

<script>
import MainScreen from "../components/poke-memories/MainScreen.vue";
import InteractScreen from "../components/poke-memories/InteractScreen.vue";
import ResultScreen from "../components/poke-memories/ResultScreen.vue";
import CopyRightScreen from "../components/poke-memories/CopyrightScreen.vue";
import { shuffled } from "../utils/array";
export default {
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    CopyRightScreen,
  },
  data() {
    return {
      statusMatch: "default",
      setting: {
        totalOfBlock: 0,
        cardsContext: [],
        startedAt: null,
      },
      timer: 0,
    };
  },
  methods: {
    onHandleBeforeStart(config) {
      console.log("runing handle before start ", config);

      this.setting.totalOfBlock = config.totalOfBlock;
      const firstCards = Array.from(
        { length: this.setting.totalOfBlock / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      console.log(shuffled(shuffled(shuffled(shuffled(cards)))));
      this.setting.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))));
      this.setting.startedAt = new Date().getTime();
      //data ready
      this.statusMatch = "match";
    },
    onGetResult() {
      //get timer
      this.timer = Math.round(
        (new Date().getTime() - this.setting.startedAt) / 1000
      );
      //switch component
      this.statusMatch = "result";
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Odibee Sans", cursive;
}
</style>
