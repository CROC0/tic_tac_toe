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

      <p>
        Score: <strong>{player.wins}</strong>
      </p>

      {player.index === 1 ? (
        <p className='icon'>X</p>
      ) : player.index === 2 ? (
        <p className='icon'>O</p>
      ) : null}
    </div>
  );
};

export default Info;
