class BarComent extends HTMLElement{


    constructor(){
        super();
    }
    static get observedAttributes() {
        return ['img_profile', 'username'];
      }
    
      // Se llama cuando un atributo observado cambia
      attributeChangedCallback(attr, oldValue, newValue) {
        if (attr === 'titulo') {
          this.render();
        }
        if (attr === 'descripcion') {
          this.render();
        }
      }


    render(){
        let img = this.getAttribute("img_profile");
        let username = this.getAttribute("username");
         this.innerHTML  =`
                <div class="flex-box fixed-bottom">
                <img class="style_profile_comment" src="${img}"  width="35">
                <textarea name="" class="comment_message" id="" cols="" rows="2"></textarea> 
                <i style="font-size: 25px; cursor: pointer;"  class="bi bi-send"></i>
                    </div>
        `;

    }

    connectedCallback(){

        this.render();
     
    }


}

customElements.define("comment-interface-send",BarComent);