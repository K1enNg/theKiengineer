import { ColumnDef } from "@tanstack/react-table"

export interface Article {
  id: string
  title: string
  date: Date
}

export interface ArticleListProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}