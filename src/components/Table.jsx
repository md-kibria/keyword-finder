import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Table({ data }) {
    const [arr, setArr] = useState({ data: [] });

    const { id } = useParams()

    useEffect(() => {
        if (data.length !== 0) {
            setArr(data.find(e => e.id == id));
        }
    }, [data])

    return (
        <div>
            <div className="flex flex-col text-center w-full mt-10 px-5">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 capitalize">{arr.title}</h1>
                <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500">All the keywords and their use rate. Your data is privately saved in your browser on your device without sharing it with the rest of the world.</p>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-auto my-10 px-2">
                <table className="w-full text-md text-left rtl:text-right text-gray-500 table-fixed">
                    <thead className="text-md text-gray-600 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Keyword
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Total
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Rate
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr.data.map(item => (
                            <tr key={item.key} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap lowercase">
                                    {item.key}
                                </th>
                                <td className="px-6 py-4 text-center">
                                    {item.count}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {item.perc}%
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}