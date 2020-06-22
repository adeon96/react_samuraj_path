import React from 'react';
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

  state = {
    isInEditMode: false,
    statusText: this.props.status ? this.props.status : 'Say something...'
  }

  activateEditMode = () => {
    this.setState({
      isInEditMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      isInEditMode: false
    })
  }

  setStatus = (e) => {
    let text = e.target.value;

    this.setState({
      statusText: text
    })
  }

  render() {

    return (
      <div>
        {!this.state.isInEditMode ?
          <div className={style.textStatus}>
            <span onDoubleClick={this.activateEditMode}>{this.state.statusText}</span>
          </div>

          :

          <div className={style.inputStatus}>
            <input autoFocus={true} onChange={this.setStatus} onBlur={this.deactivateEditMode} value={this.state.statusText} />
          </div>
        }
      </div>
    );
  }

}

export default ProfileStatus;