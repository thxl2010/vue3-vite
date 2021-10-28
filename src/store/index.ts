import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';
import state from './state';
import mutations from './mutations';
import { StateInterface } from '@/models/store/state';

export const key: InjectionKey<Store<StateInterface>> = Symbol(
  "Vuex installs the store to the Vue app using Vue's Provide/Inject feature"
);

export const store = createStore<StateInterface>({
  state,
  mutations,
});

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key);
}
