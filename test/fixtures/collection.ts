export const XML_SINGLE_GAME = `
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<items totalitems="1" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse"
pubdate="Tue, 31 Oct 2023 11:19:56 +0000">
<item objecttype="thing" objectid="173346" subtype="boardgame" collid="104208687">
<name sortindex="1">7 Wonders Duel</name>
<yearpublished>2021</yearpublished>
<image>
https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg</image>
<thumbnail>
https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg</thumbnail>
<stats minplayers="2" maxplayers="2" minplaytime="30" maxplaytime="30" playingtime="30"
numowned="144891">
<rating value="N/A">
<usersrated value="88379" />
<average value="8.09677" />
<bayesaverage value="7.97299" />
<stddev value="1.19126" />
<median value="0" />
</rating>
</stats>
<status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"
preordered="0" lastmodified="2023-03-04 10:10:37" />
<numplays>0</numplays>
</item>
</items>
`

export const XML_MULTIPLE_GAMES = `
<?xml version="1.0" encoding="utf-8" standalone="yes"?>
<items totalitems="2" termsofuse="https://boardgamegeek.com/xmlapi/termsofuse"
pubdate="Tue, 31 Oct 2023 11:19:56 +0000">
<item objecttype="thing" objectid="173346" subtype="boardgame" collid="104208687">
<name sortindex="1">7 Wonders Duel</name>
<yearpublished>2021</yearpublished>
<image>
https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg</image>
<thumbnail>
https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg</thumbnail>
<stats minplayers="2" maxplayers="2" minplaytime="30" maxplaytime="30" playingtime="30"
numowned="144891">
<rating value="N/A">
<usersrated value="88379" />
<average value="8.09677" />
<bayesaverage value="7.97299" />
<stddev value="1.19126" />
<median value="0" />
</rating>
</stats>
<status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"
preordered="0" lastmodified="2023-03-04 10:10:37" />
<numplays>0</numplays>
</item>
<item objecttype="thing" objectid="173346" subtype="boardgame" collid="104208687">
<name sortindex="1">7 Wonders Duel</name>
<yearpublished>2021</yearpublished>
<image>
https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg</image>
<thumbnail>
https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg</thumbnail>
<stats minplayers="2" maxplayers="2" minplaytime="30" maxplaytime="30" playingtime="30"
numowned="144891">
<rating value="N/A">
<usersrated value="88379" />
<average value="8.09677" />
<bayesaverage value="7.97299" />
<stddev value="1.19126" />
<median value="0" />
</rating>
</stats>
<status own="1" prevowned="0" fortrade="0" want="0" wanttoplay="0" wanttobuy="0" wishlist="0"
preordered="0" lastmodified="2023-03-04 10:10:37" />
<numplays>0</numplays>
</item>
</items>
`

export const SINGLE_GAME = {
  numberOfGames: 1,
  games: [
    {
      id: 173346,
      title: '7 Wonders Duel',
      yearPublished: 2021,
      image: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg',
      thumbnail: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg',
      status: {
        owned: true,
        previouslyOwned: false,
        forTrade: false,
        want: false,
        wantToPlay: false,
        wantToBuy: false,
        wishlist: false,
        preordered: false,
        lastModified: '2023-03-04 10:10:37',
      }
    },
  ],
}

export const MULTIPLE_GAMES = {
  numberOfGames: 2,
  games: [
    {
      id: 173346,
      title: '7 Wonders Duel',
      yearPublished: 2021,
      image: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg',
      thumbnail: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg',
      status: {
        owned: true,
        previouslyOwned: false,
        forTrade: false,
        want: false,
        wantToPlay: false,
        wantToBuy: false,
        wishlist: false,
        preordered: false,
        lastModified: '2023-03-04 10:10:37',
      }
    },
    {
      id: 173346,
      title: '7 Wonders Duel',
      yearPublished: 2021,
      image: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__original/img/rcsOrUHL8HdYKDt6WNl8rO5ONUQ=/0x0/filters:format(jpeg)/pic6617327.jpg',
      thumbnail: 'https://cf.geekdo-images.com/zdWuX3vm_DziVdTwTQh4mg__thumb/img/EDUqlbAQB_5SrdZDhdndHSwAc0s=/fit-in/200x150/filters:strip_icc()/pic6617327.jpg',
      status: {
        owned: true,
        previouslyOwned: false,
        forTrade: false,
        want: false,
        wantToPlay: false,
        wantToBuy: false,
        wishlist: false,
        preordered: false,
        lastModified: '2023-03-04 10:10:37',
      }
    },
  ],
}