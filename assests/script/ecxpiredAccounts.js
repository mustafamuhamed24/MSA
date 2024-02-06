const currentDate = new Date();
// Get year, month, and day components
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
const day = currentDate.getDate();
// Format into a string
const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
let stringDate = formattedDate.toString();
console.log(typeof stringDate); // Output example: "2024-02-06"


//Expired Accounts -----------------------
let ExpiredAcc = () => {
    let table = '';
    let exTable = '';
    for (let i = 0; i < ClientData.length; i++) {
        if (stringDate == ClientData[i].ExpiredDate) {
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
        </tr>
        `;
        }
    }
    if (table == '') {
        exTable += `<center><h1 style="color:red;margin-top=10px;">We Dont Have Expired Permits Today</h1></center>`
    }
    document.getElementById("ex-warning").innerHTML = exTable;
    document.getElementById("expired-tbody").innerHTML = table;
}
ExpiredAcc();


// Search-Mood ----------------------------------------
let SearchMood = 'ClientName'

let GetSearchMood = (value) => {
    let search = document.getElementById('search')
    if (value == 'search_ClientName') {
        SearchMood = 'ClientName';
        search.value = '';
        search.placeholder = 'Search By ClientName '
    }
    if (value == 'search_UnitNumber') {
        SearchMood = 'UnitNumber';
        search.value = '';
        search.placeholder = 'Search By UnitNumber '
    }
    if (value == 'search_PermitStartDate') {
        searchMood = 'PermitStartDate';
        search.value = '';
        search.placeholder = 'Search By PermitStartDate '
    }
    if (value == 'search_ExpiredDate') {
        SearchMood = 'ExpiredDate';
        search.value = '';
        search.placeholder = 'Search By ExpiredDate '
    }
    search.focus();
    console.log(SearchMood);
}


let SearchData = (value) => {
    let table = '';
    if (SearchMood == 'ClientName') {
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
                </tr>
                `;
            }
        }
    }
    if (SearchMood == 'UnitNumber') {
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
        </tr>
        `;
            }
        }
    }
    if (SearchMood == 'PermitStartDate') {
        document.getElementById("expired-tbody").innerHTML = table;
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
        </tr>
        `;
            }
        }
    }
    if (SearchMood == 'ExpiredDate') {
        document.getElementById("expired-tbody").innerHTML = table;
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
        </tr>
        `;
            }
        }
    }
    document.getElementById("expired-tbody").innerHTML = table;
}




