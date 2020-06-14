import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTasklist } from './Tasklist';

const Dashboard = ({groups}) => (
  <div>
    {
      // eslint-disable-next-line react/jsx-key
      groups.map( group => <ConnectedTasklist id={group.id} name={group.name} />)
    }
  </div>
);

function mapStateToProps(state) {
  return {
    groups: state.groups
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);