import * as React from 'react';
import styles from './Testing.module.scss';
import { ITestingProps } from './ITestingProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Collapse from '@material-ui/core/Collapse';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';




    export default function Testing(props:ITestingProps) {
      const [open, setOpen] = React.useState(false);

      const handleClick = () => {
        setOpen(!open);
      };
    return (
      <div className={ styles.testing }>
        <div className={ styles.container }>
        <div className={ styles.row }>
        <div  onClick={handleClick}   className={styles.accordionBar}>
      <span className={styles.accordionName}>
      company news
      </span>
      {open ? <RemoveIcon  className={styles.closeIconBlock} fontSize="small" /> : <AddIcon  className={styles.openIconBlock} fontSize="small"  />}
    </div>
    <Collapse in={open} timeout="auto" unmountOnExit>

            <div className={styles.accordionContent}>
              <img className={styles.imageBlock} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="no image" />
              <div className = {styles.rightSideContent}>
                <div className={styles.contentFirstBlock}>
                <span className= { styles.mainTextStyle}> 
                  SharePoint Online
                </span>
                <div className={styles.dateBlock}>
                <span className={styles.dayStyles}> 
                  Tuesday 
                </span>
                <span className = {styles.dateStyles}>
                  10/10/2021
                </span>
                </div>
                
                </div>

                <span className={styles.newsSummary}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse quaerat nisi reiciendis, quisquam animi nihil ex repudiandae
                </span>
            
              </div>
            </div>




            <div className={styles.accordionContent}>
              <img className={styles.imageBlock} src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="no image" />
              <div className = {styles.rightSideContent}>
                <div className={styles.contentFirstBlock}>
                <span className= { styles.mainTextStyle}> 
                  SharePoint Online
                </span>
                <div className={styles.dateBlock}>
                <span className={styles.dayStyles}> 
                  Tuesday 
                </span>
                <span className = {styles.dateStyles}>
                  10/10/2021
                </span>
                </div>
                
                </div>

                <span className={styles.newsSummary}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse quaerat nisi reiciendis, quisquam animi nihil ex repudiandae
                </span>
            
              </div>
            </div>
            
  </Collapse>

           
          </div>
        </div>
      </div>
    );
  
}
