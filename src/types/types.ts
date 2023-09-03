export interface Album{
  id: number
  title: string
  userId:number
}

export interface AlbumStoreType{
  albums: Album[],
  loadAlbums(): Promise<void>,
}
