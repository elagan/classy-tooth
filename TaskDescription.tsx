import React from 'react';

const TaskDescription = () => {
  return (
    <div>
      <h2>Tasks</h2>
      <ol>
        <li>
          <strong>Tile Component</strong>
          <br />
          The Tile component currently is a static component, make its content
          dynamic by consuming it from the API via getTileContent.
        </li>
        <li>
          <strong>Tile Badge Hideability</strong>
          <br />
          Each Tile component has a badge that displays the Tile's ID as well as
          a ❌ icon. Enhance the app so that the Badge component is hidden when
          the user clicks on the ❌ icon
        </li>
        <li>
          <strong>Tile Badge Styling</strong>
          <br />
          Enhance the app so that
          <ul>
            <li>
              The Badge component is positioned horizontally to the Tile title
              at the right end of the Tile
              <br />
              <img
                src="https://raw.githubusercontent.com/elagan18/classy-tooth/master/public/design.jpg"
                height="200px"
              />
            </li>
            <li>
              The user realizes that the ❌ icon is clickable when hovering on
              it.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default TaskDescription;
