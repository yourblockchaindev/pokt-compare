interface IRating {
  overall?: number
  chains?: number
  security?: number
  pricing?: number
  hardware?: number
  monitoring?: number
  reporting?: number
}

interface IProvider {
  name: string
  url: string
  chainIds: string[]
  baseNodes: number | null
  baseFixed: number | null
  baseVariable: number | null
  rating?: IRating
}