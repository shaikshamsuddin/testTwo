import * as React from "react";
import styles from "./ContentAndImageSlider.module.scss";
import { IContentAndImageSliderProps } from "./IContentAndImageSliderProps";
import { Typography } from "@material-ui/core";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import IconButton from "@material-ui/core/IconButton";
import { SPHttpClient } from '@microsoft/sp-http';  

export default class ContentAndImageSlider extends React.Component<
  IContentAndImageSliderProps,
  any
> {
  constructor(props: IContentAndImageSliderProps) {
    super(props);
    this.state = {
      activeStep: 0,
      listData:[]
    };
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  async componentDidMount(){
    try{
      let data = await this.props.context.spHttpClient.get(this.props.context.pageContext.web.absoluteUrl + "/_api/web/Lists/GetByTitle('NewMock_ContentAndImgSlider')/items",SPHttpClient.configurations.v1)
      let jsonData = await data.json()
      this.setState({
        listData:jsonData.value.map(item => ({label:item.Title,imgPath:item.imagePath}))
      })
    }catch(error){
      console.log(error)
    }
  }

  public render(): React.ReactElement<IContentAndImageSliderProps> {
    const { activeStep,listData } = this.state;

    // const dataList = [
    //   {
    //     label: " Consectetur adipiscing eismod incididunt labore dolor ",
    //     imgPath:
    //       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    //   },
    //   {
    //     label: "Lorem adipiscing eismod incididunt labore dolor ",
    //     imgPath:
    //       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    //   },
    //   {
    //     label: "Consectetur adipiscing eismod incididunt  ",
    //     imgPath:
    //       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    //   },
    //   {
    //     label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    //     imgPath:
    //       "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
    //   },
    //   {
    //     label: "Consectetur adipiscing eismod incididunt  ",
    //     imgPath:
    //       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    //   },
    // ];

    return (
      <div className={styles.contentAndImageSlider}>
        <div className={styles.containerBlock}>
          <div className={styles.leftContentBlock}>
            <Typography className={styles.leftContentHeading}>
              LOREM IPSUM DOLOR
            </Typography>
            <Typography className={styles.leftContentSecondHeading}>
              {listData.length ? listData[activeStep].label : ""}
            </Typography>
            <Typography className={styles.mainTextContentBox}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a
              nulla distinctio sapiente tenetur qui corporis doloribus quos,
              esse recusandae provident ut
            </Typography>
            <div style={{
              marginTop:"40px"
            }} >

<Typography>
              <span className={styles.coloredChipText} style={{backgroundColor:this.props.color}} >LOREM IPSUM DOLOR</span>
            </Typography>
            </div>
            
            <div className={styles.iconFlexEndBox}>
              <IconButton
                disableTouchRipple
                disableFocusRipple
                disabled={activeStep === 0}
                disableRipple
                size="small"
              >
                <KeyboardArrowLeftIcon
                  onClick={this.handleBack}
                  className={styles.leftArrowContentIcon}
                />
              </IconButton>
              <IconButton
                disabled={activeStep === listData.length - 1}
                disableRipple={true}
                disableFocusRipple={true}
                size="small"
              >
                <KeyboardArrowRightIcon
                  onClick={this.handleNext}
                  className={styles.rightArrowContentIcon}
                />
              </IconButton>
            </div>
          </div>
          <img
            src={listData.length ? listData[activeStep].imgPath : ""}
            className={styles.rightContentImage}
          />
        </div>
      </div>
    );
  }
}
