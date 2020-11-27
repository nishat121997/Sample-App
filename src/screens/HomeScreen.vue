<template>
  <scroll-view>
   <!-- Iterate meetups "v-for"  
    <nb-list>
      <nb-list-item v-for="todo in todos" v-bind:key="todo.title">
        <nb-text>{{todo.title}}</nb-text>
      </nb-list-item>
    </nb-list>
    -->
    <nb-text class="header-1">Featured Meetups</nb-text>
  <!-- Iterate meetups "v-for"  -->
<nb-card v-for="meetup in meetups" v-bind:key="meetup.title">
  <nb-card-item bordered>
    <nb-left>
      <nb-thumbnail :source="{uri: ''}"></nb-thumbnail>
      <nb-body>
        <nb-text>Some title</nb-text>
        <nb-text note>Start Date</nb-text>
      </nb-body>
    </nb-left>
  </nb-card-item>
  <nb-card-item>
    <nb-body>
      <image :source="{uri: ''}" class="card-item-image"/>
      <nb-text>Some Description</nb-text>
    </nb-body>
  </nb-card-item>
  <nb-card-item :style="{ paddingVertical: 0 }">
    <nb-left>
      <nb-button transparent>
        <nb-icon name="person"></nb-icon>
        <nb-text>2 people are comming</nb-text>
      </nb-button>
    </nb-left>
  </nb-card-item>
</nb-card>
     
  
  </scroll-view>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      navigation: {
        type: Object
      }
    },
    data () {
      return {
        title: 'Home Screen!',
        stylesObj: {
          cardItemImage: {
            resizeMode: "cover",
            width: '100%',
            marginBottom: 10
          }
        }
      }
    },
    computed: {
      // 5. Get todos from state
      todos () {
        return this.$store.state.todos
      },
      meetups () {
        return this.$store.state.meetups.items
      }
    },
    created () {
      this.$store.dispatch('fetchTodos')
      this.$store.dispatch('meetups/fetchMeetups')
    },
    methods: {
      goToScreen1 () {
        this.navigation.navigate('ScreenOne')
      }
    }
  }
</script>

<style>
  .card-item-image {
    flex: 1;
    height: 200;
  }
  .header-1 {
    font-size: 23px;
    padding: 20px;
    font-weight: bold;
  }
</style>
