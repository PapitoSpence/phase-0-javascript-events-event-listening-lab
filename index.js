function addingEventListener() {
}
const btn = document.getElementById('button');
function clickAlert() {
    alert('I was clicked!');
  }
  if (btn) {
  btn.addEventListener('click', () => {
    console.log('btn clicked');
  });
}

function addingEventListener() {
    btn.addEventListener("click", clickAlert);
}

addingEventListener("click", clickAlert);