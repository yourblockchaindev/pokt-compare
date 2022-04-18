import chains from "../../data/chains/chains";

interface IChainCellItem {
  chainId: string
  id: number
}

function ChainCellItem({ chainId, id }: IChainCellItem) {

  const chain = chains[chainId]

  if (chain) {
  return (
    <img
      src={chain.icon_url}
      alt={`${id}`}
      className={`h-4 w-4 md:h-5 md:w-5 border md:border-2 border-slate-50 rounded-full inline ${
        id === 0 ? "" : "-ml-2"
      } z-${40 - id * 10}`}
    />
  ) } else {
    return <></>
  }
}

export default ChainCellItem