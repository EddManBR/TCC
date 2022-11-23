export type User = {
  name: string
  profilePhotoUrl: string
  bannerPhotoUrl: string
  albums: Album[]
}

export type Music = {
  id: string
  albumId: string
  title: string
  views: number
}

export type Album = {
  id: string
  title: string
  releaseYear: string
  coverUrl: string
  musics: Music[]
}
