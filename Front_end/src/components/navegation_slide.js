
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './style/navegation_silde.css'

//Import das armas
import Image_Arma_M4A1 from './images/images_armas/m4a1.png'
import Image_Arma_AK47 from './images/images_armas/AWP.png'
import Image_Arma_M4A1_S from './images/images_armas/M4A1-S.png'
import Image_Arma_UZI from './images/images_armas/UZI.png'


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

  return (
      <div className="myarsenal">
        <div className={classes.root} className="myarsenal-area">
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Armas Primarias" {...a11yProps(0)} />
                <Tab label="Facas" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className="Armas_local">
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma">ola</div>
                        <img src={Image_Arma_M4A1} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma">ola</div>
                        <img src={Image_Arma_AK47} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma">ola</div>
                        <img src={Image_Arma_M4A1_S} alt="arma" />
                    </div>
                    <div className="arma-area">
                        <div className="fundo_tranparente_arma">ola</div>
                        <img src={Image_Arma_UZI} alt="arma" />
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