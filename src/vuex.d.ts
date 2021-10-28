/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { StateInterface } from '@/models/store/state';

declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<StateInterface>;
  }
}
