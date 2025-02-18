declare interface GalleryItemProps  {
    type: 'video' | 'image'
    url: string }

declare interface Game  {

    id: number
    name: string
    description: string
    release_Date?: string
    prices: {
            discount?: number
            old?: number
            current?: number 
    }
    details: {
            category: string
            system: string
            developer: string
            publisher: string
            languages: string
    }
    media: {
            thumbnail: string
            cover: string
            gallery: GalleryItemProps[]
    }
}
