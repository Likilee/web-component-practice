export default class CustomCounter extends HTMLElement {
  static get observedAttributes() { return ['count']; }

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    // props
    // console.log('생성자', this, this.count, this.getAttribute("count"));
    // this.count = this.getAttribute("count") ?? 0;
    // this.setAttribute("count", this.count);
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

  render() {
    this.shadowRoot.getElementById("count").innerText = this.count;
  }

  handleIncrease(e) {
    this.count++;
    const countElement = this.shadowRoot.getElementById("count");
    countElement.innerText = this.count;
    this.dispatchCountChange();
  }
  handleDecrease() {
    this.count--;
    const countElement = this.shadowRoot.getElementById("count");
    countElement.innerText = this.count;
    this.dispatchCountChange();
  }

  dispatchCountChange() {
   const event = new CustomEvent('count-change', {
     detail: {count: this.count},
   });
   this.dispatchEvent(event);
  }

  connectedCallback() {
    // console.log('connectedCallback', this, this.count, this.getAttribute("count"));
    // this.count = this.getAttribute("count");
    this.render();
  }


  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
    if (name === 'count') {
      this.count = newValue;
    }
    this.render();
  }
}

// customElements.define("custom-counter", CustomCounter);
