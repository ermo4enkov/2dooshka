import * as React from 'react';
import styled from 'styled-components';
import Item from '../../components/item';

export class ItemsCollection extends React.Component<{}> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return(
        <div className="storybook__element">
            <h1 className="headerText">Items of list</h1>
            <div>
                <ul className="storybook__list">
                    <li className="storybook__item">
                        <div className="storybook__name">Default behavior</div>
                        <Item content="Новая задача на каждый день…" example newTask></Item>
                    </li>
                    <li className="storybook__item">
                        <div className="storybook__name">Hover</div>
                        <Item content="Новая задача на каждый день…" example></Item>
                    </li>
                    <li className="storybook__item">
                        <div className="storybook__name">Default behavior</div>
                        <Item content="Новая задача на каждый день…" example></Item>
                    </li>
                    <li className="storybook__item">
                        <div className="storybook__name">Default behavior</div>
                        <Item example newTask redaction></Item>
                    </li>
                </ul>
            </div>
        </div>
    );
  }
}

export default ItemsCollection;
