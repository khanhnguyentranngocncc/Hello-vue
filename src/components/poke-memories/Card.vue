<template>
  <div
    class="card"
    :class="{ disabled: isDisabled }"
    :style="{
      height: `${CardHeight}px`,
      width: `${CardWidth}px`,
    }"
  >
    <div
      class="card__inner"
      :class="{ 'is-flipped': isFlipped }"
      @click="onToggleFlipCard"
    >
      <div class="card__face card__face--front">
        <div
          class="card__content"
          :style="{
            backgroundSize: `${CardWidth / 4}px ${CardWidth / 4}px`,
          }"
        ></div>
      </div>
      <div class="card__face card__face--back">
        <div
          class="card__content"
          :style="{
            backgroundImage: `url(${require('@/assets/images/' +
              imageBackfaceUrl)})`,
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
      isDisabled: false,
    };
  },
  methods: {
    onToggleFlipCard() {
      if (this.isDisabled) {
        return false;
      }
      this.isFlipped = !this.isFlipped;

      if (this.isFlipped) {
        this.$emit("onFlip", this.card);
      }
    },
    onFlipBackCard() {
      this.isFlipped = false;
    },
    onChangeDisabled() {
      this.isDisabled = true;
    },
  },
  props: {
    card: {
      type: [String, Number, Array, Object],
    },
    imageBackfaceUrl: {
      type: String,
      require: true,
    },
    CardHeight: {
      type: Number,
    },
    CardWidth: {
      type: Number,
    },
  },
};
</script>
<style lang="css" scoped>
.card {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
}
.card__inner {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}
.card.disabled .card__inner {
  cursor: default;
}
.card__inner.is-flipped {
  transform: rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.2);
}
.card__face--front .card__content {
  background: url("../../assets/images/icon_back.png");
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
}
.card__face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}

.card__face--back .card__content {
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
</style>
