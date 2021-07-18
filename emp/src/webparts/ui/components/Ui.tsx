import * as React from 'react';
import styles from './Ui.module.scss';
import { IUiProps } from './IUiProps';
//import logo from '../components/profile1';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import { Card, TextField } from '@material-ui/core';

export default class Ui extends React.Component<
IUiProps,
any 
> { 
  constructor(props: IUiProps) { 
    super(props);

    this.state = {
      userdata: [
        {
          Id: "1",
          Name: "Kalyan",
          Company: "DAEnIt",
          role : "HR",
          WorkPhone: "+91 9704367819",
          WorkEmail: "Hr@daenit.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "2",
          Name: "Anisha",
          Company: "DAEnIt",
          role : "Senior SPFX Developer",
          WorkPhone: "+91 8089853020",
          WorkEmail: "anishamaria06@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "3",
          Name: "Komal",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9063150639",
          WorkEmail: "komalkunchaparthi@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "4",
          Name: "Kalyani",
          Company: "DAEnIt",
          role : "SPFX",
          WorkPhone: "+91 8985654899",
          WorkEmail: "Kalyani@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "5",
          Name: "Shamsu",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9502124457",
          WorkEmail: "shaikshamsuddin1998@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "6",
          Name: "Harshini",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "7",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "8",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "9",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "10",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "11",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "12",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "13",
          Name: "Kalyan",
          Company: "DAEnIt",
          role : "HR",
          WorkPhone: "+91 9704367819",
          WorkEmail: "Hr@daenit.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "14",
          Name: "Anisha",
          Company: "DAEnIt",
          role : "Senior SPFX Developer",
          WorkPhone: "+91 8089853020",
          WorkEmail: "anishamaria06@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "15",
          Name: "Komal",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9063150639",
          WorkEmail: "komalkunchaparthi@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "16",
          Name: "Kalyani",
          Company: "DAEnIt",
          role : "SPFX",
          WorkPhone: "+91 8985654899",
          WorkEmail: "Kalyani@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "17",
          Name: "Shamsu",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9502124457",
          WorkEmail: "shaikshamsuddin1998@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "18",
          Name: "Harshini",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "19",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "20",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "21",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "22",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "23",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "24",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        
      ],
      tempuserdata: [
        {
          Id: "1",
          Name: "Kalyan",
          Company: "DAEnIt",
          role : "HR",
          WorkPhone: "+91 9704367819",
          WorkEmail: "Hr@daenit.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "2",
          Name: "Anisha",
          Company: "DAEnIt",
          role : "Senior SPFX Developer",
          WorkPhone: "+91 8089853020",
          WorkEmail: "anishamaria06@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "3",
          Name: "Komal",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9063150639",
          WorkEmail: "komalkunchaparthi@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "4",
          Name: "Kalyani",
          Company: "DAEnIt",
          role : "SPFX",
          WorkPhone: "+91 8985654899",
          WorkEmail: "Kalyani@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "5",
          Name: "Shamsu",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9502124457",
          WorkEmail: "shaikshamsuddin1998@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "6",
          Name: "Harshini",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "7",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "8",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "9",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "10",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "11",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "12",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "13",
          Name: "Kalyan",
          Company: "DAEnIt",
          role : "HR",
          WorkPhone: "+91 9704367819",
          WorkEmail: "Hr@daenit.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "14",
          Name: "Anisha",
          Company: "DAEnIt",
          role : "Senior SPFX Developer",
          WorkPhone: "+91 8089853020",
          WorkEmail: "anishamaria06@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "15",
          Name: "Komal",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9063150639",
          WorkEmail: "komalkunchaparthi@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "16",
          Name: "Kalyani",
          Company: "DAEnIt",
          role : "SPFX",
          WorkPhone: "+91 8985654899",
          WorkEmail: "Kalyani@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "17",
          Name: "Shamsu",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9502124457",
          WorkEmail: "shaikshamsuddin1998@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "18",
          Name: "Harshini",
          Company: "DAEnIt",
          role : "UI",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "19",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "20",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "21",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "22",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "23",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
        {
          Id: "24",
          Name: "Karthik",
          Company: "DAEnIt",
          role : "SPFX Developer",
          WorkPhone: "+91 9959197603",
          WorkEmail: "sreeharshini422@gmail.com",
          Picture: "../components/subcomponents/profile1.png",
        },
      ],
      itemList: [
        { id: "All", value: "All" },
        { id: "A", value: "A" },
        { id: "B", value: "B" },
        { id: "C", value: "C" },
        { id: "D", value: "D" },
        { id: "E", value: "E" },
        { id: "F", value: "F" },
        { id: "G", value: "G" },
        { id: "H", value: "H" },
        { id: "I", value: "I" },
        { id: "J", value: "J" },
        { id: "K", value: "K" },
        { id: "L", value: "L" },
        { id: "M", value: "M" },
        { id: "N", value: "N" },
        { id: "O", value: "O" },
        { id: "P", value: "P" },
        { id: "Q", value: "Q" },
        { id: "R", value: "R" },
        { id: "S", value: "S" },
        { id: "T", value: "T" },
        { id: "U", value: "U" },
        { id: "V", value: "V" },
        { id: "W", value: "W" },
        { id: "X", value: "X" },
        { id: "Y", value: "Y" },
        { id: "Z", value: "Z" },
      ],
      temp:"K",
      query:'',
      filteredData: []
    };

    //this.getData("Name");
   

  }
  private disable() {
    document.getElementById("kn").style.display = "none";
    //document.getElementById("table1").style.visibility = "visible";
  }   
  private enable() {
    document.getElementById("kn").style.display = "block";
    document.getElementById("kn").style.visibility = "visible";
    this.setState({temp : ""});
    this.setState({ temp: "- Data Modified" });
  }
  private filterAlphabets(selectedValue) {  
    let filteredList = [];
 
    //data for selection of alphabets
    if (selectedValue != "All") {
      let selectedVal = selectedValue.toLowerCase();

      for (let i = 0; i < this.state.userdata.length; i++) {
        let tolowerinit = this.state.userdata[i].Name;
        let tolLower = tolowerinit.toLowerCase();

        if (tolLower.startsWith(selectedVal) == true) {
          filteredList.push({
            Name: this.state.userdata[i].Name,
            Id: this.state.userdata[i].Id,
            Company : this.state.userdata[i].Company,
            role: this.state.userdata[i].role,
            WorkPhone: this.state.userdata[i].WorkPhone,
            WorkEmail: this.state.userdata[i].WorkEmail,
            Picture: this.state.userdata[i].Picture,
          });
        }
      }

      //if no data for the selected alphabet
      if (filteredList.length == 0) {
        filteredList.push({Name : `No Data`});
      }

      //if data is there for the selection
      else {
        document.getElementById("card").style.visibility='none';
        this.setState({ tempuserdata: filteredList });
        
      }
    }

    //data for the selection All
    else {
      for (let i = 0; i < this.state.userdata.length; i++) {
        filteredList.push({
          Name: this.state.userdata[i].Name,
          Id: this.state.userdata[i].Id,
          Company : this.state.userdata[i].Company,
          role: this.state.userdata[i].role,
          WorkPhone: this.state.userdata[i].WorkPhone,
          WorkEmail: this.state.userdata[i].WorkEmail,
          Picture: this.state.userdata[i].Picture,
        });
      }


      this.setState({ tempuserdata: filteredList });
    }

    this.setState({ tempuserdata: filteredList });
  }
 
  


  
  // handleInputChange = event => {
  //   const query = event.target.value;

  //   this.setState(prevState => {
  //     const tempuserdata = prevState.data.filter(element => {
  //       return element.name.toLowerCase().includes(query.toLowerCase());
  //     });

  //     return {
  //       query,
  //       tempuserdata
  //     };
  //   });
  // };



// handleInputChange = () => {
//     this.setState({
//         query: this.search.value
//     })
//     this.filterArray();
// }

// getData = () => {
//     fetch(`http://localhost:4000/restaurants`)
//     .then(response => response.json())
//     .then(responseData => {
//         this.setState({
//             data:responseData
//         })
//     })
// }

// filterArray = () => {
//     var searchString = this.state.query;
//     var responseData = this.state.tempuserdata
//     if(searchString.length > 0){
//         // console.log(responseData[i].name);
//         responseData = responseData.filter(l => {
//             console.log( l.name.toLowerCase().match(searchString));
//         })
//     }
// }





  public render(): React.ReactElement<IUiProps> {
    return (
      <div className={ styles.ui }>
  
        <div className={ styles.ribbon}><label className={styles.txt}>Employee Directory</label></div>
        <br/>
      
          <div   className={styles.btnGroup}
   >
            {this.state.itemList.map((item1, i) => {
                    return [
                        <div
                        className={
                          styles.button
                        } 
                        key={item1.id}
                        // disableRipple={true}
                          onClick={() => this.filterAlphabets(item1.id)}
                          onChange={() => this.filterAlphabets(item1.id)}
                        >
                          {item1.id}
                        </div>
                    ];
                  })}
        </div>
        {/* <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form> */}
        {/* <TextField id="searchBox"  type="text"
                onKeyUp={this.searchByKeyword}  value={this.state.inputValue} label="Search" variant="outlined" /> */}
        <div className={styles.trail}>
          
          {/* <table id='tab'> */}
            <div className={styles.tableBody}>
            { this.state.tempuserdata.map((item, i) => {
              return [
                  <Card id='card' className={styles.card}>
                    <div style={{display:'flex'}}>
                      <div style={{display:'flex',flexDirection:'column'}}>
                      <img src={require('../components/subcomponents/profile1.png')} key={item.id} alt="test" className={styles.profile}/>
                      </div>
               

                    <div style={{display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
                  <div key={item.id} className={styles.name}>
                  {item.Name}
                    </div>
                    <div key={item.id} className={styles.title}>({item.role})</div>
                    <div key={item.id} className={styles.company}>{item.Company}</div>

                   

                    </div>
                
                    </div>
                 <div style={{marginTop:'10px'}}>
 
                    <Tooltip title={item.WorkEmail} arrow>
                      <img key={item.id} src={require('../components/subcomponents/mail.png')} className={styles.detailsicon}/>
                    </Tooltip>
                    <Tooltip title={item.WorkPhone} arrow>
                      <img key={item.id} src={require('../components/subcomponents/phone.png')} className={styles.detailsicon}/>
                    </Tooltip>
                    <Tooltip title={item.WorkEmail} arrow>
                      <img key={item.id} src={require('../components/subcomponents/mail.png')} className={styles.detailsicon}/>
                    </Tooltip>
                 </div>
                
                  </Card>
                
              ,
              ];
            })}
          </div>
        {/* </table> */}
        </div>
      
      </div>
    );
  }
}
