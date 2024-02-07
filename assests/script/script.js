// window.alert("make sure that you are on desktop view") ;
let AddButton = document.getElementById("Addbtn")
let ClientName = document.getElementById("Client_Name");
let UnitNumber = document.getElementById("Unit_Number");
let PermitStartDate = document.getElementById("Permit_Start_Date");
let ExpiredDate = document.getElementById("Expired_Date");
let PermitDescrpition = document.getElementById("Permit_Description");
let CM_Employeee = document.getElementById("CM_Employee")
let fileInput = document.getElementById('pdfInput');
let update = document.getElementById("update");
let Delete = document.getElementById("Delete");
let UserCounter = document.getElementById("user-counter");
let mood = 'create';
let fake_i;


// LocalStroage ----------------------------------------
let ClientData;

if (localStorage.storedData != null) {
    ClientData = JSON.parse(localStorage.storedData);
}
else {
    ClientData = [];
}


// Function to convert a file to a Base64 string
let fileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.onload = function (e) {
        callback(e.target.result);
    };
    reader.readAsDataURL(file);
}


// Function to convert a Base64 string back to a Blob
let base64ToBlob = (base64, mimeType) => {
    const byteString = atob(base64.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
}

let ShowFileInput = (base64String, mimeType, fileName) => {
    let file = new File([base64ToBlob(base64String, mimeType)], fileName, { type: mimeType, lastModified: new Date().getTime() }, 'utf-8');
    let container = new DataTransfer();
    container.items.add(file);
    document.querySelector('#pdfInput').files = container.files;
}

// Create-Function ----------------------------------------
let AddBtn = () => {
    if (ClientName.value != '' && UnitNumber.value != '' && PermitStartDate.value != '' && ExpiredDate.value != '' && PermitDescrpition.value != '' && CM_Employeee.value != '' && fileInput.value != '') {
        let File = fileInput.files[0];
        fileToBase64(File, function (base64String) {
            let ClientInfo = {
                ClientName: ClientName.value.toLowerCase(),
                UnitNumber: UnitNumber.value.toLowerCase(),
                PermitStartDate: PermitStartDate.value.toLowerCase(),
                ExpiredDate: ExpiredDate.value.toLowerCase(),
                PermitDescrpition: PermitDescrpition.value,
                CM_Employeee: CM_Employeee.value,
                fileInput: base64String,
                fileType: File.type,
                fileName: File.name
            };
            if (File) {
                // If a new file is selected, convert it to Base64 and update the file information
                fileToBase64(File, function (base64String) {
                    {
                        ClientInfo.fileInput = base64String;
                        ClientInfo.fileName = File.name;
                        ClientInfo.fileType = File.type;
                        // ... rest of the AddBtn.onclick function
                    }
                });
            }
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
            AddButton.innerHTML = 'Add'
            Clear();
            console.log(ClientData);
            localStorage.setItem('storedData', JSON.stringify(ClientData));
            showData();
        });
    }
    else {
        alert('Please Complete your Data')
    }
}


// Clear ----------------------------------------
let Clear = () => {
    ClientName.value = '';
    UnitNumber.value = '';
    PermitStartDate.value = '';
    ExpiredDate.value = '';
    PermitDescrpition.value = '';
    CM_Employeee.value = '';
    fileInput.value = '';
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
        <td>${ClientData[i].PermitDescrpition}</td>
        <td>${ClientData[i].CM_Employeee}</td>
        <td><button id="openPdf" onclick="openPdf(${i})">View File</button></td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
        console.log(ClientData[i].fileInput);
    }
    document.getElementById("tbody").innerHTML = table;
    let DeleteAllBtn = document.getElementById("deleteallbtn")

    if (ClientData.length > 0) {
        DeleteAllBtn.innerHTML = `<center><button id="DeleteAll" onclick ="DeleteAllData()" >Delete All (${ClientData.length})</button></center>`
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
    localStorage.storedData = JSON.stringify(ClientData);
    showData();
}



// DeleteAll-Data ----------------------------------------
let DeleteAllData = () => {
    let alert = confirm("Are you sure for Delete all data");
    if (alert) {
        ClientData.splice(0);
    }
    localStorage.storedData = JSON.stringify(ClientData);
    showData();
}



// Update-Data ----------------------------------------
let UpdateData = (i) => {
    ClientName.value = ClientData[i].ClientName;
    UnitNumber.value = ClientData[i].UnitNumber;
    PermitStartDate.value = ClientData[i].PermitStartDate;
    ExpiredDate.value = ClientData[i].ExpiredDate;
    PermitDescrpition.value = ClientData[i].PermitDescrpition;
    CM_Employeee.value = ClientData[i].CM_Employeee;
    fileInput.files = ShowFileInput(ClientData[i].fileInput, ClientData[i].fileType, ClientData[i].fileName);
    AddButton.innerText = 'Update'
    mood = 'update'
    fake_i = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
}
console.log(mood);



// Open-pdf ----------------------------------------
let openPdf = (i) => {
    const base64String = ClientData[i].fileInput;
    const mimeType = ClientData[i].fileType;
    const blob = base64ToBlob(base64String, mimeType);
    const fileURL = URL.createObjectURL(blob);
    window.open(fileURL, '_blank');
};



// Search-Mood ----------------------------------------
let searchMood = 'ClientName'

let getSearchMood = (value) => {
    let search = document.getElementById('search')
    if (value == 'search_ClientName') {
        searchMood = 'ClientName';
        search.value = '';
        search.placeholder = 'Search By ClientName '
    }
    if (value == 'search_UnitNumber') {
        searchMood = 'UnitNumber';
        search.value = '';
        search.placeholder = 'Search By UnitNumber '
    }
    if (value == 'search_PermitStartDate') {
        searchMood = 'PermitStartDate';
        search.value = '';
        search.placeholder = 'Search By PermitStartDate '
    }
    if (value == 'search_ExpiredDate') {
        searchMood = 'ExpiredDate';
        search.value = '';
        search.placeholder = 'Search By ExpiredDate '
    }
    search.focus();
    console.log(searchMood);
}


let searchData = (value) => {
    let table = '';
    if (searchMood == 'ClientName') {
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].ClientName.includes(value.toLowerCase())) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${ClientData[i].ClientName}</td>
                <td>${ClientData[i].UnitNumber}</td>
                <td>${ClientData[i].PermitStartDate}</td>
                <td>${ClientData[i].ExpiredDate}</td>
                <td>${ClientData[i].PermitDescrpition}</td>
                <td>${ClientData[i].CM_Employeee}</td>
                <td><button id="openPdf" onclick="openPdf(${i})">View Pdf</button></td>
                <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
                <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
                </tr>
                `;
            }
        }
    }
    if (searchMood == 'UnitNumber') {
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].UnitNumber.includes(value.toLowerCase())) {
                table += `
        <tr>
        <td>${i + 1}</td>
        <td>${ClientData[i].ClientName}</td>
        <td>${ClientData[i].UnitNumber}</td>
        <td>${ClientData[i].PermitStartDate}</td>
        <td>${ClientData[i].ExpiredDate}</td>
        <td>${ClientData[i].PermitDescrpition}</td>
        <td>${ClientData[i].CM_Employeee}</td>
        <td><button id="openPdf" onclick="openPdf(${i})">View Pdf</button></td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    if (searchMood == 'PermitStartDate') {
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
        <td>${ClientData[i].PermitDescrpition}</td>
        <td>${ClientData[i].CM_Employeee}</td>
        <td><button id="openPdf" onclick="openPdf(${i})">View Pdf</button></td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    if (searchMood == 'ExpiredDate') {
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
        <td>${ClientData[i].PermitDescrpition}</td>
        <td>${ClientData[i].CM_Employeee}</td>
        <td><button id="openPdf" onclick="openPdf(${i})">View Pdf</button></td>
        <td><button id="Update" onclick="UpdateData(${i})">update</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >Delete</button></td>
        </tr>
        `;
            }
        }
    }
    document.getElementById("tbody").innerHTML = table;
}
