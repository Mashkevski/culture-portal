import React from 'react';
import propTypes from 'prop-types';
import { injectIntl } from 'gatsby-plugin-intl';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import AuthorOfTheDay from '../components/authorOfTheDay/authorOfTheDay';
import Developers from '../components/developerTeam/developers';
import developerTeam from '../data/team';


const IndexPage = ({ data, intl }) => {
  const poets = data.allContentfulPoetDescription.edges
    .filter(edge => edge.node.poet.lng === intl.locale);
  const { indexPage } = data.contentfulPortalDescription.text;
  const indexContent = indexPage.find(page => page.lng === intl.locale);

  return (
    <Layout>
      <section
        style={{
          padding: '50px 30px 0',
          margin: '0 auto 80px',
          maxWidth: '1000px',
        }}
      >
        <h2
          style={{
            textTransform: 'uppercase',
            paddingBottom: '40px',
            textAlign: 'center',
            fontFamily: 'sans-serif',
          }}
        >
          {indexContent.title}
        </h2>
        <p style={{ lineHeight: '25px' }}>{indexContent.description}</p>
      </section>
      <AuthorOfTheDay poets={poets} />
      <Developers team={developerTeam[intl.locale]} />
    </Layout>
  );
};


export default injectIntl(IndexPage);

export const query = graphql`
    query IndexQuery {
    allContentfulPoetDescription(filter: {node_locale: {eq: "en-US"}}) {
      edges {
        node {
          poet {
            date
            name
            vita
            lng
          }
          image {
            file {
              url
            }
          }
          title
        }
      }
    }
    contentfulPortalDescription {
      text {
        indexPage {
          description
          title
          lng
        }
      }
    }
  }
`;

IndexPage.propTypes = {
  data: propTypes.shape({
    contentfulPortalDescription: propTypes.shape({
      text: propTypes.shape({
        indexPage: propTypes.arrayOf(
          propTypes.shape({
            description: propTypes.string.isRequired,
            title: propTypes.string.isRequired,
            lng: propTypes.string.isRequired,
          }),
        ),
      }),
    }).isRequired,
    allContentfulPoetDescription: propTypes.shape({
      edges: propTypes.arrayOf(
        propTypes.shape({
          node: propTypes.shape({
            poet: propTypes.shape({
              name: propTypes.string.isRequired,
              date: propTypes.string.isRequired,
              vita: propTypes.string.isRequired,
              lng: propTypes.string.isRequired,
            }).isRequired,
            title: propTypes.string.isRequired,
          }),
        }),
      ),
    }).isRequired,

  }).isRequired,
  intl: propTypes.shape({
    locale: propTypes.string.isRequired,
  }).isRequired,

};
