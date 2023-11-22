import React from 'react';
import './Card.css';

function Card() {
    const certifications = [
        // 여기에 자격증 목록을 추가하세요
        { name: 'Oracle Certified Professional, Java SE Programmer', issuedBy: 'Oracle' },
        { name: 'Microsoft Certified: Azure Developer Associate', issuedBy: 'Microsoft' },
        { name: 'AWS Certified Developer – Associate', issuedBy: 'Amazon Web Services' },
        { name: 'Cisco Certified Network Associate (CCNA)', issuedBy: 'Cisco' },
        { name: 'Certified Information Systems Security Professional (CISSP)', issuedBy: '(ISC)²' },
        { name: 'CompTIA Security+', issuedBy: 'CompTIA' },
        { name: 'Oracle Database SQL Certified Associate', issuedBy: 'Oracle' },
        { name: 'Microsoft SQL Server database certifications', issuedBy: 'Microsoft' },
        { name: 'AWS Certified Solutions Architect – Associate', issuedBy: 'Amazon Web Services' },
        { name: 'Microsoft Certified: Azure Solutions Architect Expert', issuedBy: 'Microsoft' },
        { name: 'Google Cloud Certified - Professional Cloud Architect', issuedBy: 'Google Cloud' },
        { name: 'Red Hat Certified System Administrator (RHCSA)', issuedBy: 'Red Hat' },
        { name: 'Microsoft Certified: Azure Administrator Associate', issuedBy: 'Microsoft' },
        { name: 'Certified Ethical Hacker (CEH)', issuedBy: 'EC-Council' },
        { name: 'CompTIA Cybersecurity Analyst (CySA+)', issuedBy: 'CompTIA' },
        { name: 'Project Management Professional (PMP)', issuedBy: 'Project Management Institute' },
        { name: 'Certified ScrumMaster (CSM)', issuedBy: 'Scrum Alliance' },
        { name: 'ITIL Foundation', issuedBy: 'AXELOS' },


        // 더 추가할 수 있습니다
    ];

    return (
        <div className="card-container">
            <h1>보유 자격증</h1>
            <div className="certifications-list">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <h2>{cert.name}</h2>
                        <p>발급 기관: {cert.issuedBy}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
