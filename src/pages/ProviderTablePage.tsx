import ProviderTable from "../components/provider-table/ProviderTable";

function ProviderTablePage() {
  return (
    <div className="py-8">
      <h1 className="py-4 text-lg font-semibold text-slate-400">
        POKT Node Hosting Services
      </h1>
      <div className="bg-white shadow rounded p-2">
        <ProviderTable />
      </div>
    </div>
  );
}

export default ProviderTablePage;
