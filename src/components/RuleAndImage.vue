<template lang="pug">
.container-block
  img.mr-4(v-if='left', :src='`/images/${index}.svg`')
  Card(
    :index='index + 1',
    :title='$t("rules")[index].title',
    :description='$t("rules")[index].description',
    :source='$t("rules")[index].source'
  )
  img.ml-4(v-if='!left', :src='`/images/${index}.svg`')
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  components: { Card },
})
export default class RuleAndImage extends Vue {
  @Prop({ required: true }) index!: number
  @Prop({ required: false }) left?: boolean
}
</script>

<style>
.container-block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
}

img {
  max-width: 200px;
  margin-bottom: 38px;
}

@media only screen and (max-width: 600px) {
  .container-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  img {
    align-self: center;
  }
}
</style>
