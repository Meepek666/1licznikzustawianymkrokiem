import './ButtonsPanel.css';

const ButtonsPanel = (props) => {
  return (
    <div className="buttonsPanel">
      <button onClick={()=>props.updateCounter('add')}>Add 1</button>
      <button onClick={()=>props.updateCounter('reset')}>Reinit</button>
      <button onClick={()=>props.updateCounter('zero')}>Reset</button>
    </div>
  );
};

export default ButtonsPanel;


