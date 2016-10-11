<template>
  <div>
    <h1>Home {{ counter }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    setInterval(() => {
      this.counter = this.counter + 1
    }, 1000)

    return {
      counter: 0
    }
  }
}
</script>
