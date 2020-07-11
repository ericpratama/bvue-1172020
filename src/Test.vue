<template>
    <div>
        <b-button id="show-btn" @click="showModal">Add Attribute</b-button>

        <b-modal ref="my-modal" hide-footer title="Add More Attribute">
            <div>
                <p>This attribute affect on the user management level access.</p>
                <p> Click <span><a href="#">here</a></span> to manage user.</p>
            </div>
            <div class="d-flex flex-row justify-content-end">
                <b-button class="mt-2" variant="outline-primary" @click="hideModal" style="margin-right:10px">Close Me</b-button>
                <b-button class="mt-2" variant="primary" @click="hideModal">Save</b-button>
            </div>
        </b-modal>
    </div>
</template>
erpan1140
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      }
    }
}
</script>