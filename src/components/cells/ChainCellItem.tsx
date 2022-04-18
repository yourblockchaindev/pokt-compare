import chains from "../../data/chains/chains";

interface IChainCellItem {
  chainId: string
  key: number
}

function ChainCellItem({ chainId, key }: IChainCellItem) {

  const chain = chains[chainId]

  if (chain) {
  return (
    <img
      src={chain.icon_url}
      alt={chain.name}
      className={`h-6 w-6 border-2 border-slate-50 rounded-full inline ${
        key === 0 ? "" : "-ml-1"
      } z-${40 - key * 10}`}
    />
  ) } else {
    return <></>
  }
}

export default ChainCellItem