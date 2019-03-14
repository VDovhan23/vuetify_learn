<template>
    <nav>
        <v-snackbar
            v-model="snap"
            :timeout="2500"
            top
            color="success"
        >
            <span>WooHoo! you added a new project!</span>
            <v-btn flat color="white" @click.native="snap = false">Close</v-btn>
        </v-snackbar>
        <v-toolbar light flat app height=75 color="grey" class="lighten-3">
            <v-toolbar-side-icon @click="navigation = !navigation"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light" >Vuetify</span>
                <span >lerninig app</span>
            </v-toolbar-title>

            <v-spacer></v-spacer><!-- Все що до цього компонету буде позиціонуватися зліва. все що після - справа  -->

            <!-- dropdown -->
            <v-menu offset-y lighten-3 color="grey" >
                <v-btn flat  slot="activator"><v-icon left>expand_more</v-icon> Links</v-btn>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
                    </v-list-tile>
                </v-list>
            </v-menu>
            <!-- End dropdown -->

            <v-btn flat >
                <span>LogOut</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>


        <v-navigation-drawer  v-model="navigation" app class="teal pt-5 ">
            <v-layout column wrap align-center mb-5>
            <v-avatar size="120">
                <img src="images/ava1.png" alt="avatar">
            </v-avatar>
            <span class="subheading white--text mt-2" >
                VD Styles
            </span>
            <v-flex>
                <CreateProject @created="snap=true"/>
            </v-flex>
        </v-layout>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                   <v-list-tile-content>
                       <v-list-tile-title class="white--text">
                           {{link.text}}
                       </v-list-tile-title>
                   </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import CreateProject from './CreateProject.vue'
export default {
    components:{CreateProject},
    data() {
        return {
            navigation: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/dashboard' },
                { icon: 'folder', text: 'My Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ],
            snap: false
        }
    },
}
</script>


