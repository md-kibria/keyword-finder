import { Link } from "react-router-dom"

export default function History({ data }) {

    return (
        <div>
            <div className="flex flex-col text-center w-full mt-10 px-5">
                {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ABOUT US </h2> */}
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Data History</h1>
                <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500">Your data is privately saved in your browser on your device without sharing it with the rest of the world.</p>
            </div>


            <div className="relative overflow-x-auto shadow-md sm:rounded-lg max-w-6xl mx-auto my-10 px-2">
                <table className="w-full text-md text-left rtl:text-right text-gray-500 ">
                    <thead className="text-md text-gray-600 uppercase bg-gray-50 ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-end">
                                <span className="px-5">Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id} className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-600 whitespace-nowrap capitalize">
                                    {item.title}
                                </th>
                                <td className="px-6 py-4 text-end">
                                    <Link to={`/${item.id}`} className=" rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">View Details</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}