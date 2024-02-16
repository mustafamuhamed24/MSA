// window.alert("make sure that you are on desktop view") ;
let AddButton = document.getElementById("Addbtn");
let leaveType = document.getElementById("Leave-type");
let EndType = document.getElementById("End-type");
let Sector = document.getElementById("Sector");
let UnitNumber = document.getElementById("Unit_Number");
let Unit_Number_Input = document.getElementById("Unit_Number_Input");
let PermitStartDate = document.getElementById("Permit_Start_Date");
let ExpiredDate = document.getElementById("Expired_Date");
let update = document.getElementById("update");
let Delete = document.getElementById("Delete");
let UserCounter = document.getElementById("user-counter");
let mood = 'create';
let fake_i;
let ListItems = UnitNumber.getElementsByTagName("li")

const sectors = ["Catania", "Arezzo", "Verona", "Vectoria", "Isola", "Valencia", "Veneto", "Safi 1",
    "Safi 2", "Verdi", "Blanca", "Marina Residences R1", "Marina Residences R2", "The Address Beach",
    "Veneto 2", "Village Celia", "Marina West", "Riva", "Village Greek", "Salerno(H)"];

const Catania = [
    "A1-1-01", "A1-1-02", "A1-2-01", "A1-2-02", "A1-3-01", "A1-3-02", "A1-3-03", "A1-4-01", "A1-4-02", "A1-4-03",
    "A1-G-01", "A1-G-02", "A2-1-01", "A2-1-02", "A2-2-01", "A2-2-02", "A2-3-01", "A2-3-02", "A2-3-03", "A2-4-01",
    "A2-4-02", "A2-4-03", "A2-G-01", "A2-G-02", "A3-1-01", "A3-1-02", "A3-2-01", "A3-2-02", "A3-3-01", "A3-3-02",
    "A3-3-03", "A3-4-01", "A3-4-02", "A3-4-03", "A3-G-01", "A3-G-02", "A4-1-01", "A4-1-02", "A4-2-01", "A4-2-02",
    "A4-3-01", "A4-3-02", "A4-3-03", "A4-4-01", "A4-4-02", "A4-4-03", "A4-G-01", "A4-G-02", "A5-1-01", "A5-1-02",
    "A5-2-01", "A5-2-02", "A5-3-01", "A5-3-02", "A5-3-03", "A5-4-01", "A5-4-02", "A5-4-03", "A5-G-01", "A5-G-02",
    "A6-1-01", "A6-1-02", "A6-2-01", "A6-2-02", "A6-3-01", "A6-3-02", "A6-3-03", "A6-4-01", "A6-4-02", "A6-4-03",
    "A6-G-01", "A6-G-02", "B1-1-01", "B1-1-02", "B1-2-01", "B1-2-02", "B1-3-01", "B1-3-02", "B1-G-01", "B1-G-02",
    "B2-1-01", "B2-1-02", "B2-2-01", "B2-2-02", "B2-3-01", "B2-3-02", "B2-G-01", "B2-G-02", "B3-1-01", "B3-1-02",
    "B3-1-03", "B3-1-04", "B3-2-01", "B3-2-02", "B3-2-03", "B3-2-04", "B3-3-01", "B3-3-02", "B3-3-03", "B3-3-04",
    "B3-G-01", "B3-G-02", "B3-G-03", "B3-G-04", "B4-1-01", "B4-1-02", "B4-2-01", "B4-2-02", "B4-3-01", "B4-3-02",
    "B4-G-01", "B4-G-02", "B5-1-01", "B5-1-02", "B5-2-01", "B5-2-02", "B5-3-01", "B5-3-02", "B5-G-01", "B5-G-02",
    "C1-1-01", "C1-1-02", "C1-2-01", "C1-2-02", "C1-3-01", "C1-3-02", "C1-3-03", "C1-4-01", "C1-4-02", "C1-4-03",
    "C1-G-01", "C1-G-02", "C2-1-01", "C2-1-02", "C2-2-01", "C2-2-02", "C2-3-01", "C2-3-02", "C2-3-03", "C2-4-01",
    "C2-4-02", "C2-4-03", "C2-G-01", "C2-G-02", "C3-1-01", "C3-1-02", "C3-2-01", "C3-2-02", "C3-3-01", "C3-3-02",
    "C3-G-01", "C3-G-02", "C4-1-01", "C4-1-02", "C4-2-01", "C4-2-02", "C4-3-01", "C4-3-02", "C4-G-01", "C4-G-02",
    "C5-1-01", "C5-1-02", "C5-2-01", "C5-2-02", "C5-3-01", "C5-3-02", "C5-G-01", "C5-G-02", "C6-1-01", "C6-1-02",
    "C6-2-01", "C6-2-02", "C6-3-01", "C6-3-02", "C6-G-01", "C6-G-02", "C7-1-01", "C7-1-02", "C7-2-01", "C7-2-02",
    "C7-3-01", "C7-3-02", "C7-G-01", "C7-G-02", "C8-1-01", "C8-1-02", "C8-2-01", "C8-2-02", "C8-3-01", "C8-3-02",
    "C8-4-01", "C8-4-02", "C8-G-01", "C8-G-02", "D1-1-01", "D1-1-02", "D1-2-01", "D1-2-02", "D1-3-01", "D1-3-02",
    "D1-3-03", "D1-4-01", "D1-4-02", "D1-4-03", "D1-G-01", "D1-G-02", "D2-1-01", "D2-1-02", "D2-2-01", "D2-2-02",
    "D2-3-01", "D2-3-02", "D2-3-03", "D2-4-01", "D2-4-02", "D2-4-03", "D2-G-01", "D2-G-02", "D3-1-01", "D3-1-02",
    "D3-2-01", "D3-2-02", "D3-3-01", "D3-3-02", "D3-4-01", "D3-4-02", "D3-G-01", "D3-G-02", "D4-1-01", "D4-1-02",
    "D4-2-01", "D4-2-02", "D4-3-01", "D4-3-02", "D4-4-01", "D4-4-02", "D4-G-01", "D4-G-02", "D5-1-01", "D5-1-02",
    "D5-2-01", "D5-2-02", "D5-3-01", "D5-3-02", "D5-4-01", "D5-4-02", "D5-G-01", "D5-G-02", "D6-1-01", "D6-1-02",
    "D6-2-01", "D6-2-02", "D6-3-01", "D6-3-02", "D6-4-01", "D6-4-02", "D6-G-01", "D6-G-02", "D7-1-01", "D7-1-02",
    "D7-2-01", "D7-2-02", "D7-3-01", "D7-3-02", "D7-4-01", "D7-4-02", "D7-G-01", "D7-G-02", "D8-1-01", "D8-1-02",
    "D8-2-01", "D8-2-02", "D8-3-01", "D8-3-02", "D8-4-01", "D8-4-02", "D8-G-01", "D8-G-02", "D9-1-01", "D9-1-02",
    "D9-1-03", "D9-1-04", "D9-2-01", "D9-2-02", "D9-2-03", "D9-2-04", "D9-3-01", "D9-3-02", "D9-3-03", "D9-3-04",
    "D9-G-01", "D9-G-02", "D9-G-03", "D9-G-04", "E1-1-01", "E1-1-02", "E1-1-03", "E1-1-04", "E1-2-01", "E1-2-02",
    "E1-2-03", "E1-2-04", "E1-3-01", "E1-3-02", "E1-3-03", "E1-3-04", "E1-G-01", "E1-G-02", "E1-G-02", "E1-G-03",
    "E1-G-04", "E2-1-01", "E2-1-02", "E2-2-01", "E2-2-02", "E2-3-01", "E2-3-02", "E2-4-01", "E2-4-02",
    "E2-G-01", "E2-G-02", "E3-1-01", "E3-1-02", "E3-2-01", "E3-2-02", "E3-3-01", "E3-3-02", "E3-4-01", "E3-4-02",
    "E3-G-01", "E3-G-02", "E4-1-01", "E4-1-02", "E4-2-01", "E4-2-02", "E4-3-01", "E4-3-02", "E4-G-01", "E4-G-02",
    "E5-1-01", "E5-1-02", "E5-2-01", "E5-2-02", "E5-3-01", "E5-3-02", "E5-4-01", "E5-4-02", "E5-G-01", "E5-G-02",
    "E6-1-01", "E6-1-02", "E6-2-01", "E6-2-02", "E6-3-01", "E6-3-02", "E6-4-01", "E6-4-02", "E6-G-01", "E6-G-02",
    "E7-1-01", "E7-1-02", "E7-2-01", "E7-2-02", "E7-3-01", "E7-3-02", "E7-4-01", "E7-4-02", "E7-G-01", "E7-G-02",
    "F1-1-01", "F1-1-02", "F1-2-01", "F1-2-02", "F1-3-01", "F1-3-02", "F1-G-01", "F1-G-02", "F2-1-01", "F2-1-02",
    "F2-2-01", "F2-2-02", "F2-3-01", "F2-3-02", "F2-G-01", "F2-G-02", "F3-1-01", "F3-1-02", "F3-2-01", "F3-2-02",
    "F3-3-01", "F3-3-02", "F3-G-01", "F3-G-02", "F4-1-01", "F4-1-02", "F4-2-01", "F4-2-02", "F4-3-01", "F4-3-02",
    "F4-G-01", "F4-G-02", "F5-1-01", "F5-1-02", "F5-2-01", "F5-2-02", "F5-3-01", "F5-3-02", "F5-4-01", "F5-4-02",
    "F5-G-01", "F5-G-02", "F6-1-01", "F6-1-02", "F6-2-01", "F6-2-02", "F6-3-01", "F6-3-02", "F6-4-01", "F6-4-02",
    "F6-G-01", "F6-G-02", "G1-1-01", "G1-1-02", "G1-2-01", "G1-2-02", "G1-3-01", "G1-3-02", "G1-4-01", "G1-4-02",
    "G1-G-01", "G1-G-02", "G2-1-01", "G2-1-02", "G2-2-01", "G2-2-02", "G2-3-01", "G2-3-02", "G2-4-01", "G2-4-02",
    "G2-G-01", "G2-G-02", "G3-1-01", "G3-1-02", "G3-2-01", "G3-2-02", "G3-3-01", "G3-3-02", "G3-G-01", "G3-G-02",
    "G4-1-01", "G4-1-02", "G4-2-01", "G4-2-02", "G4-3-01", "G4-3-02", "G4-G-01", "G4-G-02", "G5-1-01", "G5-1-02",
    "G5-2-01", "G5-2-02", "G5-3-01", "G5-3-02", "G5-G-01", "G5-G-02", "G6-1-01", "G6-1-02", "G6-2-01", "G6-2-02",
    "G6-3-01", "G6-3-02", "G6-G-01", "G6-G-02", "G7-1-01", "G7-1-02", "G7-2-01", "G7-2-02", "G7-3-01", "G7-3-02",
    "G7-4-01", "G7-4-02", "G7-G-01", "G7-G-02", "G8-1-01", "G8-1-02", "G8-2-01", "G8-2-02", "G8-3-01", "G8-3-02",
    "G8-4-01", "G8-4-02", "G8-G-01", "G8-G-02", "H10-1-01", "H10-1-02", "H10-2-01", "H10-2-02", "H10-3-01",
    "H10-3-02", "H10-G-01", "H10-G-02", "H1-1-01", "H1-1-02", "H1-2-01", "H2-G-02", "H3-1-01", "H3-1-02", "H3-2-01",
    "H3-2-02", "H3-3-01", "H3-3-02", "H3-G-01", "H3-G-02", "H4-1-01", "H4-1-02", "H4-2-01", "H4-2-02", "H4-3-01", "H4-3-02",
    "H4-G-01", "H4-G-02", "H5-1-01", "H5-1-02", "H5-2-01", "H5-2-02", "H5-3-01", "H5-3-02", "H5-G-01", "H5-G-02", "H6-1-01", "H6-1-02",
    "H6-2-01", "H6-2-02", "H6-3-01", "H6-3-02", "H6-G-01", "H6-G-02", "H7-1-01", "H7-1-02", "H7-2-01", "H7-2-02", "H7-3-01",
    "H7-3-02", "H7-G-01", "H7-G-02", "H8-1-01", "H8-1-02", "H8-2-01", "H8-2-02", "H8-3-01", "H8-3-02", "H8-G-01",
    "H8-G-02", "H9-1-01", "H9-1-02", "H9-2-01", "H9-2-02", "H9-3-01", "H9-3-02", "H9-G-01", "H9-G-02"
]
const Arezzo = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60",
    "61", "62", "63", "64",
    "V-Arezzo-65", "V-Arezzo-66", "V-Arezzo-67", "V-Arezzo-68", "V-Arezzo-69",
    "V-Arezzo-70", "V-Arezzo-71", "V-Arezzo-72", "V-Arezzo-73", "V-Arezzo-74",
    "V-Arezzo-75", "V-Arezzo-76", "V-Arezzo-77", "V-Arezzo-78", "V-Arezzo-79",
    "V-Arezzo-80", "V-Arezzo-81", "V-Arezzo-82", "V-Arezzo-83", "V-Arezzo-84",
    "V-Arezzo-85", "V-Arezzo-86", "V-Arezzo-87", "V-Arezzo-88", "V-Arezzo-89",
    "V-Arezzo-90", "V-Arezzo-91", "V-Arezzo-92", "V-Arezzo-93", "V-Arezzo-94",
    "V-Arezzo-95", "V-Arezzo-96", "V-Arezzo-97", "V-Arezzo-98", "V-Arezzo-99",
    "V-Arezzo-100", "V-Arezzo-101", "V-Arezzo-102", "V-Arezzo-103", "V-Arezzo-104",
    "V-Arezzo-105", "V-Arezzo-106", "V-Arezzo-107", "V-Arezzo-108", "V-Arezzo-109",
    "V-Arezzo-110", "V-Arezzo-111", "V-Arezzo-112", "V-Arezzo-113", "V-Arezzo-114",
    "V-Arezzo-115", "V-Arezzo-116", "V-Arezzo-117", "V-Arezzo-118", "V-Arezzo-119",
    "V-Arezzo-120", "V-Arezzo-121", "V-Arezzo-122", "V-Arezzo-123", "V-Arezzo-124",
    "V-Arezzo-125", "V-Arezzo-126", "V-Arezzo-127", "V-Arezzo-128", "V-Arezzo-129",
    "V-Arezzo-130", "V-Arezzo-131", "V-Arezzo-132", "V-Arezzo-133", "V-Arezzo-134",
    "V-Arezzo-135", "V-Arezzo-136", "V-Arezzo-137", "V-Arezzo-138", "V-Arezzo-139",
    "V-Arezzo-140", "V-Arezzo-141", "V-Arezzo-142", "V-Arezzo-143", "V-Arezzo-144",
    "V-Arezzo-145", "V-Arezzo-146", "V-Arezzo-147", "V-Arezzo-148", "V-Arezzo-149",
    "V-Arezzo-150", "V-Arezzo-151", "V-Arezzo-152", "V-Arezzo-153", "V-Arezzo-154",
    "V-Arezzo-155", "V-Arezzo-156", "V-Arezzo-157", "V-Arezzo-158", "V-Arezzo-159",
    "V-Arezzo-160", "V-Arezzo-161", "V-Arezzo-162", "V-Arezzo-163", "V-Arezzo-164",
    "V-Arezzo-165", "V-Arezzo-166", "V-Arezzo-167", "V-Arezzo-168", "V-Arezzo-169",
    "V-Arezzo-170"
];
const Verona = [
    "35", "36", "37", "38", "39", "40", "41", "42", "43", "44",
    "45", "46", "47", "48", "49", "50", "51", "52", "53", "54",
    "55", "56", "57", "58", "59", "60", "61", "62", "63", "64",
    "65", "66", "67", "68", "69", "70", "71", "72", "73", "74",
    "75", "76", "77", "78", "79", "80", "81", "82", "83", "84",
    "85", "86", "87", "88", "89", "90", "91", "92", "93", "94",
    "95", "96", "97", "98", "99", "100", "101", "102", "103", "104",
    "105", "106", "107", "108", "109", "110", "111", "112", "113", "114",
    "115", "116", "117", "118", "119", "120", "121", "122", "123", "124",
    "125", "126", "127", "128", "129", "130", "131", "132", "133", "134",
    "151", "152", "153", "154", "155", "156", "157", "158", "159", "160",
    "161", "162", "163", "164", "165", "166", "167", "168", "169", "170",
    "171", "172", "173", "174", "175", "176", "177", "178", "179", "180",
    "181", "182", "183", "184", "185", "186", "187", "188", "189", "190",
    "191", "192", "193", "194", "195", "201", "202", "203", "204", "205",
    "206", "207", "208", "209", "210", "211", "212", "213", "214", "215",
    "216", "217", "218", "219", "220", "221", "222", "223", "224", "225",
    "226", "227", "228", "229", "230", "231", "232", "233", "234", "235",
    "236", "237", "290", "291", "292", "293", "294", "295", "296", "297",
    "298", "299", "300", "301", "302", "317", "318", "319", "320", "321",
    "322", "323", "324", "325", "326", "327", "328", "329", "330", "331",
    "332", "333", "334", "335", "336", "337", "338", "339", "340", "341",
    "342", "353", "354", "355", "356", "357", "358", "359", "360", "361",
    "362", "363", "364", "365", "366", "367", "368", "369", "370", "371",
    "372", "373", "374", "375", "376", "377", "378", "379", "380", "381",
    "382", "383", "384", "385", "386", "387", "388", "389", "390", "391",
    "392", "393", "394", "395", "396", "397", "398", "399", "400", "401",
    "402", "403", "404", "405", "406", "407", "408", "409", "410", "411",
    "412", "413", "414", "415", "416", "417", "418", "419", "420", "421",
    "422", "423", "424", "425", "426", "427", "428", "429", "430", "431",
    "432", "433", "434", "435", "436", "437", "438", "439", "440", "441",
    "442", "443", "444", "445", "446", "447", "448"
];
const Vectoria = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"
    , "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "46",
    "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67",
    "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88",
    "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108",
    "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126",
    "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144",
    "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162",
    "163", "164", "165", "166", "167", "168", "169", "170"
]
const Isola = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24",
    "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "57",
    "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74",
    "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91",
    "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107",
    "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122",
    "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137",
    "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152",
    "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167",
    "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182",
    "183", "184", "185", "186", "187", "188", "189"];
