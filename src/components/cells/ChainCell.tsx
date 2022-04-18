import BlankCell from "./BlankCell";
import ChainCellItem from "./ChainCellItem";

const VISIBLE_COUNT = 3;

interface IChainCell {
  chainIds: string[];
}

function ChainCell({ chainIds }: IChainCell) {

  if (chainIds.length === 0) {
    return <BlankCell />
  }

  return (
    <>
      {chainIds.slice(0, VISIBLE_COUNT).map((chainId: string, key) => <ChainCellItem key={key} chainId={chainId} />)}
      {chainIds.length > 3 ? (
        <span className="ml-1 text-xs font-semibold">+{chainIds.length - VISIBLE_COUNT}</span>
      ) : (
        <></>
      )}
    </>
  );
}

export default ChainCell;
