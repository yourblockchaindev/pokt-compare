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
      className={`h-4 w-4 md:h-5 md:w-5 border md:border-2 border-slate-50 rounded-full inline ${
        key === 0 ? "" : "-ml-2"
      } z-${40 - key * 10}`}
    />
  ) } else {
    return <></>
  }
}

export default ChainCellItem