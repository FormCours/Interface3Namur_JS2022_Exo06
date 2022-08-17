import { useEffect } from 'react';

const DateJour = () => {

    const today = new Date();

    const todayFormatted = today.toLocaleDateString('fr-be', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    useEffect(() => {
        console.log('[Date] Effect');

        return () => {
            console.log('[Date] Cleanup');
        };
    });

    return (
        <p>Nous sommes le {todayFormatted}</p>
    );
};

export default DateJour;