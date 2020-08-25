<template lang="pug">
.container-box
  .index-box
    .index {{ index }}
  .text-box
    .title {{ title }}
    .description {{ description }}
    a.source(:href='source', target='_blank') {{ $t("source") }}
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class GradientText extends Vue {
  @Prop({ required: true }) index!: number
  @Prop({ required: true }) title!: string
  @Prop({ required: true }) description!: string
  @Prop({ required: true }) source!: string
}
</script>

<style>
.container-box {
  display: flex;
  flex-direction: row;
  margin-bottom: 38px;
  flex-shrink: 1;
}
.index-box {
  min-width: 56px;
  max-width: 56px;
  height: 56px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 24px;
}
.index {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 42px;

  color: #ffffff;
}
.text-box {
  display: flex;
  flex-direction: column;
}
.title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 31px;

  color: #ffffff;
}
.description {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;

  color: #ffffff;

  opacity: 0.6;

  margin-bottom: 8px;
}
a {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;

  color: #ff8b8b !important;

  text-decoration: none;
  outline: 0;
}
a:hover {
  text-decoration: underline;
}
@media only screen and (max-width: 600px) {
  .index-box {
    min-width: 32px;
    max-width: 32px;
    height: 32px;
    border-radius: 8px;
  }
  .index {
    font-size: 18px;
    line-height: 23px;
  }
  .title {
    font-size: 18px;
    line-height: 23px;
  }
  .description {
    font-size: 16px;
    line-height: 20px;
  }
  .source {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
