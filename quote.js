$(document).ready(function() {

    var quote;
    var author;

    function getNewQuote() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/',
            jsonp: 'jsonp',
            dataType: 'jsonp',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'jsonp'
            },
            success: function(response) {
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                if (author) {
                    $('#author').text('by ' + author);
                } else {
                    $('#author').text('- unknown');
                }
            }
        });
    }
    getNewQuote();

    $('.next-quote').on('click', function(event) {
        event.preventDefault();
        getNewQuote();
    });

    $('.share-quote').on('click', function(even) {
        event.preventDefault();
        window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + 'author'))
    })
});