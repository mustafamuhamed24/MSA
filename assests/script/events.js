// window.alert("make sure that you are on desktop view") ;
let AddButton = document.getElementById("Addbtn")
let ClientName = document.getElementById("Client_Name");
let UnitNumber = document.getElementById("Unit_Number");
let PermitStartDate = document.getElementById("Permit_Start_Date");
let ExpiredDate = document.getElementById("Expired_Date");
let PermitDescrpition = document.getElementById("Permit_Description");
let main_sector = document.getElementById("Main-Sector")
let sub_sector = document.getElementById("Sub-Sector");
let group = document.getElementById("Group")
let arranging = document.getElementById("arranging")
let update = document.getElementById("update");
let Delete = document.getElementById("Delete");
let UserCounter = document.getElementById("user-counter");
let mood = 'create';
let fake_i;


// LocalStroage ----------------------------------------
let ClientData;

if (localStorage.EventData != null) {
    ClientData = JSON.parse(localStorage.EventData);
}
else {
    ClientData = [];
}

// Create-Function ----------------------------------------
let AddBtn = () => {
    if (ClientName.value != '' && UnitNumber.value != '' && PermitStartDate.value != '' && ExpiredDate.value != '' && arranging != '' && main_sector != '' && sub_sector != '' && group != '') {
        let ClientInfo = {
            ClientName: ClientName.value.toLowerCase(),
            UnitNumber: UnitNumber.value.toLowerCase(),
            PermitStartDate: PermitStartDate.value.toLowerCase(),
            ExpiredDate: ExpiredDate.value.toLowerCase(),
            arranging : arranging.value.toLowerCase(),
            main_sector: main_sector.options[main_sector.selectedIndex].value,
            sub_sector:  sub_sector.options[sub_sector.selectedIndex].value,
            group: group.options[group.selectedIndex].value,
        };
        if (mood == 'create') {
            if (ClientInfo > 1) {
                for (let i = 0; i < ClientInfo; i++) {
                    ClientData.push(ClientInfo);
                }
            }
            else {
                ClientData.push(ClientInfo);
            }
        }
        ClientData[fake_i] = ClientInfo
        mood = 'create'
        AddButton.innerHTML = 'اضافة'
        Clear();
        console.log(ClientData);
        localStorage.setItem('EventData', JSON.stringify(ClientData));
        showData();
    }
    else {
        alert('برجاء اكمال ادخال البيانات ')
    }
}


// Clear ----------------------------------------
let Clear = () => {
    ClientName.value = '';
    UnitNumber.value = '';
    PermitStartDate.value = '';
    ExpiredDate.value = '';
    arranging.value = '';
    main_sector.value = '';
    sub_sector.value = '';
    group.value = '';
}



// ShowData ----------------------------------------
let showData = () => {
    let table = '';
    for (let i = 0; i < ClientData.length; i++) {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${ClientData[i].ClientName}</td>
        <td>${ClientData[i].UnitNumber}</td>
        <td>${ClientData[i].PermitStartDate}</td>
        <td>${ClientData[i].ExpiredDate}</td>
        <td>${ClientData[i].arranging}</td>
        <td>${ClientData[i].main_sector}</td>
        <td>${ClientData[i].sub_sector}</td>
        <td>${ClientData[i].group}</td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
        console.log(ClientData[i].fileInput);
    }
    document.getElementById("tbody").innerHTML = table;
    let DeleteAllBtn = document.getElementById("deleteallbtn")

    if (ClientData.length > 0) {
        DeleteAllBtn.innerHTML = `<center><button id="DeleteAll" onclick ="DeleteAllData()" >حذف الكل (${ClientData.length})</button></center>`
    }
    else {
        DeleteAllBtn.innerHTML = ''
    }
}
showData();
console.log(ClientData);




// Delete-Data ----------------------------------------
let DeleteData = (i) => {
    ClientData.splice(i, 1);
    localStorage.EventData = JSON.stringify(ClientData);
    showData();
}



// DeleteAll-Data ----------------------------------------
let DeleteAllData = () => {
    let alert = confirm("هل انت متأكد من حذف جميع البيانات");
    if (alert) {
        ClientData.splice(0);
    }
    localStorage.EventData = JSON.stringify(ClientData);
    showData();
}


// ReportsList ----------------------------------------
let r_eportList = () => {
    $("#visible-list").css('visibility', 'visible');
    $("#visible-list").css('color', 'red');
    $("#visible-list").toggle("#visible-list");
}




