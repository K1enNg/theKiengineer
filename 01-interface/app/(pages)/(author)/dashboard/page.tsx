import TextArea from "@/components/textarea"
import { articles, DataTable } from "@/components/article-table"
import { columns } from "@/components/article-table"

const Dashboard = () => {
  const user = {name: "John "}

  return (
    <div>
      <h1 className="text-4xl font-bold text-left leading-tight">Welcome back, {user.name}. What's on your mind today?</h1>
      {/* <TextArea /> */}
      <DataTable columns={columns} data={articles} />
    </div>
  )
}

export default Dashboard
