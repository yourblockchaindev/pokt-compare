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

function Header() {
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

export default Header