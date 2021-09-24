<template>
    <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 400px">
            <q-chat-message
                v-if="messageSender == user"
                :name="messageSender"
                :text="[text]"
                sent
            />
            <q-chat-message
                v-else
                :name="messageSender"
                :text="[text]"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MessageItem',
  props: ['text', 'messageSender'],
  computed: {
    ...mapGetters('chat', ['user'])
  }
}
</script>
