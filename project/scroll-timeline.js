import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-timeline');
const reviewWrapperEl = document.querySelectorAll('.review-wrapper');

const scrollTrackerTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: 'block',
  scrollOffsets: [CSS.percent(0), CSS.percent(100)],
});

// scrollTracker.animate(
//   {
//     transform: ['scaleX(0)', 'scaleX(1)'],
//   },
//   {
//     duration: 1000, // duration in milliseconds
//     timeline: scrollTrackerTimeline,
//   }
// );

// reviewWrapperEl.forEach((e) => {
//   const wrapperOffsetTop = e.offsetTop;
//   const wrapperHeight = e.offsetHeight;

//   const reviewWrapperAnimate = new ScrollTimeline({
//     scrollOffsets: [
//       CSS.px(wrapperOffsetTop + wrapperHeight - window.innerHeight),
//       CSS.px(wrapperOffsetTop - 500),
//     ],
//   });

//   e.animate(
//     {
//       opacity: ['0', '1'],
//     },
//     {
//       duration: 1000,
//       timeline: reviewWrapperAnimate,
//     }
//   );
// });

const header = document.getElementById('header');
let lastScrollTop = 0;

window.addEventListener(
  'scroll',
  () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // User is scrolling down
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
  },
  false
);
