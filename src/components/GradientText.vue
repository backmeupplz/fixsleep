<template lang="pug">
.gradient-text(:class='smaller ? "smaller" : ""')
  slot
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GradientText extends Vue {
  @Prop({ required: false }) smaller?: boolean
}
</script>

<style>
.gradient-text {
  display: inline-block;
  -webkit-background-clip: text;
  background-clip: text;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 78px;

  width: 100%;
}
@supports ((background-clip: text) or (-webkit-background-clip: text)) and
  ((text-fill-color: transparent) or (-webkit-text-fill-color: transparent)) {
  .gradient-text {
    background-image: linear-gradient(
      90deg,
      #ba7ecf 2.9%,
      #f19ed0 23.1%,
      #948df2 44.99%,
      #b9c2ff 75.22%,
      #fbcea5 101.86%
    );
    background-size: cover;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.smaller {
  font-size: 40px;
  margin-bottom: 24px;
}
@media only screen and (max-width: 600px) {
  .gradient-text {
    font-size: 28px;
    line-height: 36px;
  }
  .smaller {
    font-size: 24px;
  }
}
</style>
