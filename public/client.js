
$(document).ready(function () {

    //when a user click the "Get All Tweets" button
    $("#getTweets").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("GET", $(this), {id: $(this).val()}, "/getTweets", ShowTweets);
    });

    //when a user click the "Get all User IDs" button
    $("#getUsers").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("GET", $(this), {id: $(this).val()}, "/getUsers", ShowUsers);
    });

    //when a user click the "Get Tweet Details" button
    $("#tweetDtlsBtn").click(function (event) {
        event.preventDefault();
        sendAjaxRequest("POST", $(this), $('#getTweetID').serializeArray(), "/getTweetID", ShowTweets);
    });

    //when a user click the "Delete Tweet" button
    $("#delTweetBtn").click(function (event) {
        event.preventDefault();
        sendAjaxRequest("DELETE", $(this), $('#getTweetID').serializeArray(), "/deleteTweetID", ShowTweets);
    });

    //when a user click the "Create New Tweet" button
    $("#createNewTweet").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("POST", $(this), $('#createNewTweet').serializeArray(), "/createNewTweet", ShowTweets);
    });

    //when a user click the "Update Screen Name" button
    $("#updateScreenName").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("PUT", $(this), $('#updateScreenName').serializeArray(), "/updateScreenName", ShowUsers);
    });


    function sendAjaxRequest(type, element, data, urlToSend, successFunc) {
        $.ajax({
            type: type,
            url: urlToSend,
            data: data,
            dataType: "json",
            success: function (response) {
                successFunc(response)
            },
            error: function () {
                alert('error');
            }
        });
    }

    function ShowTweets(response) {
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
    }

    function ShowUsers(response) {
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
    }
});
