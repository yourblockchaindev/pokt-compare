import { ReactChild } from "react"

interface ITable {
  children: ReactChild
}

function Table({ children }: ITable) {
  return (
    <table className="table-auto w-full">{children}</table>
  )
}

export default Table