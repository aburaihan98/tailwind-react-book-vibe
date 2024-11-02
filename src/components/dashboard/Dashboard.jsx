import { useLoaderData } from "react-router-dom";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export default function Dashboard() {
  const booksData = useLoaderData();

  return (
    <div
      className="p-[120px] bg-[#13131308] rounded-xl mb-6"
      style={{
        height: "600px",
      }}
    >
      <ResponsiveContainer width="100%">
        <BarChart data={booksData}>
          <XAxis dataKey="rating" />
          <YAxis />
          <Bar dataKey="rating" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
