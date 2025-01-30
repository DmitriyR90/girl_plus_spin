function getScrollHeight(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    let computedStyle = getComputedStyle(element);
    let marginBottom = parseFloat(computedStyle.marginBottom);
    let height = parseFloat(computedStyle.height);

    return marginBottom + height;
  } else {
    console.error(`Element with id "${elementId}" not found.`);
    return 0;
  }
}

function spinColumn(columnId, duration, finalPosition) {
  const spinner = document.getElementById(columnId);

  let scrollHeight = getScrollHeight('slotItem');
  console.log('Scroll Height:', scrollHeight);

  const finalOffset = finalPosition * -scrollHeight;
  spinner.style.transition = `top ${duration}s ease-in-out`;
  spinner.style.top = `${finalOffset}px`;
}

document.getElementById('spinButton').addEventListener('click', () => {
  const spinButton = document.getElementById('spinButton');
  spinButton.disabled = true;

  spinColumn('spinner1', 2, 4);
  spinColumn('spinner2', 3, 4);
  spinColumn('spinner3', 4, 6);

  setTimeout(() => {
    let sevenSlots = document.querySelectorAll('#seven');
    console.log(sevenSlots);

    for (let item of sevenSlots) {
      console.log(item);
      item.classList.add('slot-win');
    }
  }, 4000);

  setTimeout(() => {
    document.getElementById('slotWindow').style.display = 'none';
    document.getElementById('winModal').classList.add('active');
    spinButton.disabled = false;
  }, 5000);
});

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('winModal').classList.remove('active');
});
