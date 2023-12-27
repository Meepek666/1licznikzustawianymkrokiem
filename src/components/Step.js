import './Step.css';


function Step({ step, setStep }) {
    return (
        <div>
            <p>Krok:</p>
            <input
                type="number"
                value={step}
                onChange={(e) => setStep(+e.target.value)}
                min="1"
            />
        </div>
    );
}

export default Step;


