import './App.css';
import aids from './assets/img/aids.jpg'
import donate from './assets/img/mount-des.png'

function App() {
    return (
        <>
            {/* Navigation */}
            <nav
                className="z-10 flex fixed w-full items-center justify-between flex-wrap bg-[#0F1014]/75 backdrop-blur-2xl backdrop-contrast-50 px-6 py-4 lg:px-40">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-medium text-3xl font-logo">Puncak</span>
                </div>
                <div className="block md:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-rose-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="md:flex md:items-center w-auto hidden">
                    <div className="flex text-sm gap-12">
                        <a href="#"
                           className="block lg:inline-block text-gray-300 hover:text-white mr-4 text-lg font-display">
                            About
                        </a>
                        <a href="#"
                           className="block lg:inline-block text-gray-300 hover:text-white mr-4 text-lg font-display">
                            Projects
                        </a>
                        <a href="#"
                           className="block  lg:inline-block  text-gray-300 hover:text-white text-lg font-display">
                            Contact
                        </a>
                    </div>
                </div>
                <div>
                    <a href={"#"}
                       className={"text-white font-display text-lg px-5 hover:bg-rose-500 shadow-lg hover:shadow-rose-500/50 transition-colors py-1 border-2 border-rose-500 rounded-3xl"}>Join
                        Us</a>
                </div>
            </nav>

            {/* Section 1 | Hero */}
            <div
                className="h-full items-center justify-center bg-[radial-gradient(circle_at_top,_#2d303b,_#0F1014)] text-white">
                <div
                    className={"flex w-screen bg-gradient-to-b from-[#0002] to-[#0F1014] py-48"}>
                    <div className="flex flex-col items-center justify-center text-center mx-auto gap-6">
                        <h1 className="mx-auto px-64 text-6xl font-display text-white">Solusi Donasi Korban Erupsi<br/>
                            <span className={"bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text"}> Gunung Berapi</span> di
                            Indonesia
                            <span
                                className={"bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text"}>.</span>
                        </h1>
                        <h2 className="text-gray-400 leading-relaxed px-72 text-lg font-display mx-auto mt-2 mb-5">Puncak
                            adalah pusat informasi dan
                            donasi yang didedikasikan untuk memberikan bantuan dan upaya mitigasi kepada korban letusan
                            gunung di Indonesia.</h2>
                        <div className={"flex gap-20"}>
                            <div className={"bg-[#1b1d25] w-80 h-64 rounded-xl mt-16"}>

                            </div>
                            <div>
                                <div className={"flex justify-center gap-12"}>
                                    <a className="group flex bg-transparent border-2  font-display px-5 py-3 rounded-xl border-gray-500 hover:border-gray-200 transition-all uppercase tracking-wider text-white"
                                       href="#">Get Started
                                    </a>
                                    <a className="group flex bg-transparent border-2  font-display px-5 py-3 rounded-xl border-sky-500/75 hover:border-sky-500 shadow-lg hover:shadow-sky-500/50 transition-all uppercase tracking-wider text-white"
                                       href="#">Donate
                                        <svg className={"group-hover:ml-4 ml-2 transition-all"}
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             width="24"
                                             height="24">
                                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="1.5" d="M19.75 11.726h-15M13.7 5.7l6.05 6.024-6.05 6.025"
                                                  className="colorStroke200E32 svgStroke"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div id={"content"} className={"mt-28 relative"}>
                                    <div
                                        className={"absolute top-8 left-1/2 -translate-x-1/2 bg-[#171920] w-[23rem] h-60 rounded-xl"}></div>
                                    <img src={aids} alt={"aids"} className={"relative rounded-xl w-96 h-64"}/>
                                    <div
                                        className={"absolute flex flex-col p-2 justify-end top-0 bg-gradient-to-b from-[#0F1014]/20 via-[#0F1014bb] to-[#0F1014]  max-w-[26rem] h-64 rounded-xl"}>
                                        <h1 className={"font-display text-xl text-start"}>Bersatu Untuk Bantu</h1>
                                        <p className={"text-xs text-gray-300 text-start text-wrap flex-wrap"}>Setiap
                                            sumbangan membawa harapan bagi mereka yang terkena dampak bencana. Bersama,
                                            kita bisa membuat perbedaan yang besar.</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"flex flex-col mt-16 bg-[radial-gradient(circle_at_top_right,_#262933,_#1b1d25)] w-80 h-fit rounded-xl p-4"}>
                                <h1 className={"text-xl font-display text-gray-400 w-fit"}>Donasi Terkumpul</h1>
                                <p className={"w-fit text-3xl font-montserrat font-semibold bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text tracking-wide"}>Rp.
                                    17.345.000
                                </p>
                                <p className={"w-fit text-white/60 font-montserrat text-sm py-1"}>+ Rp. 100.000 <span
                                    className={"text-xs text-white/50"}>• 3 menit yang lalu</span>
                                </p>
                                <p className={"text-right text-slate-50/60 text-sm mt-4"}>Erupsi <span
                                    className={"text-rose-400"}>Gunung Merapi</span>
                                    <br/><span>25 April 2024</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 | Donasi */}
            <section className={"w-full"}>
                <div className={"flex w-full h-[120vh] bg-[radial-gradient(circle_at_right,_#262933,_#0F1014)]"}>
                    <div className={"flex w-1/2"}>
                        <div className={"my-auto mx-24 text-white font-montserrat"}>
                            <div className={"flex flex-col font-display"}>
                                <p className="block uppercase tracking-wide text-gray-400 text-sm font-bold mb-6">Donasi</p>
                                <h1 className={"text-4xl"}>Bersama mengangkat harapan<span
                                    className={"text-indigo-500"}>.</span></h1>
                                <p className={"text-sm text-gray-400 py-1"}>Kebaikan Anda <span className={"text-indigo-500 font-semibold tracking-wide uppercase"}>sangat berarti</span> untuk mereka semua.</p>
                            </div>
                            <form className={"mt-12 w-[30rem]"}>
                                <div className="flex flex-wrap -mx-3 mb-6 font-montserrat">
                                    <div className="w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                                            Nama Depan
                                        </label>
                                        <input
                                            type="text"
                                            name="fname"
                                            className="bg-[#262933] font-medium block w-full rounded-xl outline-none border-0 py-3 px-4 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="w-1/2 px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                                            Nama Belakang
                                        </label>
                                        <input
                                            type="text"
                                            name="lname"
                                            className="bg-[#262933] font-medium block w-full rounded-xl outline-none border-0 py-3 px-4 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>
                                <div className={"flex flex-wrap -mx-3 font-montserrat"}>
                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="bg-[#262933] font-medium block w-full rounded-xl outline-none border-0 py-3 px-4 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            placeholder="johndoe@gmail.com"
                                        />
                                    </div>
                                </div>
                                <div className={"flex flex-col flex-wrap -mx-3 mb-6 font-montserrat"}>
                                    <div className={"border-t-2 border-gray-700 w-5/6 mx-auto my-6"}></div>
                                    <label
                                        className="block uppercase tracking-wide text-gray-600 text-xs font-bold px-3 mb-2">
                                        Jumlah
                                    </label>
                                    <div
                                        className="flex flex-wrap justify-center gap-2 mb-6"
                                        role="group">
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 5.000
                                        </button>
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 10.000
                                        </button>
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 20.000
                                        </button>
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 50.000
                                        </button>
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 100.000
                                        </button>
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 150.000
                                        </button>
                                        <button type="button"
                                                className="px-5 py-3 text-sm font-semibold text-white bg-[#262933] rounded-xl focus:bg-indigo-600 focus:text-white hover:ring-2 hover:ring-indigo-600 ">
                                            Rp. 200.000
                                        </button>
                                    </div>

                                    <div className="w-full px-3">
                                        <label
                                            className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                                            Nominal
                                        </label>
                                        <div className="relative rounded-md shadow-sm mb-6">
                                            <div
                                                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="font-medium text-gray-400 sm:text-sm">Rp. </span>
                                            </div>
                                            <input
                                                type="text"
                                                name="price"
                                                className="bg-[#262933] tracking-wider font-medium block w-full rounded-xl outline-none border-0 py-3 pl-10 pr-4 text-white ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>
                                    <div className={"flex justify-end px-3"}>
                                        <button type="button"
                                                className="group flex px-5 py-3 text-sm font-semibold text-white bg-[#262933] border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white shadow-lg hover:shadow-indigo-600/50 transition-all">
                                            Lanjutkan
                                            <svg className={"group-hover:ml-4 ml-2 transition-all"}
                                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 width="24"
                                                 height="24">
                                                <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="1.5"
                                                      d="M19.75 11.726h-15M13.7 5.7l6.05 6.024-6.05 6.025"
                                                      className="colorStroke200E32 svgStroke"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                    <div className={"flex items-center w-1/2"}>
                        <img src={donate} alt={"back"} className={"mx-auto h-[36rem]"}/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
