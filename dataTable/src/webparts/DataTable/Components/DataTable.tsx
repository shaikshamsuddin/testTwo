

import * as React from 'react';
import TableContent from '../tabContent/tableTabOne';

import { makeStyles, Theme,useTheme,withStyles,createStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SwipeableViews from 'react-swipeable-views';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';

import BackspaceRoundedIcon from '@material-ui/icons/BackspaceRounded';
import BallotRoundedIcon from '@material-ui/icons/BallotRounded';
import BorderClearRoundedIcon from '@material-ui/icons/BorderClearRounded';
import BurstModeRoundedIcon from '@material-ui/icons/BurstModeRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import ChildFriendlyRoundedIcon from '@material-ui/icons/ChildFriendlyRounded';
import ContactPhoneRoundedIcon from '@material-ui/icons/ContactPhoneRounded';
import ResponsiveTable from '../tabContent/tabContentTwo';
import DenseTable from '../tabContent/tabContentThree';



interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  dir?: string;

}

const AntTabs = withStyles({
  root: {
    borderTop: '2px solid #e8e8e8',
    backgroundColor: '#2e1534',

  },
  indicator: {
    backgroundColor: '#1890ff',
  }
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      color :'#1890ff',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#B8B5E6',
        opacity: 1,
      
      
      },
  
      '&$selected': {
        color: 'white',
        fontWeight: theme.typography.fontWeightBold,
        fontSize : 15,
      },
     
    },
    selected: {},
  }),
)(Tab)

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  
  },
  padding: {
    padding: theme.spacing(3),
  },


}));
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
       
         <Typography>{children} </Typography>
       
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}



export default function StylishTabs(props) {
  const classes = useStyles();
 const {context}=props;
  const [value, setValue] = React.useState(0);
  const theme = useTheme();


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <div  >

{/* <TableContent context={context} /> */}

      <Box>
        <AntTabs
          value={value}
          onChange={handleChange}
         
          textColor="primary"
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable auto tabs example"

        >
          <AntTab disableRipple label="Adjustable Table" icon={<AcUnitRoundedIcon />} {...a11yProps(0)} />
          <AntTab disableRipple label="Responsive Table" icon={<ApartmentRoundedIcon />} {...a11yProps(1)} />
          <AntTab disableRipple label="Sortable Table" icon={<BackspaceRoundedIcon />} {...a11yProps(2)} />
    
        </AntTabs>
      
      <SwipeableViews 
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      <TabPanel value={value} index={0}>
 <DenseTable />     
  </TabPanel>
      <TabPanel value={value} index={1}>
     
     <TableContent context={context} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        < ResponsiveTable />
      </TabPanel>
      
      </SwipeableViews>
      </Box>
    </div>
  );
}
