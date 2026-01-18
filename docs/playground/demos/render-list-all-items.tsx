import { RenderList } from '@jswork/react-render-controls';

export default () => {
  const scores = [85, 92, 78, 95, 88];

  return (
    <div>
      <h3>Scores with Average</h3>
      <RenderList
        items={scores}
        render={(score, index, items) => {
          const average = items.reduce((a, b) => a + b, 0) / items.length;
          return (
            <div style={{
              padding: '8px',
              margin: '4px 0',
              background: score > average ? '#f6ffed' : '#fff1f0',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <span>Score {index + 1}</span>
              <span style={{
                fontWeight: score > average ? 'bold' : 'normal'
              }}>
                {score}
              </span>
            </div>
          );
        }}
      />
      <div style={{ marginTop: '16px', padding: '8px', background: '#f0f0f0', borderRadius: '4px' }}>
        Average: {(scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)}
      </div>
    </div>
  );
};
