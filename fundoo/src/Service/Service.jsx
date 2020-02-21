import axios from "axios";

export function userRegistration(regDto) {
    return axios.post("http://localhost:8080/user/register", regDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function userLogin(logindto) {
    return axios.put("http://localhost:8080/user/login", logindto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function forgotPassword(forgetPasswordDto) {

    return axios.post("http://localhost:8080/user/forgotpassword", forgetPasswordDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function setNewPassword(token, setpassworddto) {
    console.log(token, "....token");

    return axios.put("http://localhost:8080/user/setpassword", setpassworddto, {
        headers: {

            "Content-Type": "application/json;charset=utf-8",
            token: token
        }
    });
}

// export function searchNote(note) {
//     let token = localStorage.getItem("Token");

//     return axios.get(
//         "http://localhost:8081/searchnote",
//         {
//             headers: {
//                 "Content-Type": "application/json; charset=utf-8",
//                 note: note,
//                 token: token
//             }
//         }
//     );
// }

export function createNote(noteDto, token) {

    return axios.post("http://localhost:8080/note/addnewnote", noteDto, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}



export function getAllNotes(token) {

    return axios.get("http://localhost:8080/note/getallnotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function createLabel(labelDto, token) {

    return axios.post("http://localhost:8080/label/addlabel", labelDto, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function getAllLabels(token) {

    return axios.get("http://localhost:8080/label/getalllabels", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function editLabel(token) {

    return axios.put("http://localhost:8080/label/getalllabels", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function deleteLabel(labelid, token) {

    return axios.delete("http://localhost:8080/note/deletelabel?labelid=${labelid}", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function updateNote(id, updateNoteDto, token) {

    return axios.put("http://localhost:8080/note/updatenote", {
        params: {
            id: id
        },
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}


export function addInArchive(id, token) {
    console.log("In Services", id, token);
    var data = null;
    return axios.put("http://localhost:8080/note/archive/" + id, data, {

        headers: {
            "Content-Type": "appliaction/json; charset=utf-8",
            token: token
        }
    });
}
export function getAllArchiveNotes(token) {

    return axios.get("http://localhost:8080/note/getallarchivenotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}
// export function displayAllLabel(token) {
//     return axios.get("http://localhost:8081/label/getalllabels", {
//         headers: {
//             "Content-Type": "application/json; charset=utf-8",
//             token: token
//         }
//     });
// }

export function changeProfile(file, token) {
    return axios.post("http://localhost:8080/addprofile", file, {
        headers: {
            "Content-Type": "multipart/form-data",
            token: token
        }
    });
}