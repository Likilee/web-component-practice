export default class CustomCounter extends HTMLElement {
  count;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    // props
    this.count = this.getAttribute("count") ?? 0;

    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");

    const divElement = document.createElement("div");

    const pTag = document.createElement("p");
    pTag.innerText = "counter: ";

    const countElement = document.createElement("p");
    countElement.setAttribute("id", "count");
    countElement.innerText = this.count;

    const upButton = document.createElement("button");
    upButton.innerText = "up";
    upButton.setAttribute("id", "up-button");
    upButton.addEventListener("click", this.handleIncrease.bind(this));

    const downButton = document.createElement("button");
    downButton.innerText = "down";
    downButton.setAttribute("id", "down-button");
    downButton.addEventListener("click", this.handleDecrease.bind(this));

    divElement.appendChild(pTag);
    divElement.appendChild(countElement);
    wrapper.appendChild(divElement);
    wrapper.appendChild(upButton);
    wrapper.appendChild(downButton);

    shadow.appendChild(wrapper);
  }

  handleIncrease(e) {
    this.count++;
    const countElement = this.shadowRoot.getElementById("count");
    countElement.innerText = this.count;
  }
  handleDecrease() {
    this.count--;
    const countElement = this.shadowRoot.getElementById("count");
    countElement.innerText = this.count;
  }
}

// customElements.define("custom-counter", CustomCounter);