// Update-Data ----------------------------------------
let UpdateData = (i) => {
    ClientName.value = ClientData[i].ClientName;
    UnitNumber.value = ClientData[i].UnitNumber;
    PermitStartDate.value = ClientData[i].PermitStartDate;
    ExpiredDate.value = ClientData[i].ExpiredDate;
    arranging.value = ClientData[i].arranging
    main_sector.value = ClientData[i].main_sector;
    sub_sector.value = ClientData[i].sub_sector;
    group.value = ClientData[i].group;
    AddButton.innerText = 'تحديث'
    mood = 'update'
    fake_i = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}
console.log(mood);


// Search-Mood ----------------------------------------
let SearchMood = 'Location'

let GetSearchMood = (value) => {
    let search = document.getElementById('search')
    if (value == 'search_ClientName') {
        searchMood = 'ClientName';
        search.value = '';
        search.placeholder = 'البحث بالقطاع الفرعى'
    }
    if (value == 'search_CM_Employee') {
        searchMood = 'CM_Employee';
        search.value = '';
        search.placeholder = 'البحث بالقطاع الرئيسى'
    }
    if (value == 'بحث بالعنوان ') {
        SearchMood = 'Location';
        search.value = '';
        search.placeholder = 'Search By Location '
    }
    if (value == 'بحث بتاريخ الاصدار') {
        SearchMood = 'StartDate';
        search.value = '';
        search.placeholder = 'بحث بتاريخ الاصدار'
    }
    if (value == 'بحث بتاريخ الانتهاء') {
        SearchMood = 'ExpiredDate';
        search.value = '';
        search.placeholder = 'بحث بتاريخ الانتهاء'
    }
    search.focus();
    console.log(searchMood);
}


let SearchData = (value) => {
    let table = '';
    if (SearchMood == 'Location') {
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].ClientName.includes(value.toLowerCase())) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${ClientData[i].ClientName}</td>
                <td>${ClientData[i].UnitNumber}</td>
                <td>${ClientData[i].PermitStartDate}</td>
                <td>${ClientData[i].ExpiredDate}</td>
                <td>${ClientData[i].arranging}</td>
                <td>${ClientData[i].main_sector}</td>
                <td>${ClientData[i].sub_sector}</td>
                <td>${ClientData[i].group}</td>
                <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
                <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
                </tr>
                `;
            }
        }
    }
    if (SearchMood == 'Content') {
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].UnitNumber.includes(value.toLowerCase())) {
                table += `
        <tr>
        <td>${i + 1}</td>
        <td>${ClientData[i].ClientName}</td>
        <td>${ClientData[i].UnitNumber}</td>
        <td>${ClientData[i].PermitStartDate}</td>
        <td>${ClientData[i].ExpiredDate}</td>
        <td>${ClientData[i].arranging}</td>
        <td>${ClientData[i].main_sector}</td>
        <td>${ClientData[i].sub_sector}</td>
        <td>${ClientData[i].group}</td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    if (SearchMood == 'StartDate') {
        document.getElementById("tbody").innerHTML = table;
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].PermitStartDate.includes(value.toLowerCase())) {
                table += `
        <tr>
        <td>${i + 1}</td>
        <td>${ClientData[i].ClientName}</td>
        <td>${ClientData[i].UnitNumber}</td>
        <td>${ClientData[i].PermitStartDate}</td>
        <td>${ClientData[i].ExpiredDate}</td>
        <td>${ClientData[i].arranging}</td>
        <td>${ClientData[i].main_sector}</td>
        <td>${ClientData[i].sub_sector}</td>
        <td>${ClientData[i].group}</td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    if (SearchMood == 'ExpiredDate') {
        document.getElementById("tbody").innerHTML = table;
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].ExpiredDate.includes(value.toLowerCase())) {
                table += `
        <tr>
        <td>${i + 1}</td>
        <td>${ClientData[i].ClientName}</td>
        <td>${ClientData[i].UnitNumber}</td>
        <td>${ClientData[i].PermitStartDate}</td>
        <td>${ClientData[i].ExpiredDate}</td>
        <td>${ClientData[i].arranging}</td>
        <td>${ClientData[i].main_sector}</td>
        <td>${ClientData[i].sub_sector}</td>
        <td>${ClientData[i].group}</td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    document.getElementById("tbody").innerHTML = table;
}
