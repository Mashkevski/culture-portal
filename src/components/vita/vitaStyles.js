import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mainContainer: {
    width: '100%',
    color: '#fff',
    padding: '30px',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
    textAlign: 'center',
  },
  containerWithImageAndInfo: {
    gridTemplateRows: '63% 37%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginLeft: '9px',
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
  containerImg: {
    border: '2px solid #CFCFCF',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
  },
  containerVita: {
    fontSize: '16px',
    marginBottom: '0',
    textAlign: 'left',
    background: '#039be5',
    padding: '5px 38px 30px 38px',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    boxShadow: '0px 14px 20px rgba(0, 0, 0, 0.5)',
  },
  containerplaceBirth: {
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    boxShadow: '0 9px 20px rgba(0, 0, 0, 0.5)',
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
