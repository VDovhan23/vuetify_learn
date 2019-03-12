<template>
    <nav>
        <v-toolbar light  app height=75 color="red" class="lighten-2">
            <v-toolbar-side-icon @click="navigation = !navigation"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase">
                <span class="font-weight-light">Vuetify</span>
                <span >lerninig app</span>
            </v-toolbar-title>
            <v-spacer></v-spacer><!-- Все що до цього компонету буде позиціонуватися зліва. все що після - справа  -->
            <v-btn flat >
                <span>LogOut</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer  v-model="navigation" app class="indigo">
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
export default {
    data() {
        return {
            navigation: true,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'My Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ]
        }
    },
}
</script>


