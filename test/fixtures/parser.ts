export const XML_STRING = `
<boardgames termsofuse="https://boardgamegeek.com/xmlapi/termsofuse">
<boardgame objectid="30328">
<name primary="true">Battleground: Crossbows & Catapults</name>
<yearpublished>2007</yearpublished>
</boardgame>
<boardgame objectid="30326">
<name primary="true">Battleground: Crossbows & Catapults – Tower Attack Expansion Pack</name>
<yearpublished>2007</yearpublished>
</boardgame>
</boardgames>
`

export const PARSED_XML = {
  boardgames: {
    boardgame: [
      {
        titles: [
          {
            name: 'Battleground: Crossbows & Catapults',
            attributes: {
              primary: true
            }
          }
        ],
        yearPublished: 2007,
        attributes: {
          id: 30328
        }
      }, {
        titles: [
          {
            name: 'Battleground: Crossbows & Catapults – Tower Attack Expansion Pack',
            attributes: {
              primary: true
            }
          }
        ],
        yearPublished: 2007,
        attributes: {
          id: 30326
        }
      }
    ],
    attributes: {
      termsofuse: 'https://boardgamegeek.com/xmlapi/termsofuse'
    }
  }
}

export const MERGED_ATTRIBUTES = {
  titles: [
    {
      name: 'Battleground: Crossbows & Catapults',
      primary: true
    }
  ],
  yearPublished: 2007,
  id: 30328
}