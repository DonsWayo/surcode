import React from 'react';
import { Appbar, Button, ListItem, List } from 'framework7-react';

export default function TopBar() {
  return (
    <Appbar style={{ backgroundColor: 'transparent', height: '' }}>
      <div className="left">
        <Button
          small
          className="display-flex margin-left-half"
          iconF7="square_list"
        />
      </div>
      <div className="right">
        <Button
          animate
          className="display-flex margin-left-half"
          iconF7="play_fill"
        />
        <List>
          <ListItem
            title=" "
            smartSelect
            smartSelectParams={{ openIn: 'popover' }}
          >
            <select name="superhero" defaultValue={['Batman']}>
              <option value="Batman">Batman</option>
              <option value="Superman">Superman</option>
              <option value="Hulk">Hulk</option>
              <option value="Spiderman">Spiderman</option>
              <option value="Ironman">Ironman</option>
              <option value="Thor">Thor</option>
              <option value="Wonder Woman">Wonder Woman</option>
            </select>
          </ListItem>
        </List>
      </div>
    </Appbar>
  );
}
