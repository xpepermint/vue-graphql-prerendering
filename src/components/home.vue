<template>
  <div>
    <h1>Home {{ counter }}</h1>
    <template v-if="isLoading">
      Loading
    </template>
    <template v-else>
      <div v-for="message in messages" :key="message.id">
        {{ message.name }}
      </div>
    </template>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data () {
    setInterval(() => {
      this.counter = this.counter + 1
    }, 1000)

    return {
      counter: 0,
      messages: [],
      isLoading: 0
    }
  },

  apollo: {
    messages: {
      query: gql`{messages {id name}}`,
      loadingKey: 'isLoading'
    }
  }
}
</script>
