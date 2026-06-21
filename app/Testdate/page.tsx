
const Testdate: React.FC = () => {
    return (<>
        <section className="section-spacing">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
                    <div className="item order-2 lg:order-1">
                        <div className="content-wrapper">
                            <h1 className="primary-color">Test Date</h1>

                            <div className="list-wrapper flex flex-col gap-5">
                                <div className="item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-col  gap-3 transition-[var(--global-transition)]">

                                    <h2 className="!mb-0 primary-color">Paper Based Test</h2>

                                    <table className="[&_th]:px-0 [&_th]:py-2 [&_td]:px-0 [&_td]:py-2   w-full">

                                        <tbody className=" ">
                                            <tr>
                                                <td><strong>Registration Closes</strong></td>
                                                <td>25 May 2026</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Admit Card</strong></td>
                                                <td>28 May 2026</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Test Date</strong></td>
                                                <td>31 May 2026</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>


                                <div className="item-wrapper-1 hover:border-[var(--primary-color)] border-4 border-[var(--border-color)] bg-[var(--light-background-color)] lg:rounded-xl rounded-lg p-4 lg:px-5 flex flex-col gap-3  transition-[var(--global-transition)]">

                                    <h2 className="!mb-0 primary-color">CBT: Computer Based Test</h2>

                                    <table className="[&_th]:px-0 [&_th]:py-2 [&_td]:px-0 [&_td]:py-2   w-full">

                                        <tbody className=" ">
                                            <tr>
                                                <td><strong>Registration Closes</strong></td>
                                                <td>8 June 2026</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Admit Card</strong></td>
                                                <td>11 June 2026</td>
                                            </tr>
                                            <tr>
                                                <td><strong>Test Date</strong></td>
                                                <td>14 June 2026</td>
                                            </tr>
                                        </tbody>
                                    </table>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="item order-1 lg:order-2 bg-[url('/images/aad.webp')] lg:h-full rounded-xl lg:shadow-xl shadow h-[250px] bg-cover bg-no-repeat">

                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default Testdate;