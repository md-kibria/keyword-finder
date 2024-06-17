import { Link } from "react-router-dom";

export default function About() {

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="flex flex-col text-center w-full mt-5">
        <Link to={"/"} className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">HOME </Link>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">About Keyword Finder!</h1>
        <p className="lg:w-1/2 w-full mx-auto leading-relaxed text-gray-500">Securely and confidentially find your keywords. Enter the text or description here, and you will get <span className="bg-yellow-600 text-gray-100 rounded-md px-1">all the keywords</span> and their use rate. And saving your private data to your browser on your device, without sharing it with the rest of the world.</p>
      </div>
    </div>

  )
}
