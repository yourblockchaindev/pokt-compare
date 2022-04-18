import chains from "./chains";
import glob from "glob";

test("should load all chain data", async () => {
  const files = await glob.sync("./src/data/chains/*.json")
  const count = files.length
  const array = Object.values(chains)

  expect(array.length).toEqual(count)
})