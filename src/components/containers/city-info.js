import React, {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
          <br />
        <div>
          {this.props.venue.name}
        </div>
        
      </div>
    );
  }
}