const Valencia = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70"
];
const Veneto = [
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58",
    "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78",
    "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98"
];
const Safi1 = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"
];
const Safi2 = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
    "40", "41", "42", "43", "44", "45", "46", "47", "48"
];
const Verdi = [
    "10E-1-1", "10E-1-2", "10E-1-3", "10E-1-4", "10E-2-2", "10E-2-3", "10E-G-1", "10E-G-2", "10E-G-3", "10E-G-4",
    "11F-1-1", "11F-1-2", "11F-1-3", "11F-1-4", "11F-1-5", "11F-1-6", "11F-2-1", "11F-2-2", "11F-2-3", "11F-2-4",
    "11F-3-1", "11F-3-4", "11F-G-1", "11F-G-2", "11F-G-3", "11F-G-4", "11F-G-5", "11F-G-6", "12E-1-1", "12E-1-2",
    "12E-1-3", "12E-1-4", "12E-2-2", "12E-2-3", "12E-G-1", "12E-G-2", "12E-G-3", "12E-G-4", "13F-1-1", "13F-1-2",
    "13F-1-3", "13F-1-4", "13F-1-5", "13F-1-6", "13F-2-1", "13F-2-2", "13F-2-3", "13F-2-4", "13F-3-1", "13F-3-4",
    "13F-G-1", "13F-G-2", "13F-G-3", "13F-G-4", "13F-G-5", "13F-G-6", "14F-1-1", "14F-1-2", "14F-1-3", "14F-1-4",
    "14F-1-5", "14F-1-6", "14F-2-1", "14F-2-2", "14F-2-3", "14F-2-4", "14F-3-1", "14F-3-4", "14F-G-1", "14F-G-2",
    "14F-G-3", "14F-G-4", "14F-G-5", "14F-G-6", "15E-1-1", "15E-1-2", "15E-1-3", "15E-1-4", "15E-2-2", "15E-2-3",
    "15E-G-1", "15E-G-2", "15E-G-3", "15E-G-4", "16G-1-1", "16G-1-2", "16G-1-3", "16G-1-4", "16G-1-5", "16G-1-6",
    "16G-2-1", "16G-2-2", "16G-2-3", "16G-2-4", "16G-3-1", "16G-3-4", "16G-G-1", "16G-G-2", "16G-G-3", "16G-G-4",
    "16G-G-5", "16G-G-6", "17E-1-1", "17E-1-2", "17E-1-3", "17E-1-4", "17E-2-2", "17E-2-3", "17E-G-1", "17E-G-2",
    "17E-G-3", "17E-G-4", "18E-1-1", "18E-1-2", "18E-1-3", "18E-1-4", "18E-2-2", "18E-2-3", "18E-G-1", "18E-G-2",
    "18E-G-3", "18E-G-4", "19F-1-1", "19F-1-2", "19F-1-3", "19F-1-4", "19F-1-5", "19F-1-6", "19F-2-1", "19F-2-2",
    "19F-2-3", "19F-2-4", "19F-3-1", "19F-3-4", "19F-G-1", "19F-G-2", "19F-G-3", "19F-G-4", "19F-G-5", "19F-G-6",
    "1C-1-1", "1C-1-2", "1C-1-3", "1C-1-4", "1C-1-5", "1C-1-6", "1C-2-1", "1C-2-2", "1C-2-3", "1C-2-4", "1C-G-1",
    "1C-G-2", "1C-G-3", "1C-G-4", "1C-G-5", "1C-G-6", "20E-1-1", "20E-1-2", "20E-1-3", "20E-1-4", "20E-2-2", "20E-2-3",
    "20E-G-1", "20E-G-2", "20E-G-3", "20E-G-4", "21E-1-1", "21E-1-2", "21E-1-3", "21E-1-4", "21E-2-2", "21E-2-3",
    "21E-G-1", "21E-G-2", "21E-G-3", "21E-G-4", "22E-1-1", "22E-1-2", "22E-1-3", "22E-1-4", "22E-2-2", "22E-2-3",
    "22E-G-1", "22E-G-2", "22E-G-3", "22E-G-4", "23E-1-1", "23E-1-2", "23E-1-3", "23E-1-4", "23E-2-2", "23E-2-3",
    "23E-G-1", "23E-G-2", "23E-G-3", "23E-G-4", "24C-1-1", "24C-1-2", "24C-1-3", "24C-1-4", "24C-1-5", "24C-1-6", "24C-2-1", "24C-2-2", "24C-2-3",
    "24C-2-4", "24C-G-1", "24C-G-2", "24C-G-3", "24C-G-4", "24C-G-5", "24C-G-6", "25F-1-1", "25F-1-2", "25F-1-3",
    "25F-1-4", "25F-1-5", "25F-1-6", "25F-2-1", "25F-2-2", "25F-2-3", "25F-2-4", "25F-3-1", "25F-3-4", "25F-G-1",
    "25F-G-2", "25F-G-3", "25F-G-4", "25F-G-5", "25F-G-6", "26F-1-1", "26F-1-2", "26F-1-3", "26F-1-4", "26F-1-5",
    "26F-1-6", "26F-2-1", "26F-2-2", "26F-2-3", "26F-2-4", "26F-3-1", "26F-3-4", "26F-G-1", "26F-G-2", "26F-G-3",
    "26F-G-4", "26F-G-5", "26F-G-6", "27A-1-1", "27A-1-2", "27A-1-3", "27A-1-4", "27A-G-1", "27A-G-2", "27A-G-3",
    "27A-G-4", "28A-1-1", "28A-1-2", "28A-1-3", "28A-1-4", "28A-G-1", "28A-G-2", "28A-G-3", "28A-G-4", "29B-1-1",
    "29B-1-2", "29B-1-3", "29B-1-4", "29B-1-5", "29B-1-6", "29B-2-1", "29B-2-2", "29B-2-3", "29B-2-4", "29B-G-1",
    "29B-G-2", "29B-G-3", "29B-G-4", "29B-G-5", "29B-G-6", "2A-1-1", "2A-1-2", "2A-1-3", "2A-1-4", "2A-G-1", "2A-G-2",
    "2A-G-3", "2A-G-4", "30A-1-1", "30A-1-2", "30A-1-3", "30A-1-4", "30A-G-1", "30A-G-2", "30A-G-3", "30A-G-4",
    "31A-1-1", "31A-1-2", "31A-1-3", "31A-1-4", "31A-G-1", "31A-G-2", "31A-G-3", "31A-G-4", "32C-1-1", "32C-1-2",
    "32C-1-3", "32C-1-4", "32C-1-5", "32C-1-6", "32C-2-1", "32C-2-2", "32C-2-3", "32C-2-4", "32C-G-1", "32C-G-2",
    "32C-G-3", "32C-G-4", "32C-G-5", "32C-G-6", "3A-1-1", "3A-1-2", "3A-1-3", "3A-1-4", "3A-G-1", "3A-G-2", "3A-G-3",
    "3A-G-4", "4B-1-1", "4B-1-2", "4B-1-3", "4B-1-4", "4B-1-5", "4B-1-6", "4B-2-1", "4B-2-2", "4B-2-3", "4B-2-4",
    "4B-G-1", "4B-G-2", "4B-G-3", "4B-G-4", "4B-G-5", "4B-G-6", "5B-1-1", "5B-1-2", "5B-1-3", "5B-1-4", "5B-1-5",
    "5B-1-6", "5B-2-1", "5B-2-2", "5B-2-3", "5B-2-4", "5B-G-1", "5B-G-2", "5B-G-3", "5B-G-4", "5B-G-5", "5B-G-6",
    "6A-1-1", "6A-1-2", "6A-1-3", "6A-1-4", "6A-G-1", "6A-G-2", "6A-G-3", "6A-G-4", "7D-1-1", "7D-1-2", "7D-1-3",
    "7D-1-4", "7D-G-1", "7D-G-2", "7D-G-3", "7D-G-4", "8E-1-1", "8E-1-2", "8E-1-3", "8E-1-4", "8E-2-2", "8E-2-3",
    "8E-G-1", "8E-G-2", "8E-G-3", "8E-G-4", "9E-1-1", "9E-1-2", "9E-1-3", "9E-1-4", "9E-2-2", "9E-2-3", "9E-G-1",
    "9E-G-2", "9E-G-3", "9E-G-4", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48",
    "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67",
    "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86",
    "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104",
    "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120",
    "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136",
    "137", "138", "139"];


