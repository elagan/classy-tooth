import Badge from '../Badge/Badge';
import { getTileContent } from '../../utils/api';
import './Tile.module.css';
import React = require('react');

const Tile = (props: { id: number; title: string }) => {
  return (
    <div className="styledTile">
      <h3>
        {props.title}
        <Badge id={props.id} />
      </h3>
      <span className="subTitle">Invest with us!</span>
      <p>This content should be consumed from an API</p>
    </div>
  );
};

export default Tile;
