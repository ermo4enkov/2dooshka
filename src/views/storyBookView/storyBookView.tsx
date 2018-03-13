import * as React from 'react';
import Button  from '../../components/button/Button';
import ColorsPallet from '../../blocks/colorspallet/colorsPallet';
import ButtonsCollection from '../../blocks/buttonscollection/buttonsCollection';
import ItemsCollection  from '../../blocks/listitemscollection/itemsCollection';
import Calendar from '../../blocks/calendar';

export class StoryBook extends React.Component {
  render() {
    const days = this.props['data_user']['days'];

    return (
      <div className="storybook">
        <ColorsPallet />
        <div className="storybook__element">
          <h1 className="headerText">Text</h1>
          <div>Font — Source Sans Pro</div>
          <h1>H1 - everyday</h1>
          <h2 className="subtitile">H2 - everyday</h2>
          <div>Text - everyday</div>
        </div>
        <ButtonsCollection />
        <ItemsCollection />
        <Calendar days={days} />
      </div>
    );
  }
}

export default StoryBook;
