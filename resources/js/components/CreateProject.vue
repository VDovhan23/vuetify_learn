<template>
    <v-dialog
        scrollable
        persistent :overlay="false"
        max-width="650px"
        transition="dialog-transition"
    >
    <v-btn slot="activator" color="success">Add New Project</v-btn>
    <v-card>
        <v-card-title primary-title>
            <h2>Add new Project</h2>
        </v-card-title>
        <v-card-text>
            <v-form>
                <v-text-field  label="title" v-model="project.title" prepend-icon="folder"></v-text-field>
                <v-textarea
                    label="Information"
                    name="Information"
                    v-model="project.text"
                    prepend-icon="edit"
                ></v-textarea>
                <v-btn  @click="submitForm" color="success" mx-0 mt-3>Submit</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
    </v-dialog>
</template>

<script>

export default {
    data() {
        return {
            project:{
                title: '',
                text: '',
            }
        }
    },
    methods: {
        submitForm() {
            console.log(this.project);
        }
    },
}
</script>

<style>

</style>
