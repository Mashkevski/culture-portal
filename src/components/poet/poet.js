import React from 'react';
import propTypes from 'prop-types';

const Poet = ({ data }) => (
  <h2>
    {data ? data.node.childContentfulPoetsPoetsIdJsonNode.poets[0].name : null}
  </h2>
);

export default Poet;

Poet.propTypes = {
  data: propTypes.shape({
    node: propTypes.shape({
      childContentfulPoetsPoetsIdJsonNode: propTypes.shape({
        poets: propTypes.array,
      }),
    }),
  }),
};

Poet.defaultProps = {
  data: null,
};
