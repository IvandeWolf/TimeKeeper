<template>
<div class="mdc-drawer-app-content" >
  <main class="main-content" id="main-content">
    <v-card outlined>
      <v-card-text>
        <h2 class="text--primary">Start working on a activity</h2>
      </v-card-text>

      <v-form>
        <v-container>
          <v-row>
            <!-- Choose activity -->
            <v-col cols="12" sm="12" md="12">
              <v-select
                outlined
                :items="this.activities"
                item-text="title"
                item-value="id"
                prepend-inner-icon="label_outline"
                :hide-details="true"
                label="Activity"
                v-model="activity"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <!-- Start time -->
            <v-col cols="12" sm="12" md="12">
              <v-dialog ref="dialog" v-model="modal_end" :return-value.sync="start_time" width="290px">
                <template v-slot:activator="{ on }">
                  <v-text-field
                    outlined
                    v-model="start_time"
                    label="Start time"
                    prepend-inner-icon="access_time"
                    :hide-details="true"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker v-if="modal_end" v-model="start_time" format="24hr" :allowed-minutes="allowedStep" color="blue darken-4" full-width>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="modal_end = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.dialog.save(start_time)">OK</v-btn>
                </v-time-picker>
              </v-dialog>
            </v-col>
          </v-row>

          <!-- A box for notes -->
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-textarea
                label="Notes"
                auto-grow
                outlined
                rows="3"
                row-height="25"
                clearable
                :hide-details="true"
                prepend-inner-icon="mdi-file-document-box-outline"
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <!-- Some actions that can be proformed -->
      <v-card-actions v-if="activity && start_time">
        <v-spacer></v-spacer>
        <v-btn outlined @click="add">Add</v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </main>
</div>
</template>

<script>
export default {
  mounted() {
    $.get('/activities').done((data) => {
      for (let act in data)
        this.activities.push(data[act])
    })
  },
  methods: {
    allowedStep: m => m % 5 === 0,
    add() {
      $.post('/times', {
        activity: this.activity,
        start_time: this.start_time,
        notes: this.notes
      }).done(() => {
        this.$router.push('current')
      })
    }
  },
  data: () => {
    return {
      activities: [],
      title: null,
      start_time: null,
      end_time: null,
      notes: null,
      activity: null,
      modal_start: false,
      modal_end: false
    }
  }
}
</script>

<style>
main {
  margin: 8px 4px;
}
</style>
