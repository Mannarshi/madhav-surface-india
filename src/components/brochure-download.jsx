"use client";

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileDown, FileText, Eye, Download, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

// Same Google Form as the contact and sample order forms; leads are tagged "Brochure Download"
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScc8OjjDyskQtzlB-6gePmyF-68I2PZAopa2R7xRKIpb_Kuzw/formResponse';
const LEAD_STORAGE_KEY = 'brochureLeadSubmitted';

// fileId is the Google Drive file ID
const brochures = [
    { title: 'Master Catalogue', description: 'Marble, Granite and Quartzite collection', fileId: '1cgxtSH7gsotId_DCWpGvqrrIXFoWTMSu' },
    { title: 'Marble Collection', fileId: '1b4aRlbrNOV9lJTIzLfcYjM6I2Mkvyzzb' },
    { title: 'Granite Collection', fileId: '1hi5_2VFsXebm-xN4sgObmfPTJBzb69dd' },
    { title: 'Quartzite Collection', fileId: '1ETiKfQ0zEBIa5synM9cyS2TgzZtB_TAN' },
    { title: 'Tile Collection', fileId: '1TWxiDBA6vdRtAhUKTURgDH4vxo-Nn_s1' },
];

// ISO 3166-1 alpha-2 codes; names come from the browser so they stay current
const COUNTRY_CODES = 'AF AX AL DZ AS AD AO AI AG AR AM AW AU AT AZ BS BH BD BB BY BE BZ BJ BM BT BO BA BW BR BN BG BF BI CV KH CM CA KY CF TD CL CN CO KM CG CD CK CR CI HR CU CW CY CZ DK DJ DM DO EC EG SV GQ ER EE SZ ET FJ FI FR GF PF GA GM GE DE GH GI GR GL GD GP GU GT GG GN GW GY HT VA HN HK HU IS IN ID IR IQ IE IM IL IT JM JP JE JO KZ KE KI KP KR XK KW KG LA LV LB LS LR LY LI LT LU MO MG MW MY MV ML MT MH MQ MR MU YT MX FM MD MC MN ME MS MA MZ MM NA NR NP NL NC NZ NI NE NG MK NO OM PK PW PS PA PG PY PE PH PL PT PR QA RE RO RU RW BL KN LC MF PM VC WS SM ST SA SN RS SC SL SG SX SK SI SB SO ZA SS ES LK SD SR SE CH SY TW TJ TZ TH TL TG TO TT TN TR TM TC TV UG UA AE GB US UY UZ VU VE VN VG VI YE ZM ZW'.split(' ');

const fieldClass = 'text-foreground focus-visible:border-muted focus-visible:ring-ring/20';

const readLeadFlag = () => {
    try {
        return window.localStorage.getItem(LEAD_STORAGE_KEY) === 'true';
    } catch {
        return false;
    }
};

const BrochureDownload = () => {
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', country: '' });

    useEffect(() => {
        setMounted(true);
        setSubmitted(readLeadFlag());
    }, []);

    useEffect(() => {
        if (!isOpen) return;
        const handleKey = (e) => e.key === 'Escape' && setIsOpen(false);
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [isOpen]);

    const countries = useMemo(() => {
        if (!mounted) return [];
        let names;
        try {
            names = new Intl.DisplayNames(['en'], { type: 'region' });
        } catch {
            names = null;
        }
        return COUNTRY_CODES
            .map((code) => names?.of(code) ?? code)
            .sort((a, b) => a.localeCompare(b));
    }, [mounted]);

    if (!mounted) return null;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const payload = new FormData();
        payload.append('entry.698176508', formData.name.trim());
        payload.append('entry.1954099121', formData.email.trim());
        payload.append('entry.554263998', formData.country);
        payload.append('entry.1568563042', 'Brochure Download');

        try {
            await fetch(FORM_URL, { method: 'POST', body: payload, mode: 'no-cors' });
        } catch (error) {
            // Still show the brochures; the visitor should not be blocked by a failed lead submission
            console.error('Error submitting brochure form:', error);
        }

        try {
            window.localStorage.setItem(LEAD_STORAGE_KEY, 'true');
        } catch {
            // Storage can be unavailable (private mode); the form will simply show again next visit
        }

        setSubmitting(false);
        setSubmitted(true);
    };

    const canSubmit = formData.name.trim() && formData.email.trim() && formData.country && !submitting;

    return (
        <>
            <motion.button
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-16 md:bottom-12 left-5 z-50 bg-primary text-primary-foreground p-3 sm:px-5 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2 cursor-pointer"
                aria-label="Download Brochure"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                <FileDown className="w-7 h-7 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline font-semibold">Download Brochure</span>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-foreground/50 z-[100] flex items-center justify-center p-4"
                        onClick={(e) => {
                            if (e.target === e.currentTarget) setIsOpen(false);
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="brochure-dialog-title"
                            className="bg-background rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-primary-foreground/20 rounded-full transition-colors"
                                    aria-label="Close"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                                <div className="flex items-center gap-3 pr-8">
                                    <div className="p-3 bg-primary-foreground/20 rounded-xl">
                                        <FileDown className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 id="brochure-dialog-title" className="text-2xl font-bold">Download Brochure</h2>
                                        <p className="text-primary-foreground/90">
                                            {submitted ? 'Choose a brochure to view or download' : 'Fill in your details to access our brochures'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 overflow-y-auto">
                                {submitted ? (
                                    <ul className="space-y-3">
                                        {brochures.map((brochure) => (
                                            <li
                                                key={brochure.fileId}
                                                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border border-border rounded-xl"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-10 h-10 bg-foreground/10 rounded-lg flex items-center justify-center">
                                                        <FileText className="w-5 h-5 text-foreground" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground">{brochure.title}</p>
                                                        {brochure.description && (
                                                            <p className="text-sm text-gray-500">{brochure.description}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2 pl-13 sm:pl-0">
                                                    <a
                                                        href={`https://drive.google.com/file/d/${brochure.fileId}/view`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-foreground bg-foreground/5 border border-foreground/20 rounded-lg hover:bg-foreground/10 transition-colors duration-200"
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                        View
                                                    </a>
                                                    <a
                                                        href={`https://drive.google.com/uc?export=download&id=${brochure.fileId}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-white bg-foreground rounded-lg hover:bg-foreground/90 transition-colors duration-200"
                                                    >
                                                        <Download className="w-4 h-4" />
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="space-y-2">
                                            <Label htmlFor="brochure-name" className="text-sm font-medium text-gray-700">
                                                Name *
                                            </Label>
                                            <Input
                                                id="brochure-name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className={fieldClass}
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="brochure-email" className="text-sm font-medium text-gray-700">
                                                Email *
                                            </Label>
                                            <Input
                                                id="brochure-email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className={fieldClass}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="brochure-country" className="text-sm font-medium text-gray-700">
                                                Country *
                                            </Label>
                                            <select
                                                id="brochure-country"
                                                name="country"
                                                autoComplete="country-name"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full h-9 rounded-md border border-input bg-transparent px-3 text-sm text-foreground shadow-xs outline-none focus-visible:border-muted focus-visible:ring-[3px] focus-visible:ring-ring/20"
                                            >
                                                <option value="" disabled>Select your country</option>
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>{country}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <Button
                                            type="submit"
                                            disabled={!canSubmit}
                                            className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/20 disabled:text-white disabled:cursor-not-allowed text-primary-foreground font-semibold py-4 px-6 transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Send className="w-5 h-5" />
                                            {submitting ? 'Submitting...' : 'Get Brochures'}
                                        </Button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default BrochureDownload;
