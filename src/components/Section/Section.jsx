// import { useState } from 'react';
import PropTypes from 'prop-types';

//

///////////////////////////////

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

//////////////////////////

// export const Section = () => {
//   const [title, setTitle] = useState('');
//   const [children, setChildren] = useState('');

//   // const titleState = useState('');
//   // console.log(title);
//   // console.log(setTitle);

//   return (
//     <section>
//       {title && <h2 className="title">{title}</h2>}
//       {setChildren}
//     </section>
//   );
// };

// Section.propType = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
