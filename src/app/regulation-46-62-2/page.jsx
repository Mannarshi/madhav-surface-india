import React from 'react';
import InvestorDocuments from '@/components/investor-documents';


import type { Metadata } from "next";
import "./regulation-46.css";

export const metadata: Metadata = {
  title: "Regulation 46 Disclosures | Madhav Marbles and Granites Limited",
  description:
    "Access statutory disclosures under Regulation 46 of SEBI LODR Regulations 2015, including company information, board policies, financial results and shareholder information.",
  alternates: {
    canonical: "https://www.madhavmarbles.com/regulation-46",
  },
};

const disclosures = [
  {
    no: 1,
    particulars: "Details of Business",
    link: "https://www.madhavmarbles.com/profile",
  },
  {
    no: 2,
    particulars: "Terms and Conditions of Appointment of Independent Director",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 3,
    particulars: "Composition of Various Committees of Board of Directors",
    link: "https://www.madhavmarbles.com/composition-of-board-and-committees",
  },
  {
    no: 4,
    particulars: "Code of conduct of Board of Directors and Senior Management Personnel",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 5,
    particulars: "Details of Establishment of Vigil Mechanism",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 6,
    particulars: "Criteria of making Payment to Non-Executive Directors",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 7,
    particulars: "Policy on dealing with Related Party Transactions",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 8,
    particulars: "Policy for determining Material Subsidiaries",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 9,
    particulars: "Details of Familiarization programme",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 10,
    particulars: "Email address of Grievance Redressal",
    link: "https://drive.google.com/file/d/1VLvlrMyIBJ1Un53vFS20FTnb4t5ucEko/view",
  },
  {
    no: 11,
    particulars:
      "Contact Information of Designated officials who are responsible for assisting and handling Investor Grievances",
    link: "https://drive.google.com/file/d/1VLvlrMyIBJ1Un53vFS20FTnb4t5ucEko/view",
  },
  {
    no: 12,
    particulars: "Financial Information",
    link: "https://www.madhavmarbles.com/financial-results",
  },
  {
    no: 13,
    particulars: "Shareholding Pattern",
    link: "https://www.madhavmarbles.com/shareholders-information",
  },
  {
    no: 14,
    particulars: "Details of agreement entered into with Media Companies and/or their Associates",
    link: null,
  },
  {
    no: 15,
    particulars: "Schedule of analysts or institutional investors meet",
    link: null,
  },
  {
    no: 16,
    particulars: "Presentations made by the Company to analysts or institutional investors",
    link: null,
  },
  {
    no: 17,
    particulars: "Audio or video recordings and transcripts of post earnings/quarterly call",
    link: null,
  },
  {
    no: 18,
    particulars:
      "New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change",
    link: null,
  },
  {
    no: 19,
    particulars: "Items in sub-regulation (1) of Regulation 47",
    link: "https://www.madhavmarbles.com/newspaper-publication",
  },
  {
    no: 20,
    particulars: "Credit ratings obtained for outstanding instruments/ revision thereof",
    link: null,
  },
  {
    no: 21,
    particulars: "Subsidiary financials",
    link: "https://www.madhavmarbles.com/financial-results",
  },
  {
    no: 22,
    particulars:
      "Secretarial compliance report as per sub-regulation (2) of regulation 24A of SEBI LODR",
    link: "https://www.madhavmarbles.com/shareholders-information",
  },
  {
    no: 23,
    particulars: "Policy for determination of materiality of events or information",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 24,
    particulars:
      "Disclosure of contact details of KMPs who are authorized for the purpose of determining materiality of an event or information and for the purpose of making disclosures to stock exchange",
    link: "https://www.madhavmarbles.com/code-of-conduct-and-policies",
  },
  {
    no: 25,
    particulars: "Disclosures under Regulation 30(8) of SEBI LODR",
    link: "https://www.madhavmarbles.com/corporate-announcements-board-meeting",
  },
  {
    no: 26,
    particulars:
      "Statements of deviation(s) or variation(s) as specified under Regulation 32 of these Regulations",
    link: null,
  },
  {
    no: 27,
    particulars: "Annual Return",
    link: "https://www.madhavmarbles.com/shareholders-information",
  },
  {
    no: 28,
    particulars: "Dividend Distribution Policy",
    link: null,
  },
];

export default function Regulation46Page() {
  return (
    <main className="reg46-page">
      <div className="reg46-container">
        <header className="reg46-header">
          <h1>Madhav Marbles and Granites Limited</h1>
          <h2>
            DISCLOSURE UNDER REGULATION 46 OF SEBI LODR REGULATIONS 2015
          </h2>
        </header>

        <div className="reg46-table-wrapper">
          <table className="reg46-table">
            <thead>
              <tr>
                <th scope="col" className="serial-column">
                  S. No.
                </th>
                <th scope="col" className="particulars-column">
                  Particulars
                </th>
                <th scope="col" className="weblink-column">
                  Weblink
                </th>
              </tr>
            </thead>

            <tbody>
              {disclosures.map((item) => (
                <tr key={item.no}>
                  <td className="serial-cell">{item.no}.</td>

                  <td className="particulars-cell">
                    {item.particulars}
                  </td>

                  <td className="weblink-cell">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.particulars}`}
                      >
                        {item.link}
                      </a>
                    ) : (
                      <span>Not Applicable</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

const Regulation4662 = () => {
    return (
        <InvestorDocuments
            title="Regulation 46 & 62"
            intro="Disclosures under Regulation 46 and 62 of SEBI (LODR) Regulations, 2015."
            documents={documents}
        />
    );
};

export default Regulation4662;
