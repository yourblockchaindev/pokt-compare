interface IProvider {
  name: string
  url: string
  chainIds: string[]
  baseNodes: number | null
  baseFixed: number | null
  baseVariable: number | null
}