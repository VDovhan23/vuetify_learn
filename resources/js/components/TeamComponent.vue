<template>
<div class="wrapper" >
    <v-container fluid class="my-5">
       <v-layout row wrap>
           <v-flex xs12 sm14 md4 lg 3 v-for="member in members" :key="member.name">
               <v-card flat class="text-xs-center ma-3">
                   <v-responsive class="pt-4">
                       <v-avatar size="100"><img :src="member.avatar" alt=""></v-avatar>
                   </v-responsive>
                   <v-card-text>
                       <div class="subheading">{{member.name}}</div>
                       <div class="grey--text">{{member.role}}</div>
                   </v-card-text>
                   <v-card-actions centered>
                       <v-btn flat color="grey" class="ml-5">
                           <v-icon  small left>message</v-icon>
                           <span>Message</span>
                       </v-btn>
                   </v-card-actions>
               </v-card>
           </v-flex>
       </v-layout>
    </v-container>
</div>

</template>

<script>
export default {

  data () {
    return {
        members:[
            { name: 'The Net Ninja', role: 'Web developer' , avatar: 'images/ava1.png'},
            { name: 'Ryu', role: 'Graphic designer' , avatar: 'images/ava2.png'},
            { name: 'Chun Li', role: 'Web developer' , avatar: 'images/ava3.png'},
            { name: 'Gouken', role: 'Social media maverick' , avatar: 'images/ava4.png'},
            { name: 'Yoshi', role: 'Sales guru', avatar: 'images/ava5.png'}
        ],
    }
  }
}
</script>
