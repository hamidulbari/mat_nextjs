const MatExamStructure: React.FC = () => {
    return (<>

        <section className="section-spacing ">
            <div className="max-w-6xl mx-auto">
                <div className="itle-wrapper lg:text-center">
                    <h2 className="primary-color">
                        Know the MAT Exam Structure
                    </h2>
                    <p>
                        MAT is built around flexibility and choice, making it one of the most candidate-friendly management entrance exams.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-10 gap-[50px] text-sm">
                    <div className="item bg-[var(--primary-color)] lg:rounded-xl rounded-lg md:p-10 p-3 order-2 !lg:order-1 text-white h-full">

                        <p>
                            MAT has five sections, each with thirty questions. A total of 150 questions are to be attempted over 120 minutes.
                        </p>

                        <table className="[&_th]:px-4 [&_th]:py-2 [&_td]:px-4 [&_td]:py-2 [&_th]:border [&_td]:border   border-white w-full">
                            <thead>
                                <tr>
                                    <th className="!text-start primary-color border-white bg-white px-3">Section No.</th>
                                    <th className="!text-start primary-color border-white bg-white px-3">Section Name</th>
                                    <th className="!text-start primary-color border-white bg-white px-3">No. of Questions</th>
                                </tr>
                            </thead>
                            <tbody className=" ">
                                <tr>
                                    <td>I</td>
                                    <td>Language Comprehension</td>
                                    <td>30</td>


                                </tr>
                                <tr>
                                    <td>II</td>
                                    <td>Intelligence & Critical Reasoning</td>
                                    <td>30</td>

                                </tr>
                                <tr>
                                    <td>III</td>
                                    <td>Mathematical Skills</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>IV</td>
                                    <td>Data Analysis & Sufficiency</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>V</td>
                                    <td>Economic & Business Environment</td>
                                    <td>30</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="content-wrapper mt-3">
                            <p className="!mb-0">
                                -0.25 Negative Marking.
                            </p>
                            <p>
                                All five sections count toward your MAT score.
                            </p>
                        </div>
                    </div>
                    <div className="item  order-1 lg:order-2">
                        <div className="w-full lg:h-full h-[240px] bg-[url('/images/aasfdlk.webp')] lg:rounded-xl rounded-lg bg-cover bg-no-repeat"></div>
                    </div>
                </div>

            </div>
        </section>

    </>)
}

export default MatExamStructure;