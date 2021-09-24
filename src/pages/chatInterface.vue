<template style="margin-top:10px;">
    <div class="row">
      <div class="col-12">
        <div class="row" style="margin-top:20px;">
            <div class="offset-2 col-8 chatContainer bg-blue-2 rounded-borders" style="overflow:scroll;">
              <div v-for="message in messages" :key="message.key" class="column scroll "  >
                <MessageItem :text="message.text" :messageSender="message.user" />
              </div>
            </div>
        </div>
      </div>
      <div class="col-12">
        <q-form @submit="sendMessage" class="row">
            <q-input autocomplete="off" rounded outlined v-model="text" class="offset-2 col-7" label="Mensaje" />
            <q-btn  type="submit" color="secondary" class="col-2 col-md-1" icon-right="send" label="Send" />
        </q-form>
      </div>
    </div>
</template>

<script>
const { DeepstreamClient } = require('@deepstream/client')
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'chatInterface',
  data () {
    return {
      client: null,
      text: '',
      resultado: '',
      record: null
    }
  },
  components: {
    MessageItem: require('../components/MessageItem.vue').default
  },
  created: async function () {
    if (this.user === '') {
      this.$router.push('/')
    } else {
      this.client = new DeepstreamClient('localhost:6020')
      this.client.login()
      this.record = this.client.event
      this.record.subscribe('communication', value => {
        this.addMessage(value)
      })
    }
  },
  computed: {
    ...mapGetters('chat', ['user', 'time', 'messages'])
  },
  methods: {
    ...mapActions('chat', ['addMessage', 'setTime']),
    sendMessage: function () {
      this.setTime()
      const messageBody = {
        time: this.time,
        text: this.text,
        user: this.user
      }
      this.record.emit('communication', messageBody)
      this.text = ''
    }
  }
}
</script>

<style>
  .chatContainer {
    content: '';
    min-height: 70vh;
    max-height: 70vh;
  }
</style>
