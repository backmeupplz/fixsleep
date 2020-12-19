<template lang="pug">
v-app
  v-container.main-container
    .max-width
      v-btn(icon, text, @click='setLanguage("en")') 🇺🇸
      v-btn(icon, text, @click='setLanguage("ru")') 🇷🇺
      GradientText {{ $t("mainTitle") }}
      MainSubtitle {{ $t("mainSubtitle") }}
      GradientText(:smaller='true') {{ $t("rulesTitle") }}
      RuleAndImage(:index='0')
      RuleList(:cardIndexArray='[1, 2, 3, 4]')
      RuleAndImage(:index='5', :left='true')
      RuleList(:cardIndexArray='[6, 7, 8, 9, 10, 11, 12]')
      RuleAndImage(:index='13')
      RuleList(:cardIndexArray='[14, 15, 16]')
      .made-by(v-html='$t("madeBy")')
</template>

<script lang="ts">
import Vue from 'vue'
import { i18n } from '@/plugins/i18n'
import Component from 'vue-class-component'
import GradientText from '@/components/GradientText.vue'
import MainSubtitle from '@/components/MainSubtitle.vue'
import RuleAndImage from '@/components/RuleAndImage.vue'
import RuleList from '@/components/RuleList.vue'
import { namespace } from 'vuex-class'

const AppStore = namespace('AppStore')

@Component({
  components: {
    GradientText,
    MainSubtitle,
    RuleAndImage,
    RuleList,
  },
})
export default class App extends Vue {
  @AppStore.Mutation setLanguage!: (language: string) => void

  created() {
    document.title = i18n.t('title') as string
  }

  get metaInfo() {
    return {
      title: i18n.t('title') as string,
    }
  }
}
</script>

<style>
.main-container {
  width: 100%;
  justify-content: center;
  display: flex;
  padding: 24px !important;
}
.max-width {
  max-width: 1000px;
}
.top-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.made-by {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;

  color: #ffffff;

  margin-top: 80px;
  margin-bottom: 40px;
}

.inline-block {
  display: inline-block;
}

@media only screen and (max-width: 600px) {
  .made-by {
    font-size: 16px;
    line-height: 20px;
  }
  a {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>
