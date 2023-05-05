<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const onClick = () => {
  count.value++;
};
</script>

<template>
  <div :class="$style.counter">カウンター</div>
  <div>{{ count }}</div>
  <div>
    <button class="appBtn" :class="$style.counterBtn" @click="onClick">
      ＋1
    </button>
  </div>
</template>

<style lang="scss" module>
.counter {
  color: red;
}
.counterBtn {
  background-color: aqua;
}
</style>
