import Special from './Special';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Specials() {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover = useHover({ color: '#FFFFFF'}, { color: '#000000' });

    return (
        <div className="specials">
            <div className="warning">
                <h1>This weeks specials</h1>
                <Link to="/menu" {...hover}><button id="online-menu">Online Menu</button></Link>
            </div>
            <Special />
        </div>
    )
}