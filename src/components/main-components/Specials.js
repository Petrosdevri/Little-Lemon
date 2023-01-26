import Special from './Special';

export default function Specials() {
    return (
        <div className="specials">
            <div className="warning">
                <h1>This weeks specials</h1>
                <button id="online-menu">
                    <h4>Online Menu</h4>
                </button>
            </div>
            <Special />
        </div>
    )
}