// LocalStroage ----------------------------------------
let ClientData;

if (localStorage.storedReports1 != null) {
    ClientData = JSON.parse(localStorage.storedReports1);
}
else {
    ClientData = [];
}

let Sec = () => {
    let Data = `<option value="" selected disabled>القطاع</option>`;
    for (let i = 0; i < sectors.length; i++) {
        Data += `<option value="${sectors[i]}">${sectors[i]}</option>`
    }
    Sector.innerHTML = Data;
}
Sec();


let updateOptions = () => {
    const selectedSector = Sector.value;
    // Clear previous options
    let Data_2 = "";
    if (selectedSector == "Catania") {
        for (let i = 0; i < Catania.length; i++) {
            Data_2 += `<li value="${Catania[i]}">${Catania[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    else if (selectedSector == "Arezzo") {
        for (let i = 0; i < Arezzo.length; i++) {
            Data_2 += `<li value="${Arezzo[i]}">${Arezzo[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    else if (selectedSector == "Verona") {
        for (let i = 0; i < Verona.length; i++) {
            Data_2 += `<li value="${Verona[i]}">${Verona[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    else if (selectedSector == "Vectoria") {
        for (let i = 0; i < Vectoria.length; i++) {
            Data_2 += `<li value="${Vectoria[i]}">${Vectoria[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    else if (selectedSector == "Isola") {
        for (let i = 0; i < Isola.length; i++) {
            Data_2 += `<li value="${Isola[i]}">${Isola[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    else if (selectedSector == "Veneto") {
        for (let i = 0; i < Veneto.length; i++) {
            Data_2 += `<li value="${Veneto[i]}">${Veneto[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    else if (selectedSector == "Safi 1") {
        for (let i = 0; i < Safi1.length; i++) {
            Data_2 += `<li value="${Safi1[i]}">${Safi1[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Safi 2") {
        for (let i = 0; i < Safi2.length; i++) {
            Data_2 += `<li value="${Safi2[i]}">${Safi2[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Verdi") {
        for (let i = 0; i < Verdi.length; i++) {
            Data_2 += `<li value="${Verdi[i]}">${Verdi[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    } else if (selectedSector == "Valencia") {
        for (let i = 0; i < Valencia.length; i++) {
            Data_2 += `<li value="${Valencia[i]}">${Valencia[i]}</li>`
        }
        UnitNumber.innerHTML = Data_2;
    }
    UnitNumber.innerHTML = Data_2;
    console.log(UnitNumber.children.length);
    // Add other conditions for different sectors if needed
}
updateOptions();

// Create-Function ----------------------------------------
let AddBtn = () => {
    if (Sector.value != '' && PermitStartDate.value != '' && ExpiredDate.value != '' && Unit_Number_Input.value != '' && leaveType.value != '') {
        let ClientInfo = {
            Sector: Sector.options[Sector.selectedIndex].value,
            Unit_Number_Input: Unit_Number_Input.value,
            leaveType: leaveType.options[leaveType.selectedIndex].value,
            EndType:EndType.options[EndType.selectedIndex].value,
            PermitStartDate: PermitStartDate.value,
            ExpiredDate: ExpiredDate.value,
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
        localStorage.setItem('storedReports1', JSON.stringify(ClientData));
        showData();
    }
    else {
        alert('برجاء اكمال ادخال البيانات ')
    }
}


// Clear ----------------------------------------
let Clear = () => {
    Sector.value = '';
    Unit_Number_Input.value = '';
    PermitStartDate.value = '';
    ExpiredDate.value = '';
    leaveType.value = '';
    EndType.value = '';
}



// ShowData ----------------------------------------
let showData = () => {
    let table = '';
    for (let i = 0; i < ClientData.length; i++) {
        table += `
        <tr>
        <td>${i + 1}</td>
        <td>${ClientData[i].Sector}</td>
        <td>${ClientData[i].Unit_Number_Input}</td>
        <td>[${i + 1}]</td>
        <td>${ClientData[i].leaveType}</td>
        <td>${ClientData[i].EndType}</td>
        <td>${ClientData[i].PermitStartDate}</td>
        <td>${ClientData[i].ExpiredDate}</td>
        <td><button id="Update" onclick="UpdateData(${i})">تحديث</button></td>
        <td><button id="Delete" onclick="DeleteData(${i})" >حذف</button></td>
        </tr>
        `;
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


// Export - Table To Excell --------------------------
tableId = "myTable";
let exportTableToExcel = (tableId, filename) => {
    let wb = XLSX.utils.table_to_book(document.getElementById(tableId), { sheet: "Sheet1" });
    XLSX.writeFile(wb, `${filename}.xlsx`);
};

// Delete-Data ----------------------------------------
let DeleteData = (i) => {
    ClientData.splice(i, 1);
    localStorage.storedReports1 = JSON.stringify(ClientData);
    showData();
}



// DeleteAll-Data ----------------------------------------
let DeleteAllData = () => {
    let alert = confirm("هل انت متأكد من حذف جميع البيانات");
    if (alert) {
        ClientData.splice(0);
    }
    localStorage.storedReports1 = JSON.stringify(ClientData);
    showData();
}



// ReportsList ----------------------------------------
let reportList = () => {
    $("#visible-list").css('visibility', 'visible');
    $("#visible-list").css('color', 'red');
    $("#visible-list").toggle("#visible-list");
}




// Unit-NumberList -------------------------------------
let UnitList = () => {
    $("#Unit_N").toggle("#Unit_N");
}


// SearchUnits --------------------------
let SeUnits = (value) => {
    let table = '';
    for (let i = 0; i < UnitNumber.textContent.length; i++) {
        if (UnitNumber.textContent[i].includes(value)) {
            table += `
                <li value = "${UnitNumber.textContent[i]}">${UnitNumber.textContent[i]}</li>
                `;
        }
    }

    UnitNumber.innerHTML = table;
}


// Update-Data ----------------------------------------
let UpdateData = (i) => {
    Sector.value = ClientData[i].Sector;
    Unit_Number_Input.value = ClientData[i].Unit_Number_Input;
    PermitStartDate.value = ClientData[i].PermitStartDate;
    ExpiredDate.value = ClientData[i].ExpiredDate;
    leaveType.value = ClientData[i].leaveType;
    EndType.value = ClientData[i].EndType;
    AddButton.innerText = 'تحديث'
    mood = 'update'
    fake_i = i;
    scroll({
        top: 0,
        behavior: "smooth"
    })
    updateOptions();
    console.log(Sector.value);
    console.log(Unit_Number_Input.value);
}
console.log(mood);




// Search-Mood ----------------------------------------
let searchMood = 'Sector'

let getSearchMood = (value) => {
    let search = document.getElementById('search')
    if (value == 'search_Sector') {
        searchMood = 'Sector';
        search.value = '';
        search.placeholder = 'البحث بالقطاع '
    }
    if (value == 'search_UnitNumber') {
        searchMood = 'UnitNumber';
        search.value = '';
        search.placeholder = 'البحث برقم الوحدة'
    }
    if (value == 'search_PermitStartDate') {
        searchMood = 'PermitStartDate';
        search.value = '';
        search.placeholder = 'البحث بتاريخ الاصدار'
    }
    if (value == 'search_ExpiredDate') {
        searchMood = 'ExpiredDate';
        search.value = '';
        search.placeholder = 'البحث بتاريخ الانتهاء'
    }
    search.focus();
    console.log(searchMood);
}


let searchData = (value) => {
    let table = '';
    if (searchMood == 'Sector') {
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].Sector.includes(value)) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${ClientData[i].Sector}</td>
                <td>${ClientData[i].Unit_Number_Input}</td>
                <td>[${i + 1}]</td>
                <td>${ClientData[i].leaveType}</td>
                <td>${ClientData[i].EndType}</td>
                <td>${ClientData[i].PermitStartDate}</td>
                <td>${ClientData[i].ExpiredDate}</td>
                <td><button id="Update" onclick="UpdateData(${i})">تحديث</button></td>
                <td><button id="Delete" onclick="DeleteData(${i})" >حذف</button></td>
                </tr>
                `;
            }
        }
    }
    if (searchMood == 'UnitNumber') {
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].Unit_Number_Input.includes(value)) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${ClientData[i].Sector}</td>
                <td>${ClientData[i].Unit_Number_Input}</td>
                <td>[${i + 1}]</td>
                <td>${ClientData[i].leaveType}</td>
                <td>${ClientData[i].EndType}</td>
                <td>${ClientData[i].PermitStartDate}</td>
                <td>${ClientData[i].ExpiredDate}</td>
                <td><button id="Update" onclick="UpdateData(${i})">تحديث</button></td>
                <td><button id="Delete" onclick="DeleteData(${i})" >حذف</button></td>
                </tr>
                `;
            }
        }
    }
    // if (searchMood == 'UnitNumber') {
    //     for (let i = 0; i < ClientData.length; i++) {
    //         if (ClientData[i].UnitNumber.includes(value.toLowerCase())) {
    //             table += `
    //             <tr>
    //             <td>${i + 1}</td>
    //             <td>${ClientData[i].Sector}</td>
    //             <td>${ClientData[i].UnitNumber}</td>
    //             <td>${ClientData[i].Number_}</td>
    //             <td>${ClientData[i].Passenger}</td>
    //             <td>${ClientData[i].PermitDescrpition}</td>
    //             <td><button id="openPdf" onclick="openPdf(${i})">فتح الملف</button></td>
    //             <td>${ClientData[i].PermitStartDate}</td>
    //             <td>${ClientData[i].ExpiredDate}</td>
    //             <td>${ClientData[i].CM_Employeee}</td>
    //             <td><button id="Update" onclick="UpdateData(${i})">تحديث</button></td>
    //             <td><button id="Delete" onclick="DeleteData(${i})" >حذف</button></td>
    //             </tr>
    //     `;
    //         }
    //     }
    // }
    if (searchMood == 'PermitStartDate') {
        document.getElementById("tbody").innerHTML = table;
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].PermitStartDate.includes(value)) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${ClientData[i].Sector}</td>
                <td>${ClientData[i].Unit_Number_Input}</td>
                <td>[${i + 1}]</td>
                <td>${ClientData[i].leaveType}</td>
                <td>${ClientData[i].EndType}</td>
                <td>${ClientData[i].PermitStartDate}</td>
                <td>${ClientData[i].ExpiredDate}</td>
                <td><button id="Update" onclick="UpdateData(${i})">تحديث</button></td>
                <td><button id="Delete" onclick="DeleteData(${i})" >حذف</button></td>
                </tr>
        `;
            }
        }
    }
    if (searchMood == 'ExpiredDate') {
        document.getElementById("tbody").innerHTML = table;
        for (let i = 0; i < ClientData.length; i++) {
            if (ClientData[i].ExpiredDate.includes(value)) {
                table += `
                <tr>
                <td>${i + 1}</td>
                <td>${ClientData[i].Sector}</td>
                <td>${ClientData[i].Unit_Number_Input}</td>
                <td>[${i + 1}]</td>
                <td>${ClientData[i].leaveType}</td>
                <td>${ClientData[i].EndType}</td>
                <td>${ClientData[i].PermitStartDate}</td>
                <td>${ClientData[i].ExpiredDate}</td>
                <td><button id="Update" onclick="UpdateData(${i})">تحديث</button></td>
                <td><button id="Delete" onclick="DeleteData(${i})" >حذف</button></td>
                </tr>
        `;
            }
        }
    }
    document.getElementById("tbody").innerHTML = table;
}
