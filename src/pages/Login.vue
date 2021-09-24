<template>
  <q-page class="flex flex-center">
    <q-form @submit="signIn" class="flex">
      <q-input v-model="user" label="Username" />
      <q-btn  type="submit" color="secondary" icon-right="send" label="Sign in" />
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      user: ''
    }
  },
  methods: {
    ...mapActions('chat', ['setUser']),
    signIn () {
      this.setUser(this.user)
      this.$router.push('/chatInterface')
    }
  }
}
</script>
