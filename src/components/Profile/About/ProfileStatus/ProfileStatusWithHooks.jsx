import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [statusText, setStatusText] = useState(props.status);

  useEffect(() => {
    setStatusText(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(statusText);
  }

  const setStatus = (e) => {
    setStatusText(e.target.value);
  }

  return (
    <div>
      {!editMode ?
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || 'Say something...'}</span>
        </div>

        :

        <div>
          <input autoFocus={true} onChange={setStatus} onBlur={deactivateEditMode} value={statusText || 'Hello...'} />
        </div>
      }
    </div>
  );

}

export default ProfileStatusWithHooks;