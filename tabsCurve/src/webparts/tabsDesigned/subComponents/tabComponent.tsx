import * as React from 'react';
// import {useState } from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CompareIcon from '@material-ui/icons/Compare';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import CustomizedTables from '../dataTables/dataTableOne';
import CustomPaginationActionsTable from '../dataTables/dataTableTwo';
import EnhancedTable from '../dataTables/dataTableThree';
import { shadows } from '@material-ui/system';
import Link from '@material-ui/core/Link';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} boxShadow={2} >
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
    id: `scrollable-prevent-tab-${index}`,
    'aria-controls': `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  appBar: {
border:'1px solid  #a6a6a6',
background:'#f2f2f2',
boxShadow:'none'
  },

  activeTabBlock :{
    borderRight: '2px solid #999999',
    borderTopRightRadius: '28px',
    background:'white',
    
  },
  TabBlock :{
    // width:'100%',
    borderRight: '2px solid #999999',
    borderTopRightRadius: '28px',
    background:'#f2f2f2',

  
  
  
   
 
  },
  TabContentBox :{
      display: 'flex',
      width:'100%',
      alignItems:'center',
      justifyContent :'space-between',
      borderTopRightRadius: '10px',
      padding:'3px',
      color:'black',
      fontWeight:600,
      fontSize:'15px'

  },

  iconStyles :{
 color:' #003311'

 
   },
   selected: {},


}));

export default function TabComponent() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              display: 'none',
            }
          }}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab disableRipple className={ value==0 ? classes.activeTabBlock : classes.TabBlock} label= {<div className={classes.TabContentBox}>
             <DepartureBoardIcon className={classes.iconStyles}/> 

          <Typography>
          Transport
              </Typography> 
               </div> }  {...a11yProps(0)}  />

               <Tab disableRipple className={ value==1 ? classes.activeTabBlock : classes.TabBlock}label= {<div className={classes.TabContentBox}>
             
             <CompareIcon  className={classes.iconStyles}/> 

          <Typography>
          Information
              </Typography> 
               </div> }  {...a11yProps(1)} />

               <Tab disableRipple className={ value==2 ? classes.activeTabBlock : classes.TabBlock} label= {<div className={classes.TabContentBox}>
             <ShoppingBasket  className={classes.iconStyles}/> 

          <Typography>
          Downloads
              </Typography> 
               </div> }  {...a11yProps(2)} />

               <Tab disableRipple className={ value==3 ? classes.activeTabBlock : classes.TabBlock} label= {<div className={classes.TabContentBox}>
             <HelpIcon  className={classes.iconStyles}/> 

          <Typography>
          Companies Overviews
              </Typography> 
               </div> }  {...a11yProps(3)} />
  
          {/* <Tab icon={<PhoneIcon />} label="phone" {...a11yProps(0)} /> */}
          {/* <Tab icon={<FavoriteIcon />} aria-label="favorite" {...a11yProps(1)} />
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(2)} />
          <Tab icon={<HelpIcon />} aria-label="help" {...a11yProps(3)} /> */}
     
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <iframe src="https://web.whatsapp.com/"></iframe>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* <EnhancedTable /> */}

        <iframe  width="700" height="500" src="//www.dailymotion.com/embed/video/x4ozdrb"></iframe>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CustomPaginationActionsTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <EnhancedTable />
      </TabPanel>

    </div>
  );
}
