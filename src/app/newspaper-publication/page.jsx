import React from 'react';
import AnnouncementTables from '@/components/announcement-tables';

const sections = [
    {
        heading: "Newspaper Publication",
        columns: [
            {
                year: "2026-2027",
                items: [
                    { label: "AGM Intimation 2026", fileId: "1igTlRcbCmlDBvtDgWkbyhy_jlbNuqezz" },
                    { label: "30.06.2026", fileId: "11L-fXJnn4Acg8iNwA0wi7WVvAqFqgDEA" },
                    { label: "EGM Intimation July 2026", fileId: "1UVdK73A4gS9wEUsSBB8AUhGBKonAsEN6" },
                ],
            },
            {
                year: "2025-2026",
                items: [
                    { label: "30.06.2025", fileId: "1Dw-1rPoYIVj1LPk-pjF1g-nfwe-m3jdf" },
                    { label: "30.09.2025", fileId: "19a_-qkjUFHYZTfCy8xqsjU5aK2uvCVoA" },
                    { label: "31.12.2025", fileId: "1CLly-bfSDLQoavK1KERggEUq-zoTQwB-" },
                    { label: "31.03.2026", fileId: "1CNEcfqXeUX0lmxSpj4Z1MiJEI_Mym7lY" },
                    { label: "AGM Notice 2025", fileId: "1quKPgzIHuSx4qui1jekAcFYD3ulx_czt" },
                    { label: "EGM Notice July 2025", fileId: "1zUQtnOUCsKCvQmMlA6giBImIpSgXyPTI" },
                ],
            },
            {
                year: "2024-2025",
                items: [
                    { label: "30.06.2024", fileId: "1bmb2yXEuLSrImQqtUuV4dqvtNWFdcKpv" },
                    { label: "30.09.2024", fileId: "1fGzYSQAgaGefnzmGhxEqWjaDMLWJrAnb" },
                    { label: "31.12.2024", fileId: "1rMoIQSM9INXL2NepYsFbhS4UKyLr8qZ1" },
                    { label: "31.03.2025", fileId: "1aDQGM38P68d3FiuIPlTOWSLU64fsYlXR" },
                    { label: "AGM Notice 2024", fileId: "1Chq9OlZUqtk4u7Vw3iVoZO-ULzuLoZQg" },
                    { label: "EGM Notice May 2024", fileId: "1e7hbZuKequVTs7cYUQnE33vqaxlGx2XO" },
                    { label: "EGM Notice December 2024", fileId: "1RnZrZRepyH6rBEg6b9YLGXv4NtKt7TWl" },
                ],
            },
            {
                year: "2023-2024",
                items: [
                    { label: "30.06.2023", fileId: "1BvDSgSJy5biColhq9zPVulp_b-k8nQNq" },
                    { label: "30.09.2023", fileId: "1K9WfxpZYWJ7Wb6MfTkbDmRxzYbz0G-aI" },
                    { label: "31.12.2023", fileId: "1OWByxuXART6HyDlhpPKt8vbqkZB5c50u" },
                    { label: "31.03.2024", fileId: "1TTyKxhxzJjNDiI7_gwzfuMsLW_oVP0tl" },
                    { label: "AGM Notice 2023", fileId: "1GIpJ3sUZb_tcHlU-aps_aWeLbrefkv13" },
                ],
            },
            {
                year: "2022-2023",
                items: [
                    { label: "30.06.2022", fileId: "1BLkmcOM_TljzPMb9c5Izkk41rLBTt6eD" },
                    { label: "30.09.2022", fileId: "100BcM4cNTyGpbHO9MUupSbhiHBKr3bw6" },
                    { label: "31.12.2022", fileId: "1a9Mf9QMBuUiKdSx6SRRpHSTAmjFcgt-a" },
                    { label: "31.03.2023", fileId: "1Hisfo7u4IRTVI2oWGsrRxv-KzV7xc78g" },
                    { label: "AGM Notice 2022", fileId: "1YpwCewcFGBXdjKR2ORbu3bg8CteFdaIh" },
                ],
            },
            {
                year: "2021-2022",
                items: [
                    { label: "30.09.2021", fileId: "10JxlcT6TpujdwTfvWJEld5ctIZAs8m9m" },
                    { label: "31.12.2021", fileId: "1JPlrk93JsWvLxvzW72IIrRwAPqbRon6T" },
                    { label: "31.03.2022", fileId: "1o3nLJTwOW8Sa1KrELnGinTHIbhdObxNA" },
                    { label: "AGM Notice 30.09.2021", fileId: "1wEegG44cpkqJ8WphkTy1NnPnrYFMqLyy" },
                ],
            },
        ],
    },
];

const NewspaperPublication = () => {
    return (
        <AnnouncementTables
            title="Newspaper Publication"
            sections={sections}
        />
    );
};

export default NewspaperPublication;
