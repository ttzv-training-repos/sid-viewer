const inputArea = $("#input-area");
const submit = $("#submit");

submit.click(function (e) { 
    console.log("post")
    input = getInput()
    if (input.data) requestSids(input)
});

function requestSids(data){
    $.post("ad_users/sid_api", data,
        function (data, textStatus, jqXHR) {
            console.log(data, textStatus, jqXHR)
            insertSids(data);
        },
        "json"
    );
}

function getInput(){
    let value = inputArea.val()
    if (value !== ""){
       value = value.split("\n").join(",")
    }
    return {data: value}
}

function insertSids(hash){
    let $list = $("#list");
    $list.empty();
    sids = hash.sids.split(',')
    sids.forEach(element => {
        let li = document.createElement('li');
        li.textContent = element;
        $list.append(li); 
    });
}

