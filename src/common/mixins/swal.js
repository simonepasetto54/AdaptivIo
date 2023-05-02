import Swal from "sweetalert2";

const Toast = Swal.mixin({
  heightAuto: false,
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  iconColor: 'white',
  customClass: {
    title: "custom-title",
    timerProgressBar: "custom-timer-progress-bar",

  },
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
export { Toast};
