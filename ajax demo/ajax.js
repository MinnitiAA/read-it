// $(document).ready(function () {
//
//     // run on page load (you would put this in a form event)
//     const params = {
//         term: 'Jack',
//         limit: 12,
//     }
//
//     const url = 'https://itunes.apple.com/search';
//
//     $.get(url,
//         params,
//         displayResults,
//         'json') // end of the $.get()
//
//     console.log('loaded');
// });
//
// function displayResults(data) {
//     console.log('responses', data);
//
//     // option 1 preferred
//     if (!data.results || data.results.length === 0) {
//         $('#results').html('no results found');
//         return;
//     }
//
//     data.results?.forEach(function (item) {
//         let title = item.trackName ?? item.collectionName ?? 'Untitled';
//         $('#results').append(`
//                     <h3>${title.toUpperCase()}</h3>
//                     <img alt="Cover art" src="${item.artworkUrl100 ?? 'https://placehold.co/100x100'}"/>
//                 `);
//     });
//
//     // option 2 (kept, but fixed)
//     // if (data.results?.length > 0) {
//     //     data.results?.forEach(function (item) {
//     //         let title = item.trackName ?? item.collectionName ?? 'Untitled';
//     //         $('#results').append(`
//     //                         <h3>${title.toUpperCase()}</h3>
//     //                         <img alt="Cover art" src="${item.artworkUrl100 ?? 'https://placehold.co/100x100'}"/>
//     //                     `);
//     //     });
//     // } else {
//     //     $('#results').html('no results found');
//     //}
// }


$(document).ready(function () {

    $('#search-form').on('submit', function (event) {
        event.preventDefault();

        const term = $('#searchTerm').val().trim();
        const media = $('#mediaType').val();

        const params= {
            term: term,
            media: media,
            limit: 12
        };

        const url = 'https://itunes.apple.com/search';

        $.get(url, params, displayResult, 'json')
    });

    function displayResult(data) {
        console.log('responss',data);

        $('#results').html('');

        if (!data.results || data.results.length === 0) {
            $('#results').html('<p>No results found</p>');
            return;
        }
        data.results.forEach(function (item) {
            let title = item.trackName ?? item.collectionName ?? 'Untitled';
            let artist = item.artistName ?? 'Unknown Artist';
            let image = item.artworkUrl100 ?? 'https://placehold.co/100x100';

            $('#results').append(`
            <div class="card">
                 <img src="${image}" alt="cover">
                <h4>${title}</h4>
                <p>${artist}</p>
            </div>
            `);
        });
    }
});
