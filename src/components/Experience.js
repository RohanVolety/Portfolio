import React from 'react';

const Experience = () => {
    const experiences = [
        {
            title: 'HighRadius Corporation | Full Stack Developer',
            duration: 'May 2023 to June 2023',
            description: [
                'Developed a Full Stack Application with UI based on React.Js coupled with Material-UI.',
                'UI consisted of a Responsive Receivables Dashboard with Search, Add, Edit, and Delete functionality.',
                'The application uses a Machine Learning Model created using Python to predict the order amount of the Customer.',
                'The application enables Analysts to keep track of order amount in a B2B world.',
            ],
        },
        {
            title: 'Harness | Community Intern (Devops)',
            duration: 'Oct 2022 to Jan 2023',
            description: [
                'Learned about various DevOps tools like CI/CD, Docker, Kubernetes, and Harness tools.',
                'Built CI/CD pipelines for various projects and automated them using triggers.',
                'Contributed to the Harness community GitHub by building, deploying, and documenting various pipelines.',
            ],
        },
        {
            title: 'DigiLocker | Backend Intern',
            duration: 'Feb 2022 to Aug 2022',
            description: [
                'Developed RESTful APIs using Flask Framework.',
                'Did authentication of APIs using HTTPBasicAuth and JWT.',
                'Worked on a Multi-user Authentication system using JWT.',
                'Learned about Apache Kafka streaming service and worked on a multi-consumer messaging service.',
            ],
        },
    ];

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-6">Experience</h1>
            <div className="grid grid-cols-1 gap-6">
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="p-6 bg-transparent rounded-lg border border-black shadow-lg w-120"
                    >
                        <h2 className="text-xl font-bold mb-2">{experience.title}</h2>
                        <p className="text-sm mb-4">{experience.duration}</p>
                        <ul className="list-disc ml-6">
                            {experience.description.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
