class Comentario extends HTMLElement{ 

    constructor() {
            super();
    }



    get_comments_child(){



    }


    render(){

        let data_comments_post = this.getAttribute("data");    



        this.innerHTML =`<li class="list-group-item">
        <i class="bi bi-heart-fill" style="float: right;">20</i>
        <i  style="float: right;"  class="bi-reply-fill"></i>
         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"  width="35"/> <strong>Roble</strong> 
        <meta-og-interface  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1Fj30MZtF9Ta32bIoB7jr8h7mCscNmqHxA&usqp=CAU" title="Misterio cuantico" description="tienen que ver esta genialidad"></meta-og-interface>
         los haitianos
        tienen esto en peligro
      
       <ul style="margin: 5px;;">
        
            <li class="list-group-item">
              <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"  width="35"> <strong>David</strong> @Roble los haitianos

                Esta no es la forma correcta
                <i class="bi bi-heart-fill" style="float: right;">20</i>

                <i  style="float: right;"  class="bi-reply-fill"></i>

            </li>
        </ul>
    </li>`;


    } 

    connectedCallback(){

        this.render();

    }



}

customElements.define("comment-views",Comentario);

  