const searchClient = algoliasearch('N9TTQ38R4A', 'b6ac49385375e4237691c249390227c6');
  
  const search = instantsearch({
    indexName: 'My First Application',
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