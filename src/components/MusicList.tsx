import Music from './Music'

export default function MusicList() {
  return (
    <div className='flex flex-col space-y-2'>
      <Music
        position={1}
        coverUrl={'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg'}
        title='Hit em Up - Single Version'
        views={344309951}
      />
      <Music
        position={2}
        coverUrl={'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg'}
        title='All Eyez on Me (ft. Big Syke)'
        views={410027714}
      />
      <Music
        position={3}
        coverUrl={'https://upload.wikimedia.org/wikipedia/pt/9/9c/2Pac_-_All_Eyez_on_Me.jpg'}
        title='California Love - Original Version'
        views={469601298}
      />
    </div>
  )
}
