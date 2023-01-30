import Special from './Special';

export default function Specials() {
    return (
        <div className="specials">
            <div className="warning">
                <h1>This weeks specials</h1>
                <button id="online-menu">
                    <h5>Online Menu</h5>
                </button>
            </div>
            <Special />
        </div>
    )
}