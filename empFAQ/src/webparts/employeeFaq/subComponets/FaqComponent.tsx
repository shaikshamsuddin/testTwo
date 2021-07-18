import * as React from 'react';
// import styles from './EmployeeServices.module.scss';
// import { IEmployeeServicesProps } from './IEmployeeServicesProps';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import { Typography } from '@material-ui/core';
import styles from './FaqComponent.module.scss';
import { IEmployeeFaqProps } from '../components/IEmployeeFaqProps';


export default function FaqComponent(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.faqComponent}>
  
 
    <div className={ open === true ? styles.minusIconBlock : styles.plusIconBlock} style={open===true ? {borderLeft: `3px solid ${props.color}`} : {borderLeft: '3px solid transparent'}}>
    <div  onClick={handleClick} className={styles.accordionBlock}>
      <Typography className={styles.accordionTextStyle}>
      {props.Question}
      </Typography>
      {open ? <RemoveIcon className={styles.minusIconStyle} /> : <AddIcon className={styles.plusIconStyle} />}
    </div>
    <Collapse in={open} timeout="auto" unmountOnExit>

      <div className={styles.contentListStyled}>
          <Typography variant="caption" >
              {props.Answer}
          </Typography>
      </div>
   
    </Collapse>
    </div>
     
  
     

    
    </div>

  );
}