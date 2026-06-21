
import Image from "next/image";
import { IoIosArrowUp } from "react-icons/io";
import sectionImg from '../../public/images/aad.webp'


const YourMat: React.FC = () => {

    return (<>

        <section className="section-spacing pt-0">
            <div className="max-w-6xl mx-auto lg:text-center">
                <h2 className="primary-color">Your MAT, Your Test Mode</h2>
                <p> MAT offers two flexible test options, letting you decide how you want to attempt it.</p>
            </div>
            <div className="max-w-6xl mx-auto mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[50px]">
                    <div className="item bg-[url('/images/hand.webp')] bg-cover h-[250px] bg-no-repeat lg:rounded-xl bg-center rounded-lg  w-full lg:h-full"></div>

                    <div className="item">
                        <div className="flex flex-col gap-7">
                            <a href="https://www.instagram.com/reels/DPlJoewEm6j/" target="_blank" className="block border-4 border-[var(--primary-color)] item-wrapper-1 text-white bg-[var(--primary-color)] lg:rounded-xl rounded-lg p-4 lg:px-5">

                                <h3 className="!mb-0">Dual Mode</h3>
                                <p>Both Paper Based Test & Computer Based Test</p>

                                <p className="!mb-0 lg:text-8xl text-5xl uppercase !leading-none font-bold ">
                                    PBT + cbt
                                </p>
                                <p>
                                    Use best score for MBA/PGDM Admissions
                                </p>
                            </a>

                            <a href="https://www.instagram.com/reels/DM7t-Jpvj_I/" target="_blank" className="block item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-col gap-7 transition-[var(--global-transition)]">

                                <h3 className="!mb-0">Paper Based Test</h3>
                                <p className="!mb-0 lg:text-8xl text-5xl  transition-all uppercase primary-color !leading-none font-bold ">
                                    PBT
                                </p>

                            </a>
                            <a href="https://www.instagram.com/reels/DMxQVFGPPGA/" target="_blank" className="block item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-col gap-7 transition-[var(--global-transition)]">

                                <h3 className="!mb-0">Computer Based Test</h3>
                                <p className="!mb-0 lg:text-8xl text-5xl  transition-all uppercase primary-color !leading-none font-bold ">
                                    CBT
                                </p>

                            </a>


                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-[50px] mt-20">
                    <div className="item order-2 lg:order-1">

                        <div className="content-wrapper">
                            <h2 className="primary-color">
                                Apply for MAT and Stay on Track
                            </h2>
                            <p>
                                The MAT application is quick, fully online, and designed to be simple. Just keep your details ready, complete the form, pay the fee, and mark your exam date.
                            </p>
                        </div>
                        <div className="flex flex-col gap-7 mt-5">


                            <a href="https://www.instagram.com/reels/DM7t-Jpvj_I/" target="_blank" className="block item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-row items-end gap-5 transition-[var(--global-transition)]">
                                <p className="!mb-0 lg:text-8xl text-5xl transition-all uppercase primary-color lg:!leading-[80px] !leading-[50px] font-bold ">
                                    ₹2200
                                </p>
                                <p className="font-semibold">PBT / CBT</p>
                            </a>
                            <a href="https://www.instagram.com/reels/DM7t-Jpvj_I/" target="_blank" className="block item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-row items-end gap-5 transition-[var(--global-transition)]">
                                <p className="!mb-0 lg:text-8xl text-5xl transition-all uppercase primary-color lg:!leading-[80px] !leading-[50px] font-bold ">
                                    ₹3800

                                </p>
                                <p className="font-semibold">PBT + CBT</p>
                            </a>



                        </div>
                        <div className="content-wrapper mt-10">
                            <h2>What You Require for Registration?</h2>
                            <div className="list flex flex-row gap-2.5 flex-wrap">
                                <span className="rounded primary-color bg-[var(--border-color)] px-3 py-1">
                                    Valid Email ID
                                </span>
                                <span className="rounded primary-color bg-[var(--border-color)] px-3 py-1">
                                    Scanned Photo
                                </span>
                                <span className=" rounded primary-color bg-[var(--border-color)] px-3 py-1">
                                    Scanned Signature
                                </span>
                                <span className="rounded primary-color bg-[var(--border-color)] px-3 py-1">
                                    Payment
                                </span>
                            </div>
                        </div>


                        <div className="flex flex-col gap-7 mt-5">
                            <a href="https://www.instagram.com/reel/DMxQVFGPPGA/" target="_blank" className="block item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-col  transition-[var(--global-transition)]">
                                <h3>PBT: Paper Based Test</h3>

                                <table className="[&_th]:px-4 [&_th]:py-2 [&_td]:px-4 [&_td]:py-2 [&_th]:border [&_td]:border-0 w-full">
                                    <tbody>
                                        <tr>
                                            <td>Registration Closes</td>
                                            <td>7 December 2025</td>
                                        </tr>
                                        <tr>
                                            <td>Admit Card Release</td>
                                            <td>10 December 2025</td>
                                        </tr>
                                        <tr>
                                            <td>Test Date</td>
                                            <td>13 December 2025</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </a>
                            <a href="https://www.instagram.com/reel/DMxQVFGPPGA/" target="_blank" className="block item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-col  transition-[var(--global-transition)]">
                                <h3 className="mb-0">CBT: Computer Based Test</h3>

                                <table className="[&_th]:px-4 [&_th]:py-2 [&_td]:px-4 [&_td]:py-2 [&_th]:border [&_td]:border-0 w-full">
                                    <tbody>
                                        <tr>
                                            <td>Registration Closes</td>
                                            <td>15 December 2025</td>
                                        </tr>
                                        <tr>
                                            <td>Admit Card Release</td>
                                            <td>18 December 2025</td>
                                        </tr>
                                        <tr>
                                            <td>Test Date</td>
                                            <td>21 December 2025</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </a>
                        </div>
                        <a href="#" className="btn-primary flex w-fit flex-row items-center gap-5 justify-content-start mt-4">

                            Back to Top <IoIosArrowUp />

                        </a>
                    </div>
                    <div className="item order-1 lg:order-2 relative">
                        <Image src={sectionImg} className="w-full sticky top-0" alt="Apply for MAT and Stay on Track" />
                    </div>
                </div>

            </div>

        </section >


    </>)
}
export default YourMat;