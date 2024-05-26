import './App.css';
import aids from './assets/img/aids.jpg'
import donate from './assets/img/mount-des.png'
import logon from './assets/img/logon.png'
import mountVector from './assets/img/mount_vector.svg'

function App() {
    return (
        <div className={"overflow-x-hidden"}>
            {/* Navigation */}
            <nav
                className="z-50 flex fixed w-full items-center justify-between flex-wrap bg-[#0F1014]/75 backdrop-blur-2xl backdrop-contrast-50 px-6 py-4 lg:px-40">
                <div className="flex gap-2 items-center flex-shrink-0 text-white mr-6">
                    <div className={"flex rounded-full bg-slate-100 p-1"}>
                        <img className={"w-6"} src={logon}/>
                    </div>
                    <span className="font-medium text-3xl font-logo">PuncakDonasi</span>
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
                           className="block lg:inline-block text-gray-300 hover:text-white mr-4 text-lg font-cera font-medium">
                            About
                        </a>
                        <a href="#"
                           className="block lg:inline-block text-gray-300 hover:text-white mr-4 text-lg font-cera font-medium">
                            Projects
                        </a>
                        <a href="#"
                           className="block  lg:inline-block  text-gray-300 hover:text-white text-lg font-cera font-medium">
                            Contact
                        </a>
                    </div>
                </div>
                <div>
                    <a href={"#"}
                       className={"text-white font-cera font-medium text-lg px-5 hover:bg-rose-500 shadow-lg hover:shadow-rose-500/50 transition-colors py-1 border-2 border-rose-500 rounded-3xl"}>Join
                        Us</a>
                </div>
            </nav>

            {/* Section 1 | Hero */}
            <section
                className="h-full items-center justify-center bg-[radial-gradient(circle_at_top,_#2d303b,_#0F1014)] text-white">
                <div
                    className={"flex w-screen bg-gradient-to-b from-[#0002] to-[#0F1014] py-48"}>
                    <div className="flex flex-col items-center justify-center text-center mx-auto gap-6">
                        <h1 className="mx-auto px-64 text-6xl font-cera font-bold text-white">Solusi Donasi Korban Erupsi<br/>
                            <span className={"bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text"}> Gunung Berapi</span> di
                            Indonesia
                            <span
                                className={"bg-gradient-to-r from-red-400 to-red-500 text-transparent bg-clip-text"}>.</span>
                        </h1>
                        <h2 className="text-gray-400 leading-relaxed px-72 text-lg font-cera font-medium mx-auto mt-2 mb-5">Puncak
                            adalah pusat informasi dan
                            donasi yang didedikasikan untuk memberikan bantuan dan upaya mitigasi kepada korban letusan
                            gunung di Indonesia.</h2>
                        <div className={"flex gap-20"}>
                            <div
                                className={"transition-all relative flex flex-col mt-16 bg-[radial-gradient(circle_at_top_left,_#373b46,_#1b1d25)] w-80 h-fit rounded-xl "}>
                                <img className={"p-2 absolute bottom-0"} src={mountVector}/>
                                <div className={"rounded-xl p-4 z-10 bg-gradient-to-r from-[#1b1d2566] to-[#1b1d25]"}>
                                    <div className={"items-start"}>
                                        <div className={"flex justify-between"}>
                                            <div
                                                className={"w-fit bg-rose-600 px-2 py-0.5 rounded-full font-semibold text-sm"}>Level
                                                IV (Awas)
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     width="26" height="26">
                                                    <path stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="1.5"
                                                          d="M12 2.75a9.25 9.25 0 1 1 0 18.5 9.25 9.25 0 0 1 0-18.5Z"
                                                          clip-rule="evenodd"
                                                          className="colorStroke200E32 svgStroke stroke-gray-400"></path>
                                                    <path stroke-linecap="round"
                                                          stroke-linejoin="round" stroke-width="1.5"
                                                          d="M11.995 8.204v4.42m0 3.172h.01"
                                                          className="colorStroke200E32 svgStroke stroke-gray-400"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className={"w-fit font-cera font-medium text-2xl font-bold"}>Gunung Merapi</div>
                                        <div className={"w-fit text-gray-400 text-left text-xs"}>25 April 2024
                                        </div>
                                    </div>
                                    <div
                                        className={"w-fit ml-auto text-right text-gray-300 drop-shadow-lg bg-[#414550]/15 backdrop-saturate-100 backdrop-blur-sm shadow-lg  px-2 py-1 rounded-lg"}>
                                        <p>Tewas (23)</p>
                                        <p>Terluka (12)</p>
                                        <p>Dievakuasi (40)</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className={"flex justify-center gap-12"}>
                                    <a className="group flex bg-transparent border-2  font-cera font-bold px-5 py-3 rounded-xl border-gray-500 hover:border-gray-200 transition-all uppercase tracking-wider text-white"
                                       href="#">Get Started
                                    </a>
                                    <a className="group flex bg-transparent border-2  font-cera font-bold px-5 py-3 rounded-xl border-sky-500/75 hover:border-sky-500 shadow-lg hover:shadow-sky-500/50 transition-all uppercase tracking-wider text-white"
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
                                        <h1 className={"font-cera font-medium text-xl text-start"}>Bersatu Untuk Bantu</h1>
                                        <p className={"text-sm text-gray-400 text-start text-wrap flex-wrap line-clamp-2"}>Setiap
                                            sumbangan membawa harapan bagi mereka yang terkena dampak bencana. Bersama,
                                            kita bisa membuat perbedaan yang besar.</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={"flex flex-col mt-16 bg-[radial-gradient(circle_at_top_right,_#262933,_#1b1d25)] w-80 h-fit rounded-xl p-4"}>
                                <h1 className={"text-xl font-cera  text-gray-400 w-fit"}>Donasi Terkumpul</h1>
                                <p className={"w-fit text-3xl font-montserrat font-semibold bg-gradient-to-r from-sky-600 to-sky-400 text-transparent bg-clip-text tracking-wide"}>Rp.
                                    17.345.000
                                </p>
                                <p className={"w-fit text-white/60 font-montserrat text-sm py-1"}>+ Rp. 100.000 <span
                                    className={"text-xs text-white/50"}>• 3 menit yang lalu</span>
                                </p>
                                <p className={"text-right text-gray-400 text-sm mt-4"}>Erupsi <span
                                    className={"text-rose-400"}>Gunung Merapi</span>
                                    <br/><span className={"text-xs text-gray-400/75"}>Magelang, Jawa Tengah</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 | Donasi */}
            <section className={"w-full"}>
                <div className={"flex w-full h-[120vh] bg-[radial-gradient(circle_at_right,_#262933,_#0F1014)]"}>
                    <div className={"flex w-1/2"}>
                        <div className={"my-auto mx-24 text-white font-montserrat"}>
                            <div className={"flex flex-col font-cera font-bold"}>
                                <p className="block uppercase tracking-wide text-gray-400 text-sm font-bold mb-6">Donasi</p>
                                <h1 className={"text-4xl"}>Bersama mengangkat harapan<span
                                    className={"text-indigo-500"}>.</span></h1>
                                <p className={"text-sm text-gray-400 py-1"}>Kebaikan Anda <span
                                    className={"text-indigo-500 font-semibold tracking-wide uppercase"}>sangat berarti</span> untuk
                                    mereka semua.</p>
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

            {/* Section 3 | Features */}
            <section>
                <div
                    className={"flex flex-col items-center justify-center h-screen text-white bg-[radial-gradient(circle_at_top,_#1b1d25,_#0F1014)]"}>
                    <div className={"mx-auto text-center"}>
                        <h1 className={"font-cera font-bold text-5xl  space-y-3 leading-tight"}>Real people, real
                            solutions, <br/><span className={"text-cyan-400 capitalize"}>real change</span>.</h1>
                        <p className={"text-lg mt-6 text-gray-300"}>Semua donasi ditujukan untuk membantu masyarakat
                            yang terkena dampak letusan <br/> gunung berapi dan membantu pemulihan mereka.</p>
                    </div>
                    <div className={"flex gap-16 justify-center mt-20"}>
                        <div
                            className={"w-96 h-fit bg-gradient-to-br from-white via-indigo-400 rounded-xl p-0.5 to-transparent"}>
                            <div
                                className={"flex flex-col bg-[#0F1014]  rounded-xl p-6"}>

                                <div className={"flex justify-between"}>
                                    <svg className={"mb-12"} xmlns="http://www.w3.org/2000/svg"
                                         enableBackground="new 0 0 24 24"
                                         viewBox="0 0 24 24" width="56" height="56">
                                        <path d="M12,3c-5,0-9,4-9,9s4,9,9,9s9-4,9-9S17,3,12,3z"
                                              className="colorf1b01b svgShape fill-indigo-400"></path>
                                        <path
                                            d="M21,12.1c-0.1,5-4.2,8.9-9.1,8.9c-2.4,0-4.6-1-6.2-2.6L18.4,5.6C20,7.3,21,9.6,21,12.1z"
                                            opacity=".1" fill="#000000" className="color000 svgShape"></path>
                                        <path fill="#ffffff" d="M10.5,16c-0.3,0-0.6-0.1-0.8-0.4l-1.5-2c-0.3-0.4-0.2-1.1,0.2-1.4c0.4-0.3,1.1-0.2,1.4,0.2l0.7,0.9l3.7-4.9
			c0.3-0.4,1-0.5,1.4-0.2c0.4,0.3,0.5,1,0.2,1.4l-4.5,6C11.1,15.9,10.8,16,10.5,16z"
                                              className="colorfff svgShape"></path>
                                    </svg>
                                    <p className={"font-montserrat font-bold text-5xl text-slate-800"}>01</p>
                                </div>
                                <h1 className={"text-4xl font-cera font-medium mb-4"}>Bantuan Darurat</h1>
                                <p className={"text-gray-400 font-montserrat "}>Sumbangan dapat membantu menyediakan
                                    makanan, air,
                                    tempat
                                    berlindung, dan bantuan medis kepada masyarakat yang terkena dampak.</p>
                            </div>
                        </div>
                        <div
                            className={"w-96 h-fit bg-gradient-to-br from-white via-sky-400 rounded-xl p-0.5 to-transparent"}>
                            <div
                                className={"flex flex-col bg-[#0F1014]  rounded-xl p-6"}>
                                <div className={"flex justify-between"}>
                                    <svg className={"mb-12"} xmlns="http://www.w3.org/2000/svg"
                                         enableBackground="new 0 0 24 24"
                                         viewBox="0 0 24 24" width="56" height="56">
                                        <path d="M20.8,20.7C20.6,20.9,20.3,21,20,21s-0.5-0.1-0.7-0.3l-4.4-4.4l-0.6-0.6c-0.4-0.4-0.4-1,0-1.4
			c0.4-0.4,1-0.4,1.4,0l5,5C21.2,19.7,21.2,20.3,20.8,20.7z"
                                              className="color584ae5 svgShape fill-sky-600"></path>
                                        <path d="M18,10c0,1.8-0.6,3.5-1.7,4.9c-0.4,0.5-0.9,1-1.4,1.4C13.6,17.4,11.8,18,10,18c-1.2,0-2.3-0.3-3.3-0.7
		C3.9,16,2,13.2,2,10c0-4.4,3.6-8,8-8c3.2,0,6,1.9,7.3,4.7C17.8,7.7,18,8.8,18,10z"
                                              className="color886cff svgShape fill-sky-400"></path>
                                        <path d="M20.8,20.7C20.6,20.9,20.3,21,20,21s-0.5-0.1-0.7-0.3l-4.4-4.4C13.6,17.4,11.8,18,10,18
		c-1.2,0-2.3-0.3-3.3-0.7L17.3,6.7c0.5,1,0.7,2.1,0.7,3.3c0,1.8-0.6,3.5-1.7,4.9l4.4,4.4C21.2,19.7,21.2,20.3,20.8,20.7z"
                                              opacity=".1" fill="#000000" className="color000 svgShape"></path>
                                    </svg>
                                    <p className={"font-montserrat font-bold text-5xl text-slate-800"}>02</p>
                                </div>
                                <h1 className={"text-4xl font-cera font-medium mb-4"}>Operasi Evakuasi</h1>
                                <p className={"text-gray-400 font-montserrat "}>Donasi dapat mendukung upaya evakuasi
                                    dengan menyediakan transportasi, operasi pencarian dan penyelamatan, dan pusat
                                    evakuasi.</p>
                            </div>
                        </div>
                        <div
                            className={"w-96 h-fit bg-gradient-to-br from-white via-teal-400 rounded-xl p-0.5 to-transparent"}>
                            <div
                                className={"flex flex-col bg-[#0F1014]  rounded-xl p-6"}>
                                <div className={"flex justify-between"}>
                                    <svg className={"mb-12"} xmlns="http://www.w3.org/2000/svg"
                                         enableBackground="new 0 0 24 24"
                                         viewBox="0 0 24 24" width="56" height="56">
                                        <path
                                            d="M21,12c0,5-4,9-9,9c-2.5,0-4.7-1-6.4-2.6S3,14.5,3,12c0-5,4-9,9-9c2.5,0,4.7,1,6.4,2.6C20,7.3,21,9.5,21,12z"
                                            className="color2bc98e svgShape fill-teal-400"></path>
                                        <path fill="#ffffff" d="M16.2,11H13V7.8c0-0.6-0.4-1-1-1s-1,0.4-1,1V11H7.8c-0.6,0-1,0.4-1,1s0.4,1,1,1H11v3.2c0,0.6,0.4,1,1,1
		s1-0.4,1-1V13h3.2c0.6,0,1-0.4,1-1S16.8,11,16.2,11z" className="colorfff svgShape"></path>
                                        <path d="M21,12c0,5-4,9-9,9c-2.5,0-4.7-1-6.4-2.6L18.4,5.6C20,7.3,21,9.5,21,12z"
                                              opacity=".1" fill="#000000" className="color000 svgShape"></path>
                                    </svg>
                                    <p className={"font-montserrat font-bold text-5xl text-slate-800"}>03</p>
                                </div>
                                <h1 className={"text-4xl font-cera font-medium mb-4"}>Bantuan Medis</h1>
                                <p className={"text-gray-400 font-montserrat "}> Sumbangan dapat berupa persediaan
                                    medis, peralatan, dan personel untuk merawat
                                    dan memberikan layanan kesehatan kepada masyarakat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 | News */}
            <section className={"h-[110vh] text-white"}>
                <div className={"h-full bg-erupt bg-cover bg-left bg-no-repeat"}>
                    <div
                        className={"h-full bg-[radial-gradient(circle_80rem_at_left,_#00000066,_#000000aa,_#0F1014f5,_#0F1014)]"}>
                        <div className={"flex h-full w-full"}>
                            <div className={"w-1/2 h-fit px-20 py-28"}>
                                <p className="block uppercase tracking-wide text-gray-300 text-sm font-bold mb-6">Berita</p>
                                <h1 className={"font-cera font-bold text-3xl pr-16"}>
                                    Berita dan Informasi Gunung berapi Terkini dan Terbaru.
                                </h1>
                            </div>
                            <div className={"items-center flex h-full w-1/2 "}>
                                <div
                                    className={"py-4 px-4 h-fit flex flex-col gap-2 bg-[#1b1d25]/75 backdrop-blur-lg backdrop-contrast-75 rounded-2xl"}>
                                    <div className={"flex gap-2 w-[40rem] h-48  rounded-md"}>
                                        <img width={"auto"} className={" rounded-md"}
                                             src={"https://akcdn.detik.net.id/community/media/visual/2022/12/05/deretan-gunung-berapi-di-indonesia-yang-pernah-meletus-hebat-1_43.jpeg?w=300&q=80"} alt={"news"}/>
                                        <div className={"flex flex-col justify-between px-2 py-1"}>
                                            <div>
                                                <div
                                                    className={"bg-rose-600 w-fit py-[1px] px-2 rounded-full text-sm font-cera font-medium"}>
                                                    detikNet
                                                </div>
                                                <h1 className={"font-cera font-bold text-xl line-clamp-2"}>6 Gunung Berapi di Indonesia
                                                    Berstatus
                                                    Siaga, Ini Daftarnya. </h1>
                                                <p className={"text-gray-300 text-sm line-clamp-3"}>Sejumlah gunung berapi di
                                                    Indonesia
                                                    dilaporkan mengalami peningkatan aktivitas. Sebanyak enam gunung di
                                                    antaranya berada di level III atau Siaga.</p>
                                            </div>
                                            <p className={"text-gray-400 text-sm text-right"}>Kamis, 18 Apr
                                                2024 13:30 WIB</p>
                                        </div>
                                    </div>
                                    <div className={"flex gap-2 w-[40rem] h-48 rounded-md"}>
                                        <img className={"rounded-md"}
                                             src={"https://akcdn.detik.net.id/community/media/visual/2024/03/02/gunung-ile-lewotolok-meletus_43.jpeg?w=300&q=80"}/>
                                        <div className={"flex flex-col justify-between px-2 py-1"}>
                                            <div>
                                                <div
                                                    className={"bg-rose-600 w-fit py-[1px] px-2 rounded-full text-sm font-cera font-medium"}>
                                                    detikNet
                                                </div>
                                                <h1 className={"font-cera font-bold text-xl line-clamp-2"}>Gunung Ile Lewotolok Meletus
                                                    Lagi,
                                                    Warga
                                                    Diminta Bawa Turun Ternak</h1>
                                                <p className={"text-gray-300 text-sm line-clamp-3"}>Gunung Ile Lewotolok di Kabupaten
                                                    Lembata, Nusa Tenggara Timur (NTT), kembali meletus pukul 12.53 Wita
                                                    dengan
                                                    tinggi kolom abu teramati 500 meter</p>
                                            </div>
                                            <p className={"text-gray-400 text-sm text-right"}>Kamis, 18 Apr
                                                2024 13:30 WIB</p>
                                        </div>
                                    </div>
                                    <div className={"flex gap-2 w-[40rem] h-48 rounded-md"}>
                                        <img className={"rounded-md max-w-fit"}
                                             src={"https://akcdn.detik.net.id/community/media/visual/2023/12/12/lava-pijar-gunung-merapi-1_43.jpeg?w=300&q=80"}/>
                                        <div className={"flex flex-col justify-between px-2 py-1"}>
                                            <div>
                                                <div
                                                    className={"bg-rose-600 w-fit py-[1px] px-2 rounded-full text-sm font-cera font-medium"}>
                                                    detikNet
                                                </div>
                                                <h1 className={"font-cera font-bold text-xl line-clamp-2"}>Lava Pijar dan Magma, Apa
                                                    Bedanya?</h1>
                                                <p className={"text-gray-300 text-sm line-clamp-3"}>Pada akhir November 2023, gunung
                                                    Mauna Loa di hawai mengeluarkan lelehan magma yang menarik
                                                    perhatian,
                                                    atau yang biasa disebut lava pijar. Apa itu lava pijar?</p>
                                            </div>
                                            <p className={"text-gray-400 text-sm text-right"}>Kamis, 18 Apr
                                                2024 13:30 WIB</p>
                                        </div>
                                    </div>
                                    <button
                                        className={"flex w-full place-content-center group hover:bg-gray-100/20 rounded-lg mx-auto"}>
                                        <svg className={"group-hover:stroke-gray-50 stroke-gray-400"}
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             width="36" height="36">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="m19 8.5-7 7-7-7"
                                                  className="colorStroke200E32 svgStroke"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"flex text-white bg-[radial-gradient(circle_at_top,_#1b1d25,_#0F1014)]"}>
                <div className={"w-10/12 mx-auto"}>
                    <div
                        className={"flex flex-col items-center gap-4 justify-center w-full border-b-2 border-gray-800 py-12 mt-12"}>
                        <div className={"flex rounded-full bg-slate-100 p-1.5"}>
                            <img className={"w-10"} src={logon}/>
                        </div>
                        <h1 className={"font-logo text-4xl font-bold"}>Puncak</h1>
                    </div>
                    <footer className={"items-center"}>
                        <div className={"flex justify-center gap-4 py-16 px-8"}>
                            <div>
                                <h1 className={"font-montserrat font-semibold text-2xl mb-7"}>Platform</h1>
                                <div className={"w-48 flex flex-col gap-1 font-montserratont-display text-gray-400"}>
                                    <a>Cara Kerja</a>
                                    <a>Platform</a>
                                    <a>Integrasi</a>
                                    <a>Fitur</a>
                                </div>
                            </div>
                            <div>
                                <h1 className={"font-montserrat font-semibold text-2xl mb-7"}>Support</h1>
                                <div className={"w-48 flex flex-col gap-1 font-montserratont-display text-gray-400"}>
                                    <a>Pusat Bantuan</a>
                                    <a>Komunitas</a>
                                    <a>Portal</a>
                                    <a>Protokol</a>
                                    <a>Legal</a>
                                </div>
                            </div>
                            <div>
                                <h1 className={"font-montserrat font-semibold text-2xl mb-7"}>Resources</h1>
                                <div className={"w-48 flex flex-col gap-1 font-montserratont-display text-gray-400"}>
                                    <a>Blog</a>
                                    <a>Laporan</a>
                                    <a>FAQ</a>
                                    <a>Galeri</a>
                                    <a>Pusat Bantuan</a>
                                </div>
                            </div>
                            <div>
                                <h1 className={"font-montserrat font-semibold text-2xl mb-7"}>Company</h1>
                                <div className={"w-56 flex flex-col gap-1 font-montserratont-display text-gray-400"}>
                                    <a>Tentang Kami</a>
                                    <a>Pelanggan</a>
                                    <a>Karir</a>
                                    <a>Hubungi Kami</a>
                                </div>
                            </div>
                            <div className={"ml-12"}>
                                <h1 className={"font-montserrat font-semibold text-2xl mb-7"}>Join Our Newsletter</h1>
                                <div className={"relative"}>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full bg-white font-medium block rounded-full outline-none border-0 py-3 px-4 text-black ring-1 ring-inset ring-gray-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                        placeholder="Masukkan email Anda"
                                    />
                                    <button type="button"
                                            className="top-1/2 -translate-y-1/2 right-0.5 absolute group flex p-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            width="24"
                                            height="24">
                                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M19.75 11.726h-15M13.7 5.7l6.05 6.024-6.05 6.025"
                                                  className="colorStroke200E32 svgStroke"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className={"p-2 text-sm text-gray-500 text-wrap"}>
                                    * Kami akan mengirimkan Anda pembaruan mingguan melalui email.
                                </div>
                            </div>
                        </div>
                        <div className={"py-6 mt-8 flex items-center justify-between mx-auto"}>
                            <div className={"text-lg text-gray-500"}>2024. All Rights Reserved</div>
                            <div className={"flex gap-8"}>
                                <svg className={"fill-white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                     width={24} height={24}
                                     id="twitter">
                                    <path
                                        d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
                                </svg>
                                <svg className={"fill-white"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                                     width={24} height={24}
                                     id="facebook">
                                    <path fillRule="evenodd"
                                          d="M12 5.5H9v-2a1 1 0 0 1 1-1h1V0H9a3 3 0 0 0-3 3v2.5H4V8h2v8h3V8h2l1-2.5z"
                                          clipRule="evenodd"></path>
                                </svg>
                                <svg className={"fill-white"} xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 2476 2476"
                                     id="instagram">
                                    <path
                                        d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                                </svg>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    );
}

export default App;
