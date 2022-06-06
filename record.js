function myFunction(){
    event.preventDefault()
    let name = document.getElementById("name").value
    let id = document.getElementById("employeeID").value
    let dep = document.getElementById("department").value
    let exp = document.getElementById('exp').value
    let email = document.getElementById("email").value
    let mbl = document.getElementById("mbl").value
    let role;
    if(Number(exp)>5){
        role = "Senior"
    }
    if(Number(exp)>=2 && Number(exp)<5){
        role = "Junior"
    }
    if(Number(exp)<=1){
        role = "Fresher"
    }
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    td1.innerText = name;
    let td2 = document.createElement('td')
    td2.innerText = id;
    let td3 = document.createElement('td')
    td3.innerText = dep;
    let td4 = document.createElement('td')
    td4.innerText = exp;
    let td5 = document.createElement('td')
    td5.innerText = email;
    let td6 = document.createElement('td')
    td6.innerText = mbl;
    let td7 = document.createElement('td')
    td7.innerText = role;
    let td8 = document.createElement('td')
    let del = document.createElement('button')
    td8.innerText = "Delete"
    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector('tbody').append(tr)
}

