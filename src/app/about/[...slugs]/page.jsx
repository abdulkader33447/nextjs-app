import React from 'react';

const AboutSlugpage =async ({params}) => {
    const p = await params
    console.log(p)
  return (
    <div>
      <h1>AboutSlugpage</h1>
    </div>
  );
};

export default AboutSlugpage;