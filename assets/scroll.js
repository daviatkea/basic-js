gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");

sections.forEach((section) => {
  gsap.to(section, {
    ease: "none",
    scrollTrigger: {
      trigger: section,
      onUpdate: ({ trigger, progress }) =>
        trigger.style.setProperty(
          "--progress",
          (progress.toFixed(4) - 0.5) * 2
        ),
    },
  });
});
