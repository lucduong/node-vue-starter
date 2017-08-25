function confirmDelete(action) {
  swal({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false
  }).then(function () {
    action(function () {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    })
  }, function (dismiss) {
    // dismiss can be 'cancel', 'overlay',
    // 'close', and 'timer'
    if (dismiss === 'cancel') {
      swal(
        'Cancelled',
        'Your data is safe :)',
        'error'
      )
    }
  })
}

function warningMsg(msg) {
  swal(
    'Warning!!',
    msg,
    'warning'
  )
}

function cancelMsg(msg) {
  swal(
    'Cancelled',
    `Error occurred: ${msg}`,
    'error'
  )
}

function successMsg(msg) {
  swal(
    'Success!!!',
    `${msg}`,
    'success'
  )
}

function formatBytes(a, b) { if (0 == a) return "0 Bytes"; var c = 1024, d = b || 2, e = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f] }
