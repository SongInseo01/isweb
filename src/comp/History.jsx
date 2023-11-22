import React from "react";
import "./History.css";

function History() {
    const awards = [
        // IT 관련 수상 내역 추가
        { name: 'Best Innovative Software Award', date: '2023', description: 'For groundbreaking software development in AI.' },
        { name: 'Tech Leader of the Year', date: '2022', description: 'Awarded for exceptional leadership in technology projects.' },
        { name: 'Cybersecurity Excellence Award', date: '2023', description: 'Recognized for outstanding contributions to cybersecurity.' },
        { name: 'Best Mobile App Developer', date: '2021', description: 'For developing the most innovative mobile application.' },
        { name: 'AI Research Achievement Award', date: '2022', description: 'For significant contributions to AI research and advancements.' },
        { name: 'Outstanding Cloud Computing Initiative', date: '2023', description: 'Awarded for excellence in cloud technology implementations.' },
        { name: 'Digital Transformation Leader', date: '2021', description: 'Recognized for leading successful digital transformation projects.' },
        { name: 'Top IoT Innovator', date: '2022', description: 'For innovative use of IoT technology in product development.' },
        { name: 'Best Big Data Analytics Solution', date: '2023', description: 'Awarded for developing an advanced big data analytics platform.' },
        { name: 'Outstanding Open Source Contribution', date: '2022', description: 'For significant contributions to the open source community.' },
    ];

    return (
        <div className="history-container">
            <h1>My Awards</h1>
            <div className="awards-list">
                {awards.map((award, index) => (
                    <div key={index} className="award">
                        <h2>{award.name}</h2>
                        <p className="date">{award.date}</p>
                        <p className="description">{award.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History;
