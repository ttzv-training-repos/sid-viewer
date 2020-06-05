const inputAreaUsers = $("#input-area-user");
const submitUsers = $("#submit-user");

submitUsers.click(function (e) { 
    console.log("post")
    input = getInput(inputAreaUsers)
    if (input.data) requestSids(input)
});

function requestSids(data){
    $.post("ad_users/sid_api", data,
        function (data, textStatus, jqXHR) {
            console.log(data, textStatus, jqXHR)
            fillList($('#list-sid'), data, "sids")
        },
        "json"
    );
}

function getInput(inputArea){
    let value = inputArea.val()
    value = clean(value);
    if (value !== ""){
       value = value.split("\n").join(",")
    }
    return {data: value}
}

function fillList(list, data, key){
    list.empty();
    data[key].forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        list.append(li); 
    });
}

const inputAreaSIDs = $("#input-area-sid");
const submitSIDs = $("#submit-sid");

submitSIDs.click(function (e) { 
    console.log("post")
    input = getInput(inputAreaSIDs)
    if (input.data) requestUsers(input)
});

function requestUsers(data){
    $.post("ad_users/user_api", data,
        function (data, textStatus, jqXHR) {
            console.log(data, textStatus, jqXHR)
            fillList($('#list-user'), data, "users")
        },
        "json"
    );
}

function clean(value){
    if (value.includes(";")){
    value = value.trim().split(";");
    value = value.map(v => v.trim());
    return value.join("\n")
    } else {
        return value
    }
}



