import AvatarList from './list.vue';
// console.log('AvatarList :>> ', AvatarList);
import AvatarListItem from './item.vue';
// console.log('AvatarListItem :>> ', AvatarListItem);

const install = function(Vue) {
  Vue.component(AvatarList.name, AvatarList);
  Vue.component(AvatarListItem.name, AvatarListItem);
};

export default { AvatarList0: AvatarList, AvatarListItem0: AvatarListItem, install };
// import AvatarList from './components/AvatarList/index';
// Vue.use(AvatarList);

export { AvatarList, AvatarListItem, install };
// import * as avatar from './components/AvatarList';
// import { AvatarList, AvatarListItem } from './components/AvatarList';
