const itemsEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((itemEl) => {
  const nameEl = itemEl.firstElementChild;
  const categoryName = nameEl.innerText;
  const ulEl = itemEl.lastElementChild;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${ulEl.childElementCount}`);
});
