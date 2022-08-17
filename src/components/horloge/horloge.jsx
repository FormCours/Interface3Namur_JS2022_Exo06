import { useEffect, useState } from 'react';

const Horloge = () => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
        console.log('[Horloge] Effect');
        const timerId = setTimeout(() => {
            setNow(new Date());
            console.log('Tick');
        }, 1000);

        return () => {
            console.log('[Horloge] Cleanup');
            clearTimeout(timerId);
        };

    });

    const hours = now.getHours().toLocaleString(undefined, {
        minimumIntegerDigits: 2
    });
    const minutes = now.getMinutes().toLocaleString(undefined, {
        minimumIntegerDigits: 2
    });
    const seconds = now.getSeconds();

    return (
        <p>{hours} : {minutes} : {seconds < 10 && '0'}{seconds}</p>
    );
};

export default Horloge;