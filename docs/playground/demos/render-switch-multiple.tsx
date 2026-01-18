/**
 * title: Multiple Mode
 * description: Render all matching children when multiple is true
 */
import { RenderSwitch } from '@jswork/react-render-controls';
import { useState } from 'react';
import './render-switch-multiple.scss';

export default () => {
  const [hasRead, setHasRead] = useState(true);
  const [hasWrite, setHasWrite] = useState(true);
  const [hasDelete, setHasDelete] = useState(false);

  return (
    <div className="render-switch-multiple-demo">
      <h3>Multiple Mode Demo</h3>
      <p className="description">
        When <code>multiple</code> is <code>true</code>, all matching children are rendered.
      </p>

      <div className="demo-section">
        <h4>Toggle Permissions:</h4>
        <div className="permission-toggles">
          <label className="toggle">
            <input type="checkbox" checked={hasRead} onChange={() => setHasRead(!hasRead)} />
            <span>Read Permission</span>
          </label>
          <label className="toggle">
            <input type="checkbox" checked={hasWrite} onChange={() => setHasWrite(!hasWrite)} />
            <span>Write Permission</span>
          </label>
          <label className="toggle">
            <input type="checkbox" checked={hasDelete} onChange={() => setHasDelete(!hasDelete)} />
            <span>Delete Permission</span>
          </label>
        </div>
      </div>

      <div className="demo-section">
        <h4>Current Permissions:</h4>
        <div className="permissions">
          <span className={`permission ${hasRead ? 'active' : ''}`}>Read: {hasRead ? '✓' : '✗'}</span>
          <span className={`permission ${hasWrite ? 'active' : ''}`}>Write: {hasWrite ? '✓' : '✗'}</span>
          <span className={`permission ${hasDelete ? 'active' : ''}`}>Delete: {hasDelete ? '✓' : '✗'}</span>
        </div>
      </div>

      <div className="demo-section">
        <h4>Rendered Result:</h4>
        <RenderSwitch cases={[hasRead, hasWrite, hasDelete]} multiple>
          <div className="permission-badge read">Read Permission Granted</div>
          <div className="permission-badge write">Write Permission Granted</div>
          <div className="permission-badge delete">Delete Permission Granted</div>
        </RenderSwitch>
      </div>

      <div className="explanation">
        <p>
          <strong>Active permissions:</strong>{' '}
          {[hasRead && 'Read', hasWrite && 'Write', hasDelete && 'Delete']
            .filter(Boolean)
            .join(', ') || 'None'}
        </p>
        <p>
          Try toggling the checkboxes above to see how the <code>multiple</code> mode renders all
          matching children.
        </p>
      </div>
    </div>
  );
};
