<template>
<view class="container">

<Navigation/>
</view>

</template>

<script>
    import Navigation from './navigation.vue'
    import Vue from "vue-native-core";
    import store from './store'
    import { VueNativeBase } from "native-base";
    //import ScreenWithDrawer from '@/components/ScreenWithDrawer'
    Vue.use(VueNativeBase);
    Vue.prototype.$store = store
    //Vue.component('ScreenWithDrawer',ScreenWithDrawer)


export default {
  components: { Navigation },
}
  
</script>
<style>
    .container {
        flex:1;
        
    }

</style>




