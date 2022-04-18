import TableChains from "../components/TableChains";
import providers from "../data/providers/providers"


interface ITableRow {
  provider: IProvider;
}

const headers = [
  {
    name: "Name",
    klass: "",
  },
  {
    name: "Chains",
    klass: "text-right",
  },
  {
    name: "Base Fee",
    klass: "text-right",
  },
  {
    name: "Rev. Share",
    klass: "text-right",
  },
  {
    name: "Min. Nodes",
    klass: "text-right",
  },
];

function TableHeader() {
  return (
    <thead>
      <tr>
        {headers.map((header, key) => (
          <td
            key={key}
            className={`p-4 uppercase text-xs text-slate-400 ${header.klass}`}
          >
            {header.name}
          </td>
        ))}
      </tr>
    </thead>
  );
}

function TableBody() {
  return (
    <tbody>
      {providers.map((provider: IProvider, key) => (
        <TableRow key={key} provider={provider} />
      ))}
    </tbody>
  );
}

function TableRow({ provider }: ITableRow) {
  return (
    <tr className="text-slate-700 hover:bg-slate-50">
      <td className="p-4">{provider.name}</td>
      <td className="p-4 text-right">
        <TableChains chainIds={provider.chainIds} />
      </td>
      <td className="p-4 text-right">{ provider.baseFixed !== null ? `$${provider.baseFixed}` : <span className="text-slate-300">-</span> }</td>
      <td className="p-4 text-right">{ provider.baseVariable !== null ? `${provider.baseVariable}%` : <span className="text-slate-300">-</span> }</td>
      <td className="p-4 text-right">{ provider.baseNodes !== null ? provider.baseNodes : <span className="text-slate-300">-</span> }</td>
    </tr>
  );
}

function TablePage() {
  return (
    <div className="p-8">
      <h1 className="py-4 text-lg font-semibold text-slate-400">
        POKT Node Hosting Services
      </h1>
      <div className="bg-white shadow rounded p-2">
        <table className="table-fixed w-full">
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </div>
  );
}

export default TablePage;
