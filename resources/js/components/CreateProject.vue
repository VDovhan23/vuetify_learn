<template>
    <v-dialog
        :class="{'v-dialog--active': active}"
        scrollable
        :overlay="false"
        max-width="650px"
        transition="dialog-transition"
    >
    <v-btn slot="activator"  color="success">Add New Project</v-btn>
    <v-card>
        <v-card-title primary-title>
            <h2>Add new Project</h2>
        </v-card-title>
        <v-card-text>
            <v-form ref="form">
                <v-text-field
                label="title"
                v-model="project.title" p
                repend-icon="folder"
                :rules="inputRules"
                ></v-text-field>


                <v-textarea
                    label="Information"
                    name="Information"
                    v-model="project.text"
                    prepend-icon="edit"
                    :rules="inputRules"
                ></v-textarea>

                <v-menu offset-y>
                    <v-text-field
                        v-model="project.date"
                        name="date_range"
                        label="Due Date"
                        prepend-icon="date_range"
                        slot="activator"

                    ></v-text-field>
                    <v-date-picker v-model="project.date" :reactive="true"></v-date-picker>
                </v-menu>
                <v-spacer></v-spacer>


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
                date: null
            },
            inputRules:[
                 v => v.length >= 3  || "Min length is 3"
            ],
        }
    },
    methods: {
        submitForm() {
            if (this.$refs.form.validate()) {
                console.log(this.project);

                this.$emit("created")
            }
        }
    },
}
</script>

<style>

</style>
