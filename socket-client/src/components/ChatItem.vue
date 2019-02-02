<template lang="html">
    <v-tooltip left>
       <span slot="activator">
         <p class="grey--text text--darken-2">
           {{chat.message}}
         </p>
       </span>
       <span>{{chat.created | moment("HH:MM, DD-MM-YY")}}</span>
    </v-tooltip>
</template>

