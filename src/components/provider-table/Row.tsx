import BlankCell from "../cells/BlankCell";
import ChainCell from "../cells/ChainCell"
import RatingCell from "../cells/RatingCell";

interface ITableRow {
  provider: IProvider;
}

function Row({ provider }: ITableRow) {
  return (
    <tr className="text-slate-700 hover:bg-slate-50">
      <td className="p-4 hidden md:table-cell">{provider.name}</td>
      <td className="p-4 hidden md:table-cell text-right">
        <RatingCell rating={provider.rating?.overall} />
      </td>
      <td className="p-4 hidden md:table-cell text-right">
        <ChainCell chainIds={provider.chainIds} />
      </td>
      <td className="p-4 hidden md:table-cell text-right">{ provider.baseFixed !== null ? <span><span className="text-slate-600 text-xs">$</span>{provider.baseFixed}</span> : <BlankCell /> }</td>
      <td className="p-4 hidden md:table-cell text-right">{ provider.baseVariable !== null ? <span>{provider.baseVariable}<span className="text-slate-600 text-xs">%</span></span> : <BlankCell /> }</td>
      <td className="p-4 hidden md:table-cell text-right">{ provider.baseNodes !== null ? provider.baseNodes : <BlankCell /> }</td>

      <td className="md:hidden">
        <table className="table-fixed w-full border">
          <tbody>
            <tr>
              <td className="p-2 bg-slate-50 uppercase text-xs text-slate-400">Name</td>
              <td className="p-2">{provider.name}</td>
            </tr>
            <tr>
              <td className="p-2 bg-slate-50 uppercase text-xs text-slate-400">Rating</td>
              <td className="p-2"><RatingCell rating={provider.rating?.overall} /></td>
            </tr>
            <tr>
              <td className="p-2 bg-slate-50 uppercase text-xs text-slate-400">Chains</td>
              <td className="p-2"><ChainCell chainIds={provider.chainIds} /></td>
            </tr>
            <tr>
            <td className="p-2 bg-slate-50 uppercase text-xs text-slate-400">Fee</td>
            <td className="p-2">{ provider.baseFixed !== null ? <span><span className="text-slate-600 text-xs">$</span>{provider.baseFixed}</span> : <BlankCell /> }</td>
            </tr>
            <tr>
            <td className="p-2 bg-slate-50 uppercase text-xs text-slate-400">Rev. Share</td>
            <td className="p-2">{ provider.baseVariable !== null ? <span>{provider.baseVariable}<span className="text-slate-600 text-xs">%</span></span> : <BlankCell /> }</td>
            </tr>
            <tr>
            <td className="p-2 bg-slate-50 uppercase text-xs text-slate-400">Min. Nodes</td>
            <td className="p-2">{ provider.baseNodes !== null ? provider.baseNodes : <BlankCell /> }</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default Row