// slider.style.position = "relative";

// const indicators = document.createElement("ol");
// indicators.classList.add.add("carousel-indicators");
// indicators.style.cssText = `
// position: absolute;
// right: 0;
// bottom: 0;
// left: 0;
// z-index: 15;
// display: flex;
// justify-content: center;
// margin-right: 15%;
// margin-left: 15%;
// list-style: none;
// `;

// slider.append(indicators);

// for (let i = 0; i < sliders.length; i++) {
//   const dot = document.createElement("li");
//   dot.setAttribute("data-slide-to", i + 1);
//   dot.style.cssText = `
//   box-sizing: content-box;
//   flex: 0 1 auto;
//   width: 30px;
//   height: 6px;
//   margin-right: 3px;
//   margin-left: 3px;
//   cursor: pointer;
//   background-color: #fff;
//   background-clip: padding-box;
//   border-top: 10px solid transparent;
//   border-bottom: 10px solid transparent;
//   opacity: .5;
//   transition: opacity .6s ease;
//   `;

//   indicators.append(dot);
// }

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function two() {
  const promises = [a(), b(), c()];
  const outpu1 = await Promise.race(promises);
  return `two is done: ${outpu1}`;
}

two().then(console.log);
