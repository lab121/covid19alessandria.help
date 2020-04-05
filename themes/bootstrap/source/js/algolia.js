import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, poweredBy } from 'instantsearch.js/es/widgets';
import { connectHits } from 'instantsearch.js/es/connectors'

const searchClient = algoliasearch('WJQ8SPVJHX', '826e823331a54b0da593595285f4b667');

const search = instantsearch({
  indexName: 'covid19alessandria',
  searchClient,
  searchFunction(helper) {
    if (helper.state.query) {
      helper.search();
    }
  },
});

// Create the render function
const renderHits = (renderOptions, isFirstRender) => {
  const { hits, widgetParams } = renderOptions;

  widgetParams.container.innerHTML = `
      ${hits
    .map(
      item =>
        `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">
                <div class="card-body">
                    <div class="cart-title">
                        <p><b>${item.title}</b></p>
                    </div>

                    <hr>
                    ${item.description ? `<div class="cart-content">${item.description}</div><hr>` : ''}
                    ${item.phone ? `<div class="cart-phone mb-3"><b>Tel:</b> ${item.phone}</div>` : ''}
                    ${item.email ? `<div class="cart-mail mb-3"><b>Email:</b> ${item.email}</div>` : ''}
                    ${item.address ? `<div class="cart-mail mb-3"><b>Indirizzo:</b> ${item.address}</div>` : ''}
                    ${item.permalink ? `<div class="btn-group cart-link"><a href="${item.permalink}" class="btn btn-sm btn-outline-secondary" target="_blank">Link</a></div>` : ''}
                </div>
            </div>
          </div>`
    )
    .join('')}
  `;
};

// Create the custom widget
const customHits = connectHits(renderHits);

// Instantiate the custom widget
search.addWidgets([
  customHits({
    container: document.querySelector('#hits'),
  })
]);

search.addWidgets([
  searchBox({
    container: '#searchbox',
    showReset: false,
    showSubmit: false,
    cssClasses: {
      input: ['form-control']
    }
  }),

  poweredBy({
    container: '#powered-by',
  }),
]);

search.start();
