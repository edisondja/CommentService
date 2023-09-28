class MetaOgInterface extends HTMLElement{


    constructor(){

        super();
    }


    render() {

        let title_og = this.getAttribute("title");
        let description_og = this.getAttribute("description");
        let img_og = this.getAttribute("image");
            
        
        this.innerHTML = `
      
        <div class="CardMetaOg">
        <a herf='http://localhost/comment_therads'>
            <img src="${img_og}" class="img-card-og"/>
            <div class="og-info">
                 <h5>${title_og}</h5>
                <p>${description_og}</p>
            <div>
            </a>
       </div>
     
       `;
        


    }



    connectedCallback(){

        this.render();

    }



}

customElements.define('meta-og-interface',MetaOgInterface);