const currentDocument = document.currentScript.ownerDocument;

class ProgressBar extends HTMLElement{
  constructor() {
    super();
  }

  connectedCallback(){
      const shadowRoot = this.attachShadow({mode: 'open'});
      const template= currentDocument.querySelector('#progress-bar-template');
      const instance= template.content.cloneNode(true);
      shadowRoot.appendChild(instance);
      const status=this.getAttribute('id-status');
      this.shadowRoot.querySelector('#myBar').className=status;
      this.shadowRoot.querySelector('#type').innerHTML=status==null?'':status.toUpperCase();

      this.shadowRoot.querySelector('#type').addEventListener('click',e => {
        this.move();
      });
  }

  move() {
    let elem = this.shadowRoot.querySelector('#myBar');
    let elem1 = this.shadowRoot.querySelector('#progress');
    elem.className=this.getAttribute('id-status');
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem1.innerHTML = width + '%';
      }
    }
  }
}

customElements.define('progress-bar',ProgressBar);
