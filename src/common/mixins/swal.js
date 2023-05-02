import Swal from "sweetalert2";

const Toast = Swal.mixin({
  position: "top-start",
    showConfirmButton: false,
    width: 200,
    backdrop: false,
    html: '<div id="colorPicker"></div>',
    customClass: {
      popup: "navbar-toast",
    },
});
export { Toast};
