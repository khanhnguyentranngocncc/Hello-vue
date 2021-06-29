<template>
  <div class="screen">
    <div
      class="screen__inner"
      :style="{
        width: `${screenWidth}px`,
      }"
    >
      <card-flip
        v-for="(card, index) in cardsContext"
        :key="index"
        :imageBackfaceUrl="`${card}.png`"
        :ref="`card-${index}`"
        :card="{ value: card, index }"
        :CardHeight="cardHeight"
        :CardWidth="cardWidth"
        @onFlip="checkRule"
      />
    </div>
  </div>
</template>

<script>
import CardFlip from "./Card.vue";

export default {
  components: {
    CardFlip,
  },
  props: {
    cardsContext: Array,
    default: function () {
      return [];
    },
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;

      this.rules.push(card);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("right");
        this.$refs[`card-${this.rules[0].index}`].onChangeDisabled();
        this.$refs[`card-${this.rules[1].index}`].onChangeDisabled();

        this.rules = [];

        const disabledElements = document.querySelectorAll(
          ".screen .card.disabled"
        );
        if (
          disabledElements &&
          disabledElements.length == this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 920);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("wrong");
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();

          this.rules = [];
        }, 800);
      } else return false;
    },
  },
  computed: {
    cardHeight() {
      console.log("tổng số card ", Math.round(this.cardsContext.length));
      return (680 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16;
    },
    cardWidth() {
      return (
        (((680 - 16 * 4) / Math.sqrt(this.cardsContext.length) - 16) * 3) / 4
      );
    },
    screenWidth() {
      return (this.cardWidth + 16) * Math.sqrt(this.cardsContext.length);
    },
  },
};
</script>

<style lang="css" scoped>
.screen {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-color: var(--dark);
  color: var(--light);
}
.screen__inner {
  max-width: 920px;
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
</style>
