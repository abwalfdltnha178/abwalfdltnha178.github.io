import { liteClient as algoliasearch } from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits, configure } from 'instantsearch.js/es/widgets';
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

const searchClient = algoliasearch('N9TTQ38R4A', 'b6ac49385375e4237691c249390227c6');

const search = instantsearch({
  indexName: 'My First Application',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: "#searchbox"
  }),
  configure({
    hitsPerPage: 5
  }),
  hits({
    container: "#hits",
    templates: {
      item: (hit, { html, components }) => html`
        <div>
          <div class="hit-title">
					  ${components.Highlight({ hit, attribute: "title" })}
					</div>
					<div class="hit-objectID">
					  ${components.Highlight({ hit, attribute: "objectID" })}
					</div>
					<div class="hit-date">
					  ${components.Highlight({ hit, attribute: "date" })}
					</div>
        </div>
      `,
    },
  }),
]);

export default search;