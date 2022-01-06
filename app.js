// gsap.to(".text", {
//   y: 200,
//   opacity: 0,
//   duration: 1,
// });
gsap.fromTo(
  ".text",
  {
    opacity: 0,
    y: 20,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  }
);
