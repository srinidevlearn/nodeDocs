import React from 'react';
import NotFound from '@theme-original/NotFound';

export default function NotFoundWrapper(props) {
  return (
    <>
      <NotFound {...props} />
      <div
        style={{
          display: 'grid',
          // justifyContent: 'center',
          // alignItems: 'center',
          // height: '50vh',
          fontSize: '50px',
        }}>
        <p style={{textAlign:'center'}}>
          <a href="/nodejs-learn/">Home</a>
        </p>
      </div>
    </>
  );
}
