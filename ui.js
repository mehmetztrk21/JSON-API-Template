class UI{
    constructor(){
        this.profileContainer=document.querySelector("#profileConatiner");
        this.alert=document.querySelector("#alert");
    }

    showProfile(profile){
        this.profileContainer.innerHTML =`
            <div class="card card-body">
            <div class="row">
            <div class="col-md-3">
            <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
            </div>
            <div class="col-md-9>
                <h4>Contact</h4>
                <ul class="list-group>
                <li class="list-group-item">name: ${profile.name}</li>
                <li class="list-group-item">username: ${profile.username}</li>
                <li class="list-group-item">e-mail: ${profile.email}</li>
                <li class="list-group-item">address: ${profile.address.street} ${profile.address.city} ${profile.address.zipcode} ${profile.address.suite}</li>
                <li class="list-group-item">phone: ${profile.phone}</li>
                <li class="list-group-item">company: ${profile.company.name}</li>


                </ul>

                <h4 class="mt-4">Todo List</h4>
                <ul id="todo" class="list-group">

                </ul>
            </div>
            </div>




            </div>
        
        `;
    }

    showAlert(text){
        this.alert.style.display="inline-block";
        this.alert.innerHTML= `${text} adlı kullanıcı bulunamadı.`;
        setTimeout(() => {
            this.alert.style.display="none";
        }, 1000);
    }

    showTodo(todo){
        let html="";
        console.log(todo);
        todo.forEach(item => {
            if(item.completed===true){
                html+=`
                    <li class="list-group-item bg-success">
                        ${item.title}
                    </li>
                `;
            }
            else{

                html+=`
                    <li class="list-group-item bg-danger">
                        ${item.title} dsadsds
                    </li>
                `;
            }
        });

        this.profileContainer.querySelector("#todo").innerHTML=html;

    }



    clear(){
        this.profileContainer.innerHTML="";
        this.alert.innerHTML="";
    }

}