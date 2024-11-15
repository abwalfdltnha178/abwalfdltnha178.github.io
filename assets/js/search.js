const searchClient = algoliasearch('N9TTQ38R4A', 'b6ac49385375e4237691c249390227c6');

const search = instantsearch({
  indexName: 'My First Application', // نام ایندکس شما در Algolia
  searchClient,
});

search.addWidgets([
  // ویجت جعبه جستجو با placeholder
  instantsearch.widgets.searchBox({
    container: '#searchbox',
    placeholder: 'جستجو...',
  }),

  // ویجت نتایج جستجو
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item(hit) {
        return `
          <div>
            <h2>${hit.title}</h2>
            <p>${hit.description}</p>
          </div>
        `;
      },
    },
  }),
]);

// شروع جستجو
search.start();
