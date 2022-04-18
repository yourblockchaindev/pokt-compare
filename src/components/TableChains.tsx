import chains from "../data/chains/chains";

interface ITableChains {
  chainIds: string[];
}

interface ITableChain {
  chainId: string
  key: number
}

const VISIBLE_COUNT = 3;

function TableChain({ chainId, key }: ITableChain) {

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

function TableChains({ chainIds }: ITableChains) {
  return (
    <>
      {chainIds.slice(0, VISIBLE_COUNT).map((chainId: string, key) => <TableChain key={key} chainId={chainId} />)}
      {chainIds.length > 3 ? (
        <span className="ml-1 text-xs font-semibold">+{chainIds.length - VISIBLE_COUNT}</span>
      ) : (
        <></>
      )}
    </>
  );
}

export default TableChains;
