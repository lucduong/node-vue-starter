let FileTable = {
  props: {
    name: String,
    files: Array,
  },
  template: `
    <div class="table-responsive">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>{{name}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="f in files" :key="f._id">
            <td> <strong>{{f.filename}} </strong><span class="text-info">{{f.downloadTime}}s</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  `
}
window.app = new Vue({
  el: '#app',
  data: {},
  components: {
    FileTable,
  },
  methods: {

  },
  mounted() {},
  computed: {

  }
})
