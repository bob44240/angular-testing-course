export const SONGS = {

  12: {
    artist: ['Bob Dylan', 'James Taylor'],
    title: 'Highway 61 Revisied',
    album: 'fred',
    release_date: '2020-7-12'
  },
  11: {
    "artist":[ "Avicii", "MishCatt"],
    "title":"Fades Away",
    album:"Fades Away",
    "release_date":"2020-07-20"
},
10: {
    "artist":[ "Avicii"],
    "title":"Heaven",
    album:"TIM",
    "release_date":"2020-07-09"
},
9: {
    "artist":[ "Armin van Buuren", "Nicky Romero", "Ifimay"],
    "title":"I Need You to Know",
    album:"I Need You to Know",
    "release_date":"2020-07-09"
},
8: {
    artist:[ "Armin van Buuren"],
    title:"Hollow",
    album:"holow",
    release_date:"2020-07-19"
  }
}

export function findSongsByDate(releaseDate: Date) {
  let temp = new Date()

  Object.values(SONGS).filter(song =>  {
    let temp = new Date(song.release_date);
    console.log()
    //song.release_date.toDateString() == releaseDate);
  return '' //
}
