export interface GetListaPersonagens {
    info: Info
    results: Personagem[]
}

export interface Info {
    count: number
    pages: number
    next: string
    prev: string
}

export interface Personagem {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: Origem
    location: Localizacao
    image: string
    episode: string[]
    url: string
    created: string
}

export interface Origem {
    name: string
    url: string
}

export interface Localizacao {
    name: string
    url: string
}
