import React from 'react'
import SongCard from './SongCard'

const SongRow = (props) => {

  const mapSongs = (props) => {
    return props.songs && props.songs.map((song, id) => <SongCard key={id} song={song }/>) 
  }

  return (
    <div className="row white-row">
      {mapSongs(props)}
    </div>
  )
}

export default SongRow
