import { useState } from 'react';
import { useStoreActions } from 'easy-peasy';
import edit from '../assets/edit_icon.svg';

const Info = ({ player }) => {
  const { changeName } = useStoreActions((store) => store);
  const [name, setName] = useState('');
  const [hidden, setHidden] = useState(true);

  function handleSubmit() {
    changeName({
      player,
      name,
    });
    setHidden(true);
  }

  return (
    <div className='info'>
      <h3 style={{ marginBottom: 10 }}>
        {player.name}
        <img
          src={edit}
          alt='edit player'
          className='edit-button'
          onClick={() => setHidden(!hidden)}
        />
      </h3>

      <p>Score: {player.wins}</p>
      <div className={`name-form${hidden ? ' hidden' : ''}`}>
        <input
          type='text'
          name='name'
          id={`name_${player.index}`}
          className='name-input'
          autoComplete='off'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className='btn' onClick={handleSubmit}>
          Change Name
        </button>
      </div>
    </div>
  );
};

export default Info;
