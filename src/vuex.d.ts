/* eslint-disable no-unused-vars */
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    user: object;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
