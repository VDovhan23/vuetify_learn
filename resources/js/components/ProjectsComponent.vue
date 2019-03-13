<template>
<div class="wrapper" >
    <v-container fluid class="my-5">

        <v-expansion-panel expand focusable flat>
           <v-expansion-panel>
                <v-expansion-panel-content v-for="p in myProjects" :key="p.title">
                <div slot="header">{{p.title}}</div>
                <v-card>
                    <v-card-text class="px-4" >
                        <div class="font-weight-bolder">{{p.due}}</div>
                       {{p.content}}
                    </v-card-text>
                </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panel>

    </v-container>
</div>

</template>

<script>
export default {

  data () {
    return {
        projects: [
        { title: 'Design a new website', person: 'VD_Styles', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'VD_Styles', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
      myProjects() {
          return this.projects.filter(project=>{
              return project.person === "VD_Styles"
          })
      }
  },
}
</script>
