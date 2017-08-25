let Pagination = (function () {
  return {
    template: `
      <ul class="pagination">
          <li class="paginate_button first" id="datatables_first"><a href="#" aria-controls="datatables" data-dt-idx="0" tabindex="0">First</a>
          </li>
          <li class="paginate_button previous" id="datatables_previous"><a href="#" aria-controls="datatables" data-dt-idx="1" tabindex="0">Previous</a>
          </li>
          <li class="paginate_button ">
            <a href="#" aria-controls="datatables" data-dt-idx="2" tabindex="0">1</a>
          </li>
          <li class="paginate_button next" id="datatables_next"><a href="#" aria-controls="datatables" data-dt-idx="9" tabindex="0">Next</a>
          </li>
          <li class="paginate_button last" id="datatables_last"><a href="#" aria-controls="datatables" data-dt-idx="10" tabindex="0">Last</a>
          </li>
      </ul>
    `,
    props: {
      total: {
        type: Number,
        default: 0,
      },
      size: {
        type: Number,
        default: 10,
      },
    },
    computed: {
      pages() {
        if (this.size > this.total) {
          return 1
        } else {
          return Math.ceil(this.total / this.size)
        }
      }
    }
  }
})()

let PaginateButton = (function () {
  return {
    template: `
      <li class="paginate_button ">
        <a href="#" aria-controls="datatables" data-dt-idx="2" tabindex="0">1</a>
      </li>
    `,
    props: {

    },
  }
})()
