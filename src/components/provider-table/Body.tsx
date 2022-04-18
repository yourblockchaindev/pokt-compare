import providers from "../../data/providers/providers"
import Row from "./Row"

function Body() {
  return (
    <tbody>
      {providers.map((provider: IProvider, key) => (
        <Row key={key} provider={provider} />
      ))}
    </tbody>
  );
}

export default Body