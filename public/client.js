
$(document).ready(function () {

    //when a user click the "Get All Tweets" button
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

    //when a user click the "Get all User IDs" button
    $("#getUsers").submit(function (event) {
        event.preventDefault();
        console.log($('#getUsers').serialize())
        $.ajax({
            type: 'GET',
            url: '/getTweets',
            data: $('#getUsers').serialize(),
            dataType: "json",
            success: function (response) {
                ShowUsers();
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

    function ShowUsers() {
        $.ajax({
            type: 'GET',
            url: '/getUsers',
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
                    <th>User ID</th>\
                    <th>Username</th>\
                    <th>Screen Name</th>\
                </tr>\
                ');
                response.forEach(function (product) {
                    tbodyEl.append('\
                        <tr>\
                        <td class="id">' + product.user.id + '</td>\
                        <td class="Text">' + product.user.name + '</td>\
                        <td class="created">' + product.user.screen_name + '</td>\
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
