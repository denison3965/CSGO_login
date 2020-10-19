
import React, { useState , useEffect }from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './style/navegation_silde.css'

//Import das armas
import Image_Arma_AK47 from './images/images_armas/AK47.png'
import Image_Arma_AUG from './images/images_armas/AUG.png'
import Image_Arma_m4a1 from './images/images_armas/m4a1.png'
import Image_Arma_M4A1 from './images/images_armas/M4A1.png'
import Image_Arma_MP5 from './images/images_armas/MP5.png'
import Image_Arma_MP9 from './images/images_armas/MP9.png'
import Image_Arma_MPA2 from './images/images_armas/MPA2.png'
import Image_Arma_P90 from './images/images_armas/P90.png'
import Image_Arma_UZI from './images/images_armas/UZI.png'
import Image_Arma_UZI2 from './images/images_armas/UZI2.png'

import Cookies from 'universal-cookie'

const cookies = new Cookies()









function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Pegando dados das armas na API
      const headers = new Headers()

      headers.append('x-access-token', cookies.get('tokeJWT'))
      headers.append('Content-Type', 'application/json');
      headers.append('Accept', 'application/json');
      headers.append('Origin','http://localhost:3000');

      const [dadosDaApi, setDadosDaApi] = useState({})


      useEffect(()=> {

          console.log(cookies.get('tokeJWT'))

          fetch('http://localhost:3001/armas', {
              method: 'GET',
              headers: headers

          }).then((res) => {

              //Verificando se o status da minha requisicao foi bem sucedido
              if(res.status == 200){
                  //se sim continua o progrma
                  const json = res.json()
                  
                  return json
              }else{
                  //se nao, vouta para a pagina inicial
                  window.location.replace("http://localhost:3000/")
              }

          }).then((json) => { 

              //setando o json que veio da minha api para enviar para um componente renderizar
              let dados = json
              setDadosDaApi(dados)
              console.log(dadosDaApi)

          }).catch((err) => {
              console.log("ocoreu um erro" + err)
          })
      },[])

  return (
      <div className="myarsenal">
        <div className={classes.root} className="myarsenal-area">
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="primary weapons" {...a11yProps(0)} />
                <Tab label="knives" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="Armas_local">
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_AK47} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_m4a1} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_MPA2} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_AUG} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_MP5} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_M4A1} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_P90} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_UZI} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_UZI2} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma"></div>
                        <img src={Image_Arma_MP9} alt="arma" />
                    </div>

                    
                    
                </div>

            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </div>
      </div>
    
  );
}