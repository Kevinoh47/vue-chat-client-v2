<template lang="html">
  <v-flex md8 offset-md2 class="pa-1" @submit.prevent="sendMessage">
    <v-form style="width:100%">
    <v-text-field
      label="Solo"
      placeholder="Type Your Message"
      v-model="message"
      solo
      ref="message"
      >
    </v-text-field>
    </v-form>
  </v-flex>

</template>

<script>
export default {
  data () {
    return {
      message : ""
    }
  },
  methods : {
    async sendMessage(){
      if(this.handle || this.message){
        let message = {
          handle : this.handle,
          message : this.message
        }
        /** updated for current yakker server */
        let response = await this.$socket.emit('chatter',message.message);
        this.message = "";
      }
    },
  }
}
</script>

<style lang="css">
</style>
