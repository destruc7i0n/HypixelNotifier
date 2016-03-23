var id = 'HypixelNotifier';

$(document).ready(function() {
    chrome.storage.local.get('alerts', function(response) {
        if (response.alerts > 0) {
            $("#alerts").css("color", "#D6847B");
        } else {
            $("#alerts").css("color", "#B5B5B5");
        }
        $("#alerts").text(response.alerts + " new");
    });

    chrome.storage.local.get('messages', function(response) {
        if (response.messages > 0) {
            $("#messages").css("color", "#D6847B");
        } else {
            $("#messages").css("color", "#B5B5B5");
        }
        $("#messages").text(response.messages + " new");
    });

    chrome.storage.local.get('posts', function(response) {
        $("#posts").text(response.posts);
    });

    chrome.storage.local.get('rating', function(response) {
        $("#rating").text("+" + response.rating);
    });
    $('body').on('click', 'a', function() {
        chrome.tabs.create({
            url: $(this).attr('href')
        });
        return false;
    });

    $('body').on('click', 'area', function() {
        chrome.tabs.create({
            url: $(this).attr('href')
        });
        return false;
    });

    $('#options').click('click', function() {
        location.pathname = "/options/options.html";
        return false;
    });

});
