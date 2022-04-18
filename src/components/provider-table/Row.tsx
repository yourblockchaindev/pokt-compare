import BlankCell from "../cells/BlankCell";
import ChainCell from "../cells/ChainCell"

interface ITableRow {
  provider: IProvider;
}

function Row({ provider }: ITableRow) {
  return (
    <tr className="text-slate-700 hover:bg-slate-50">
      <td className="p-4">{provider.name}</td>
      <td className="p-4 text-right">
        <ChainCell chainIds={provider.chainIds} />
      </td>
      <td className="p-4 text-right">{ provider.baseFixed !== null ? <span><span className="text-slate-600 text-xs">$</span>{provider.baseFixed}</span> : <BlankCell /> }</td>
      <td className="p-4 text-right">{ provider.baseVariable !== null ? <span>{provider.baseVariable}<span className="text-slate-600 text-xs">%</span></span> : <BlankCell /> }</td>
      <td className="p-4 text-right">{ provider.baseNodes !== null ? provider.baseNodes : <BlankCell /> }</td>
    </tr>
  );
}

export default Row