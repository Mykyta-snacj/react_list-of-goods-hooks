import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

export const App: React.FC = () => {
  const [sortBy, setSortBy] = useState(SortType.NONE);
  const [isReversed, setIsReversed] = useState(false);
  let visibleGoods = [...goodsFromServer];

  if (sortBy === SortType.ALPHABET) {
    visibleGoods = visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortBy === SortType.LENGTH) {
    visibleGoods = visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={
            sortBy === SortType.ALPHABET
              ? 'button is-info'
              : 'button is-info is-light'
          }
          onClick={() => setSortBy(SortType.ALPHABET)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={
            sortBy === SortType.LENGTH
              ? 'button is-success'
              : 'button is-success is-light'
          }
          onClick={() => setSortBy(SortType.LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={
            isReversed ? 'button is-warning' : 'button is-warning is-light'
          }
          onClick={() => setIsReversed(!isReversed)}
        >
          Reverse
        </button>

        <button
          type="button"
          className={
            sortBy === SortType.NONE && !isReversed
              ? ''
              : 'button is-danger is-light'
          }
          onClick={() => {
            setSortBy(SortType.NONE);
            setIsReversed(false);
          }}
        >
          {sortBy === SortType.NONE && !isReversed ? '' : 'Reset'}
        </button>
      </div>

      <ul>
        {visibleGoods.map(item => (
          <li key={item} data-cy="Good">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
