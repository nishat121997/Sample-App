<template>
<view>
 <text class="text-color-primary">{{message}}</text>
 <button :title="btnMessage" :on-press="handleClick"/>
 <text class="count-text">{{clickCount}}</text>
 <text>{{clickMotivation}}</text>
</view>
    
</template>
<script>
export default {
    data(){
        return {
            message: 'Welcome here!',
            btnMessage: 'Click Me',
            clickCount: 0
        }
    },
    computed:{
        clickMotivation(){
            if (this.clickCount< 5){
                return "Please click me"
            } else{
                return "GOOD JOB!"
            }
        }
    },
    methods: {
        handleClick () {
            this.clickCount = this.clickCount + 1
            
        
        }

    }
    
}
</script>
<style>

.text-color-primary {
  color: rgb(170, 84, 95);
}

.count-text{
    font-size: 30px;
}
</style>
