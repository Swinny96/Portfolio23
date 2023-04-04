import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styled from 'styled-components'

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs container">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <PortfolioContainer className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </PortfolioContainer>
      </div>
    );
  }
}

export default Tabs;

const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
  }

  @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1rem;
  }
`