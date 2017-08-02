const Leaflet = require('../')
const leaflet = Leaflet()
const html = require('choo/html')

module.exports = (state, emit) => {
  return html`
    <body>
      ${leaflet.render({
        coords: state.coords,
        zoom: state.zoom,
        items: state.locations,
        selectedIndex: state.selectedIndex,
        tiles: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        mapbox: {},
        tilesAttribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        icons: [
          {
            name: 'default',
            template: `
              <svg viewBox="0 0 16 16" class="icon icon-small icon-arrow-north-east">
                <use xlink:href="#icon-arrow-north-east" />
              </svg>
            `
          },
          {
            name: 'featured',
            template: `
              <svg viewBox="0 0 16 16" class="icon icon-small icon-arrow-north-east">
                <use xlink:href="#icon-arrow-north-east" />
              </svg>
            `
          }
        ],
        popupTemplate: (item) => {
          return `<div>Popup Template</div>`
        }
      })}
    </body>
`
}
