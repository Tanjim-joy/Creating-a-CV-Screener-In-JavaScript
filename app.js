console.log(`Hellow Programmers`);

let next = document.getElementById('nxt');
next.addEventListener('click', Showprofile);

Showprofile();

function Showprofile(e){
    // console.log(`It's Working Bro`);
    e.preventDefault();

    let pro = new  XMLHttpRequest();

    pro.open('GET', 'https://randomuser.me/api/', true);
    pro.getResponseHeader("Accpet", "application/json");

    pro.onload = function (){
        let x = JSON.parse(this.responseText);

        let xx =  x[`results`];

        let All = document.getElementById('profile');
        let str ='';
        

            for(key in xx){
                // str += `<li>${xx[key].name.title}</li>
                // <li>${xx[key].location.street.name}</li>
                // <li>${xx[key].location.city}</li>
                // <li>${xx[key].location.country}</li>
                // <li>${xx[key].email}</li>
                // <li>${xx[key].dob.age}</li>
                // <li>${xx[key].picture.medium}</li>
                // `
               str+=` <div class="card border-success mx-auto mb-3" style="max-width: 20rem;">
                        <div class="card-header"><img src='${xx[key].picture.large}' class="rounded-circle"></div>
                            <div class="card-body">
                            <h4 class="card-title">${xx[key].name.title} ${xx[key].name.first} ${xx[key].name.last} (${xx[key].dob.age})</h4>
                            Gender : ${xx[key].gender} <br>
                            City : ${xx[key].location.city}<br>
                            Country : ${xx[key].location.country}<br>
                            Street Name : ${xx[key].location.street.name} (${xx[key].location.street.number})<br>
                            email : ${xx[key].email} <br>
                            
                            Phone Number : ${xx[key].phone} <br>
                            
                            
                            </p>
                        </div>
            
                    </div>`
        }
        
    
        All.innerHTML = str;

    }
    pro.send();
    // window.location.reload();
}