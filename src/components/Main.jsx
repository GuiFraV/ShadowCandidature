import Features from "./Features"

const Main = () => {
    return (
        <main>
            <div className="mt-32 flex items-center justify-between">
                <h1 className="w-3/6 text-left text-5xl">Front End Developer, Franguiadakis Guillaume</h1>
                <div className="flex flex-col md:flex-row">
                <input
                    type="text"
                    id="email"
                    placeholder="Email Address"
                    className="w-full md:w-auto mb-2 md:mb-0 md:mr-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="submit"
                    value="Add me"
                    className="w-full md:w-auto px-6 py-2 bg-[#923ADB] text-white font-bold rounded-md cursor-pointer hover:bg-[#7e32b8] transition duration-300"
                />
                </div>
            </div>

            <Features />

        </main>
    )
}

export default Main