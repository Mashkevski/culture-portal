import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mainContainer: {
    maxWidth: '1000px',
    width: '100%',
    color: '#fff',
    padding: '30px',
    textAlign: 'center',
    borderBottom: '1px solid #dedede',
    backgroundColor: '#eeecec',
  },
  containerWithImageAndInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
  },
  containerImg: {
    gridСolumnЫtart: 1,
    gridColumnEnd: 2,
    gridRowStart: 1,
    gridRowEnd: 4,
  },
  containerWithInfo: {
    display: 'grid',
    lineHeight: '1.3',
    padding: '0',
  },
  imageAndHeadlines: {
    marginBottom: '25px',
    padding: '10px',
    height: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, .5)',
  },
  Img: {
    border: '2px solid #CFCFCF',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
  },
  containerVita: {
    fontSize: '16px',
    marginBottom: '0',
    textAlign: 'left',
    background: '#039be5',
    padding: '5px 38px 30px 38px',
    borderBottomLeftRadius: '5px',
    borderBottomRightRadius: '5px',
    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.5)',
  },
  containerplaceBirth: {
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.5)',
    fontSize: '16px',
    textAlign: 'left',
    marginBottom: '0',
    background: '#039be5',
    padding: '8px 27px 0 38px',
  },
  containerVitaFirstCh: {
    color: '#000',
  },
  containerSecondHeader: {
    color: '#090909',
    marginBottom: '20px',
  },
});

export default useStyles;
