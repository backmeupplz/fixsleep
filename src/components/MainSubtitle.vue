<template lang="pug">
.main-subtitle
  slot
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MainSubtitle extends Vue {}
</script>

<style>
.main-subtitle {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 42px;
  color: #ffffff;

  opacity: 0.5;

  margin-top: 24px;

  margin-bottom: 60px;
}
@media only screen and (max-width: 600px) {
  .main-subtitle {
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
