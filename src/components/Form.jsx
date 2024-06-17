import { useState } from "react"
import getWords from '../utils/getWords'
import getItemCountsAndPercentages from '../utils/getItemCountsAndPercentages'
import { Link, useNavigate } from "react-router-dom"

export default function Form({ data, handleSetData }) {
  const [input, setInput] = useState({ title: '', text: '' })

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    const words = getWords(input.text);
    const result = getItemCountsAndPercentages(words);
    const id = data.length;
    handleSetData({ id, title: input.title, data: result });

    navigate(`/${id}`);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col text-center w-full mt-5">
        <Link to={"/about"} className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ABOUT US </Link>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Keyword Finder!</h1>
        <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500">Securely and confidentially find your keywords. Enter the text or description here, and you will get <span className="bg-yellow-600 text-gray-100 rounded-md px-1">all the keywords</span> and their use rate. And saving your private data to your browser on your device, without sharing it with the rest of the world.</p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-4xl">
        <form className="space-y-6 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
          {/* block w-full rounded-md border-0 py-1 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 */}
          <div className="py-1 px-3">

            <div className="mt-2">
              <input
                id="title"
                name="title"
                autoComplete="off"
                required
                placeholder="Title"
                className="placeholder:text-gray-400 sm:text-lg sm:leading-6 w-full font-medium outline-none"
                value={input.title}
                onChange={handleChange}
              />
            </div>
            <div className="mt-2">
              <textarea
                id="text"
                name="text"
                required
                rows={10}
                placeholder="Write a description..."
                className="placeholder:text-gray-400 sm:text-base sm:leading-6 w-full font-regular resize-none outline-none"
                value={input.text}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="border-t border-grey-300 py-2 px-3 flex justify-between items-center">
            <p className=""><span className="font-bold">Note:</span> Title for find out this data in future </p>
            <button
              type="button"
              className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>

  )
}
