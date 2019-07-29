import React from 'react';
import propTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import AuthorOfTheDay from '../components/authorOfTheDay/authorOfTheDay';

const IndexPage = ({ data }) => (
  <Layout data={data}>
    <h2>Index page</h2>
    <AuthorOfTheDay data={data} />
  </Layout>
);

export default IndexPage;

// export const query = graphql`
//   query MyQuery {
//     allContentfulPoets {
//       edges {
//         node {
//           childContentfulPoetsPoetsIdJsonNode {
//             poets {
//               name
//               birthPlace
//               date
//               img
//               lng
//               timelineData {
//                 date
//                 text
//               }
//               videoId
//               vita
//               work {
//                 date
//                 title
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

IndexPage.propTypes = {
  data: propTypes.shape({
    allContentfulPoets: propTypes.shape({
      edges: propTypes.array,
    }),
  }),
};

IndexPage.defaultProps = {
  data: null,
};
