import React from 'react';
import AnnouncementTables from '@/components/announcement-tables';

const sections = [
    {
        heading: "Unpaid Dividend Year Wise",
        items: [
            { label: "Unpaid Dividend 2021-22", fileId: "1mcNMLmu5yIX6maUknkp-SRtPaOkHHRii" },
            { label: "Unpaid Dividend 2020-21", fileId: "1nXCEFtbYl1f-qhNsh_3lvr9HM4Tojh9R" },
            { label: "Unpaid Dividend 2018-19", fileId: "1M99r3ngolOU3LWYy9NyQiJ_jp0VGSoLm" },
        ],
    },
    {
        heading: "Transfer of Shares",
        items: [
            { label: "Transfer of Shares to IEPF 2017-2018", fileId: "1FJUSEviPan58pTCpOw7RDT_qFdMPaPMn" },
            { label: "Transfer of Shares to IEPF 2016-2017", fileId: "1gfwFeNEa14nNo57n1WHVlNEADjeOTX_7" },
            { label: "Transfer of Shares to IEPF 2014-2015", fileId: "1Z70JsgZ_5Q_6tA3aW4Uj4SiOx3Sdn8mv" },
        ],
    },
    {
        heading: "News Paper Publication",
        items: [
            { label: "IEPF Advertisement: FY 2026-2027", fileId: "1FTJ5lslaXoz2ZNxH1cMB6B4JFTz0jbxB" },
            { label: "IEPF Advertisement: FY 2025-2026", fileId: "1-Ik5S5I-IYQLjBEusBZCwEEf0AZFsRbH" },
            { label: "IEPF Advertisement: FY 2024-2025", fileId: "13VUWCF2K9BNo-WKCVl-b5iJBQ_PiNrbE" },
            { label: "IEPF Advertisement: FY 2023-2024", fileId: "1XcGYw3iBqYZGPduNqDd0UGPOepTkCa2N" },
            { label: "IEPF Advertisement: FY 2022-2023", fileId: "1QJQqtoAhjY2OU8w4Vths_qnfgHDD0JH4" },
            { label: "IEPF Advertisement: FY 2021-2022", fileId: "1WPzehe2TrmvHJy-RV9KoMhWyROmIbhJZ" },
        ],
    },
];

const UnpaidDividend = () => {
    return (
        <AnnouncementTables
            title="Unpaid Dividend"
            sections={sections}
        />
    );
};

export default UnpaidDividend;
