(function () {
  "use strict";

  // var cover = document.getElementById("cover");
  // var root = document.getElementById("parallaxRoot");
  var btnPrint = document.getElementById("btnPrint");

  // function prefersReducedMotion() {
  //   return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  // }

  // function onPointerMove(e) {
  //   if (!cover || prefersReducedMotion()) return;
  //   var rect = root.getBoundingClientRect();
  //   var cx = rect.left + rect.width / 2;
  //   var cy = rect.top + rect.height / 2;
  //   var dx = (e.clientX - cx) / rect.width;
  //   var dy = (e.clientY - cy) / rect.height;
  //   var max = 4;
  //   cover.style.setProperty("--ry", dx * max + "deg");
  //   cover.style.setProperty("--rx", -dy * max * 0.6 + "deg");
  // }

  // function resetTilt() {
  //   if (!cover) return;
  //   cover.style.setProperty("--ry", "0deg");
  //   cover.style.setProperty("--rx", "0deg");
  // }

  // if (root && cover && !prefersReducedMotion()) {
  //   root.addEventListener("pointermove", onPointerMove);
  //   root.addEventListener("pointerleave", resetTilt);
  // }

  if (btnPrint) {
    btnPrint.addEventListener("click", function () {
      window.print();
    });
  }
})();
