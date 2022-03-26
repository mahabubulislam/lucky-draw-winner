import React from 'react';

const Question = () => {
    return (
        <div  data-aos="flip-right" className='container mt-3 shadow'>
            <h1 className='text-center'>React Question and Answer</h1>
            <div>
                <h3>Question 1: How React works?</h3>
                <p>Answer: React is a JavaScript Library use for create User Interface. React is component based. React React render. React use JSX(JavaScript XML) for rendaring element. JSX is a system to create elements like html elements  in javascript. It is a syntactic sugar. React create a virtual DOM and compare with real DOM using state. React compare virtual DOM and real DOM with Diff algorithm</p>
                <figure>
                    <img className='w-75' src={'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220131100246/Group-2-2.jpg'} alt="" />
                    <figcaption className='text-center'>Caption: Diff Algorithm</figcaption>
                </figure>
            </div>
            <div>
                <h3>Question 2: Write difference between Props and State.</h3>
                <p>Answer:</p>
                <table className="table caption-top text-center">
                    <caption><h4 className='text-center'>Difference between Props and State</h4></caption>
                    <thead>
                        <tr>
                            <th scope="col">Props</th>
                            <th scope="col">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Props are read only	</td>
                            <td>State changes can be asynchronous</td>
                        </tr>
                        <tr>
                            <td>Props is short form of Properties</td>
                            <td>State start with default value</td>
                        </tr>
                        <tr>
                            <td>Props can not be modified</td>
                            <td>State can be modified using this.setState</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h3>Question 3: How UseState works?</h3>
                <p>Answer: UseState is a React hook. It use for when need to change any state. UseState gives a initial value and a function for update the initial value. Example: const [state, setState] = UseState(0)</p>
            </div>
        </div>
    );
};

export default Question;