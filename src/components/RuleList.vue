<template lang="pug">
div
  Card(
    v-for='i in cardIndexArray',
    :key='i',
    :index='i + 1',
    :title='$t("rules")[i].title',
    :description='$t("rules")[i].description',
    :source='$t("rules")[i].source'
  )
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import Card from '@/components/Card.vue'

@Component({
  components: { Card },
})
export default class RuleList extends Vue {
  @Prop({ required: true }) cardIndexArray!: number[]
}
</script>

<style>
img {
  width: 500px;
}
</style>
