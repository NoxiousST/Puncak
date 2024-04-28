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
                        <h1 className={"font-display text-5xl  space-y-3 leading-tight"}>Real people, real
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
                                <h1 className={"text-4xl font-display mb-4"}>Bantuan Darurat</h1>
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
                                <h1 className={"text-4xl font-display mb-4"}>Operasi Evakuasi</h1>
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
                                <h1 className={"text-4xl font-display mb-4"}>Bantuan Medis</h1>
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
                                    className={"py-4 px-2 h-fit flex flex-col gap-2 bg-[#1b1d25]/75 backdrop-blur-lg backdrop-contrast-75 rounded-2xl"}>
                                    <div className={"flex gap-2 w-[40rem] h-48 p-2 rounded-md"}>
                                        <img className={"rounded-md"}
                                             src={"https://akcdn.detik.net.id/community/media/visual/2022/12/05/deretan-gunung-berapi-di-indonesia-yang-pernah-meletus-hebat-1_43.jpeg?w=300&q=80"}/>
                                        <div className={"flex flex-col justify-between px-2 py-1"}>
                                            <div>
                                                <div
                                                    className={"bg-rose-600 w-fit py-[1px] px-2 rounded-full text-sm font-display"}>
                                                    detikNet
                                                </div>
                                                <h1 className={"font-display text-xl"}>6 Gunung Berapi di Indonesia
                                                    Berstatus
                                                    Siaga, Ini Daftarnya. </h1>
                                                <p className={"text-gray-300 text-sm"}>Sejumlah gunung berapi di
                                                    Indonesia
                                                    dilaporkan mengalami peningkatan aktivitas. Sebanyak enam gunung di
                                                    antaranya berada di level III atau Siaga.</p>
                                            </div>
                                            <p className={"text-gray-400 text-sm text-right"}>Kamis, 18 Apr
                                                2024 13:30 WIB</p>
                                        </div>
                                    </div>
                                    <div className={"flex gap-2 w-[40rem] h-48 p-2 rounded-md"}>
                                        <img className={"rounded-md"}
                                             src={"https://akcdn.detik.net.id/community/media/visual/2024/03/02/gunung-ile-lewotolok-meletus_43.jpeg?w=300&q=80"}/>
                                        <div className={"flex flex-col justify-between px-2 py-1"}>
                                            <div>
                                                <div
                                                    className={"bg-rose-600 w-fit py-[1px] px-2 rounded-full text-sm font-display"}>
                                                    detikNet
                                                </div>
                                                <h1 className={"font-display text-xl"}>Gunung Ile Lewotolok Meletus
                                                    Lagi,
                                                    Warga
                                                    Diminta Bawa Turun Ternak</h1>
                                                <p className={"text-gray-300 text-sm"}>Gunung Ile Lewotolok di Kabupaten
                                                    Lembata, Nusa Tenggara Timur (NTT), kembali meletus pukul 12.53 Wita
                                                    dengan
                                                    tinggi kolom abu teramati 500 meter</p>
                                            </div>
                                            <p className={"text-gray-400 text-sm text-right"}>Kamis, 18 Apr
                                                2024 13:30 WIB</p>
                                        </div>
                                    </div>
                                    <div className={"flex gap-2 w-[40rem] h-48 p-2 rounded-md"}>
                                        <img className={"rounded-md max-w-fit"}
                                             src={"https://akcdn.detik.net.id/community/media/visual/2023/12/12/lava-pijar-gunung-merapi-1_43.jpeg?w=300&q=80"}/>
                                        <div className={"flex flex-col justify-between px-2 py-1"}>
                                            <div>
                                                <div
                                                    className={"bg-rose-600 w-fit py-[1px] px-2 rounded-full text-sm font-display"}>
                                                    detikNet
                                                </div>
                                                <h1 className={"font-display text-xl"}>Lava Pijar dan Magma, Apa
                                                    Bedanya?</h1>
                                                <p className={"text-gray-300 text-sm"}>Pada akhir November 2023, gunung
                                                    Mauna Loa di hawai mengeluarkan lelehan magma yang menarik
                                                    perhatian,
                                                    atau yang biasa disebut lava pijar. Apa itu lava pijar?</p>
                                            </div>
                                            <p className={"text-gray-400 text-sm text-right"}>Kamis, 18 Apr
                                                2024 13:30 WIB</p>
                                        </div>
                                    </div>
                                    <div className={"flex w-11/12 place-content-center group hover:bg-gray-100/20 rounded-lg mx-auto"}>
                                        <svg className={"group-hover:stroke-gray-50 stroke-gray-400"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             width="36" height="36">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  strokeWidth="2" d="m19 8.5-7 7-7-7"
                                                  className="colorStroke200E32 svgStroke"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
