<template>
    <ScreenWithDrawer :navigation="navigation">
    <view>
    <text class="text-color-primary">{{ title }} </text>
    </view>
  </ScreenWithDrawer>
</template>
<script>
import ScreenWithDrawer from '@/components/ScreenWithDrawer'
export default {
    components: {
    ScreenWithDrawer
  },
    props: {
        navigation: {
            type: Object

        }
    },
    
    data(){
        return {
            title: 'I am Screen 3'
        }
    },
    
}
</script>