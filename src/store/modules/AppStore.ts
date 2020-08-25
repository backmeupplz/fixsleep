import { i18n } from '@/plugins/i18n'
import { VuexModule, Module, Mutation } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'AppStore' })
export default class AppStore extends VuexModule {
  language?: string = undefined

  @Mutation
  setLanguage(language: string) {
    i18n.locale = language
    this.language = language
    document.title = i18n.t('title') as string
  }
}
