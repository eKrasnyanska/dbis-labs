<template>
  <div class="container">
    <button type="button" class="btn btn-primary">{{ msg }}</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Ping',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getMessage () {
      const path = 'http://backend-shopfinder.herokuapp.com/ping'
      axios.get(path)
        .then((res) => {
          this.msg = res.data
          console.log(res)
          console.log(res.request)
          console.log(res.headers)
        })
        .catch((error) => {
          // eslint-выключение следующей строки
          console.error(error)
        })
    }
  },
  created () {
    this.getMessage()
  }
}
</script>

<style scoped>

</style>
