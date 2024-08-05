{
  /* <div class="opacity-100 transition-all ease-in-out duration-200 opacity-100 transition-all ease-in-out duration-200 flex flex-row items-center">
  <div>
    <button
      class="p-1 shadow-md rounded text-white hover:bg-white hover:text-gray-950 transition-all ease-in-out duration-200 bg-surface-high"
      aria-label="player options"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    </button>
  </div>
  <div class="flex flex-row text-white p-1 m-1 hover:bg-white bg-st-purple-light rounded cursor-pointer text-xxs items-end">
    View Decklist
  </div>
</div>; */
}

console.log("Yes, your extension is running");

var list;

const intervalId = setInterval(() => {
  var list = document.getElementsByClassName(
    "opacity-100 transition-all ease-in-out duration-200 opacity-100 transition-all ease-in-out duration-200 flex flex-row items-center"
  );

  if (list.length > 0) {
    console.log(`There are ${list.length} list items`);

    for (const item of list) {
      console.log(item);
      item.style.backgroundColor = "white";
    }

    clearInterval(intervalId);
  }
}, 5000);
