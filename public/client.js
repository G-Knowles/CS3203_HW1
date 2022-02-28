
$(document).ready(function () {

    //when a user click the "Get All Tweets" button, display all the tweets
    $("#getTweets").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("GET", $(this), {id: $(this).val()}, "/getTweets", ShowTweets);
    });

    //when a user click the "Get all User IDs" button, display all the users
    $("#getUsers").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("GET", $(this), {id: $(this).val()}, "/getUsers", ShowUsers);
    });

    //when a user click the "Get Tweet Details" button, display the details of the tweet
    $("#tweetDtlsBtn").click(function (event) {
        event.preventDefault();
        sendAjaxRequest("POST", $(this), $('#getTweetID').serializeArray(), "/getTweetID", ShowTweets);
    });

    //when a user click the "Delete Tweet" button, delete the tweet
    $("#delTweetBtn").click(function (event) {
        event.preventDefault();
        sendAjaxRequest("DELETE", $(this), $('#getTweetID').serializeArray(), "/deleteTweetID", ShowTweets);
    });

    //when a user click the "Create New Tweet" button, create the new tweet with the given info
    $("#createNewTweet").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("POST", $(this), $('#createNewTweet').serializeArray(), "/createNewTweet", ShowTweets);
    });

    //when a user click the "Update Screen Name" button, update the user's screen_name with the new given name
    $("#updateScreenName").submit(function (event) {
        event.preventDefault();
        sendAjaxRequest("PUT", $(this), $('#updateScreenName').serializeArray(), "/updateScreenName", ShowUsers);
    });


    // Function to handle sending AJAX requests
        // type: type of request
        // element: element that triggered the request
        // data: data that needs to be sent through the request
        // urlToSend: url for where to send the request
        // successFunc: function to be executed on a successful request
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

    // Function to display the tweets in the HTML table, displays ID, Text, Created_at
    function ShowTweets(response) {
        console.log(response);
        // let tbodyEl = $('tbody');
        let theadEl = $("#myTable > thead")
        let tbodyEl = $("#myTable > tbody")

        // Initialize the table and body elements
        theadEl.html('');
        tbodyEl.html('');

        // Set the header labels for the table
        theadEl.append('\
           <tr>\
            <th>ID</th>\
            <th>Text</th>\
            <th>Created at</th>\
        </tr>\
        ');

        // Loop through appending each entry as a row to the table
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

    // Function to display the users in the HTML table, displays User ID, username, screen_name
    function ShowUsers(response) {
        console.log(response);
        // let tbodyEl = $('tbody');
        let theadEl = $("#myTable > thead")
        let tbodyEl = $("#myTable > tbody")

        // Initialize the table and body elements
        theadEl.html('');
        tbodyEl.html('');

        // Set the header labels for the table
        theadEl.append('\
           <tr>\
            <th>User ID</th>\
            <th>Username</th>\
            <th>Screen Name</th>\
        </tr>\
        ');

        // Loop through appending each entry as a row to the table
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
