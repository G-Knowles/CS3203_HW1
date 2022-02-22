
//document.getElementById('all-tweets-btn').onclick = function() {
//    var xhttp = new XMLHttpRequest();
//    xhttp.open("GET", "/getTweets");
//    xhttp.send();
//}

$(document).ready(function () {

    //when a user click the "submit" button
    $("#getTweets").submit(function (event) {
        event.preventDefault();
        console.log($('#getTweets').serialize())
        $.ajax({
            type: 'GET',
            url: '/getTweets',
            data: $('#getTweets').serialize(),
            dataType: "json",
            success: function (response) {
                ShowTweets();
            },
            error: function () {
            }
        })
    });

    function ShowTweets() {
        $.ajax({
            type: 'GET',
            url: '/getTweets',
            dataType: "json",
            success: function (response) {
                console.log(response);
                // let tbodyEl = $('tbody');
                let theadEl = $("#myTable > thead")
                let tbodyEl = $("#myTable > tbody")

                theadEl.html('');
                tbodyEl.html('');

                theadEl.append('\
                   <tr>\
                    <th>ID</th>\
                    <th>Text</th>\
                    <th>Created at</th>\
                </tr>\
                ');
                response.forEach(function (product) {
                    tbodyEl.append('\
                        <tr>\
                        <td class="id">' + product.id + '</td>\
                        <td class="Text">' + product.text + '</td>\
                        <td class="created">' + product.created_at + '</td>\
                        </td>\
                        </tr>\
                        ');
                });
            },
            error: function () {
            }
        })
    }
});
