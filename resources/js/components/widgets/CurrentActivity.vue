<template>
  <v-card outlined>
    <v-card-text v-if="this.activity">
      <div v-if="this.category">
        <v-chip outlined label small color="blue darken-4">{{ this.category.title }}</v-chip>
      </div>
      <h2 class="display-1 text--primary">{{ this.activity.title}}</h2>
      <p>{{ this.activity.subtitle}}</p>
    </v-card-text>
    <v-form>
      <v-container v-if="this.activity">
        <v-row>
          <!-- Start time -->
          <v-col cols="6" sm="6" md="6">
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

          <!-- End time -->
          <v-col cols="6" sm="6" md="6">
            <v-dialog ref="dialog2" v-model="modal_start" :return-value.sync="end_time" width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field
                  outlined
                  v-model="end_time"
                  label="End time"
                  prepend-inner-icon="timelapse"
                  :hide-details="true"
                  readonly
                  clearable
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal_start" v-model="end_time" format="24hr" :allowed-minutes="allowedStep" color="blue darken-4" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal_start = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog2.save(end_time)">OK</v-btn>
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
              :value="this.notes"
              @change="update"
            ></v-textarea>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

    <!-- Some actions that can be proformed -->
    <v-card-actions v-if="this.end_time">
      <v-spacer></v-spacer>
      <v-btn text @click="done">Done</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['id'],
  mounted() {
    /* Getting the current time. */
    $.get('/time', {
      id: this.id
    }).done((data) => {
      this.time = data
      this.start_time = this.time.start
      this.end_time = this.time.end
      this.notes = this.time.notes

      /* Based on that get the corresponding activity. */
      $.get('/activity', {
        id: this.id
      }).done((data) => {
        this.activity = data

        /* Lastly get the category of the activity. */
        $.get('/category', {
          id: this.activity.category
        }).done((data) => {
          this.category = data
        })
      })
    })
  },
  data: () => {
    return {
      time: null,
      activity: null,
      category: null,
      start_time: null,
      end_time: null,
      notes: null,
      modal_start: false,
      modal_end: false,
      duration: null
    }
  },
  methods: {
    allowedStep: m => m % 5 === 0,
    update(value) {
      $.post('/time', {
        id: this.time.id,
        start: this.start_time,
        end: this.end_time,
        notes: value
      })
    },
    done() {
      $.post('/time/done', {
        id: this.time.id
      }).done(() => {
        this.$destroy();
        // remove the element from the DOM
        this.$el.parentNode.removeChild(this.$el);
      })
    }
  },
  watch: {
    start_time: {
      handler(value) {
        $.post('/time', {
          id: this.time.id,
          start: this.start_time,
          end: this.end_time,
          notes: this.notes
        })
      }
    },
    end_time: {
      handler(value) {
        $.post('/time', {
          id: this.time.id,
          start: this.start_time,
          end: this.end_time,
          notes: this.notes
        })
      }
    }
  }
}
</script>

<style scoped>
.v-card:not(.v-picker) {
  margin-bottom: 8px;
}
</style>
