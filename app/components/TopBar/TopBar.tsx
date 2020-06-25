import * as React from 'react';
import { Appbar, Button, Searchbar } from 'framework7-react';

export default function TopBar() {
  return (
    <Appbar>
      <div className="left">
        <Button
          small
          panelToggle="left"
          className="display-flex"
          iconF7="bars"
        />
        <Button
          small
          className="display-flex margin-left-half"
          iconF7="square_list"
        />
        <Button
          small
          className="display-flex margin-left-half"
          iconF7="arrowshape_turn_up_left_fill"
        />
      </div>
      <div className="right">
        <Searchbar inline customSearch disableButton={false} />
      </div>
    </Appbar>
  );
}
