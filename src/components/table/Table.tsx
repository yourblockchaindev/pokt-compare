import { ReactChild } from "react"

interface ITable {
  children: ReactChild
}

function Table({ children }: ITable) {
  return (
    <table className="table-fixed w-full">{children}</table>
  )
}

export default Table