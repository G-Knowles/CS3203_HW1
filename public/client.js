
$(document).ready(function () {

    //when a user click the "Get All Tweets" button
    $("#getTweets").submit(function (event) {
        event.preventDefault();
       sendAjaxRequest("GET", $(this), "/getTweets", ShowTweets);
    });

    //when a user click the "Get all User IDs" button
    $("#getUsers").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("GET", $(this), "/getUsers", ShowUsers);
    });

    //when a user click the "Get Tweet Details" button
    $("#tweetID").submit(function (event) {
        event.preventDefault();
        console.log("Request sent");
        sendAjaxRequest("GET", $(this), "/getTweetID", ShowTweet);
    });


    //when a user click the "Get all User IDs" button


    function sendAjaxRequest(type, element, urlToSend, successFunc) {
        $.ajax({type: type,
            url: urlToSend,
            data: { id: element.val()},
            success:successFunc(),
            error:function(result)
            {
                alert('error');
            }
        });
    }
    function ShowTweets(response) {
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

    function ShowTweet() {
        console.log("In the right spot");
        $.ajax({
            type: 'GET',
            url: '/getTweetID',
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
                    <th>Text</th>\
                    <th>Created at</th>\
                </tr>\
                ');
                /*response.forEach(function (product) {
                    tbodyEl.append('\
                        <tr>\
                        <td class="Text">' + product.text + '</td>\
                        <td class="created">' + product.created_at + '</td>\
                        </td>\
                        </tr>\
                        ');
                });*/
            },
            error: function () {
            }
        })
    }

});
