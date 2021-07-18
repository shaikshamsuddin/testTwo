import * as React from 'react';
import styles from './EmployeeFaq.module.scss';
import { IEmployeeFaqProps } from './IEmployeeFaqProps';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import FaqComponent from '../subComponets/FaqComponent';
import { SPHttpClient } from '@microsoft/sp-http';


export default class EmployeeFaq extends React.Component<IEmployeeFaqProps, any> {

  constructor(props){
    super(props)
    this.state={
      listStyle:[]
    }
  }

  componentDidMount() {
    this.props.context.spHttpClient.get(this.props.context.pageContext.web.absoluteUrl + "/_api/web/Lists/GetByTitle('NewMock_EmployeeFAQ')/items",SPHttpClient.configurations.v1)
    .then(data => data.json())
    .then(data => {
      console.log(data)
      this.setState({
        listStyle:data.value.map(ques => ({
          Question:ques.Title,
          Answer:ques.Answer
        }))
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  public render(): React.ReactElement<IEmployeeFaqProps> {
    const {listStyle} = this.state
    return (
      <div className={ styles.employeeFaq }>
     <Typography className={styles.mainHeading}>
        Employee FAQs 
      </Typography>
      <List
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {
        listStyle.map((data,index)=>(
          <FaqComponent Answer={data.Answer} Question={data.Question} key={index} color={this.props.color} />
        ))
      }

    </List>
      </div>
    );
  }
}
