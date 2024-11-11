const searchClient = algoliasearch('YOUR_APP_ID', 'YOUR_SEARCH_API_KEY');
  
  const search = instantsearch({
    indexName: 'YOUR_INDEX_NAME',
    searchClient,
  });

  search.addWidgets([
    instantsearch.widgets.searchBox({
      container: '#searchbox',
      placeholder: 'جستجو...',
    }),
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item(hit) {
          return `<h2>${hit.title}</h2><p>${hit.content}</p>`;
        },
      },
    }),
  ]);

  search.start();