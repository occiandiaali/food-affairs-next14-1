interface FoodItem {
    name: string;
    price: number;
}

export default async function MenuTable({
  query,  
}: {
  query: FoodItem[],  
}) {
    return (
        <table className="min-w-full text-gray-900 md:table">
        <thead className="rounded-lg text-left text-sm font-normal">
        <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                Description
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
                Unit price
            </th>
        </tr>
        </thead>
        <tbody className="bg-slate-100">
        {query?.map((q,i) => (
            <tr
            key={i}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
            >
                <td className="whitespace-nowrap px-3 py-3">
                    {q.name}
                </td>
                <td className="whitespace-nowrap px-3 py-3">
                    {q.price}
                </td>
            </tr>
        ))}
        </tbody>
        </table>
    );
}