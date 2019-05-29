import songsReducer from './songsReducer'

describe('songsReducer reducer', () => {
  it('should return the initial state', () => {
    expect(
      songsReducer(undefined, {})
    ).toEqual({songs: [], loading: false})
  })

  it('should handle the ADD_SONG action', () => {
    const songs = [ {track: {artist_name: "Eminem", track_name: "Lose Yourself"}}, {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}} ]
    expect(
      songsReducer([], {
        type: 'ADD_SONG',
        payload:  songs
      })
    ).toEqual({loading: false, songs: songs})
  })

  it('should handle the ADD_POPULAR_SONGS action', () => {
    const songs = [ {track: {artist_name: "Eminem", track_name: "Lose Yourself"}}, {track: {artist_name: "Daft Punk feat. Pharrell Williams", track_name: "Lose Yourself to Dance"}} ]

    expect(
      songsReducer([], {
        type: 'ADD_POPULAR_SONGS',
        payload: songs
      })
    ).toEqual({loading: false, popularSongs: songs})
  })

  it('should handle the ADD_LYRICS action', () => {
    const songWithLyrics = {lyrics_body: "Look if you had one shot, would you capture it or just let it slip...", lyrics_id: 16023263}
    expect(
      songsReducer([], {
        type: 'ADD_LYRICS',
        payload: songWithLyrics
      })
    ).toEqual({loading: false, lyrics: songWithLyrics})
  })

})
