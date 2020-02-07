import * as React from "react";
import { Connected } from "./../../lib/store/connected.mixin";
import { RouteComponentProps } from "react-router";
import { AppStore } from "./../../lib/appStore";
import { StorageService } from "./../../services/client/storage.service";
import { Theme, createStyles, withStyles, WithStyles, TextField, Typography, Button } from "@material-ui/core"
import withRoot from "./../../withRoot";
import { CustomColors } from "./../../style/colors";
import { LocalImages } from "./../../staticFiles/images";
import { Validation } from "./../../validators";
import { WebAPI } from "./../../services/webAPI";
import { LoginRequest } from "./../../services/client/securityService";
import { StorageKeys } from "./../../settings/constats";
import FooterComponent from "./../footer/footer";
import { Routes } from "../../routing/urls";

const styles = (theme: Theme) =>
  createStyles
  ({

  });
  
interface IState
{}

interface IProps
{}
class Details extends Connected<typeof React.Component, IProps & WithStyles<typeof styles> & RouteComponentProps<{}>, IState, AppStore>(React.Component)
{
    
    constructor(props: IProps & WithStyles<typeof styles> & RouteComponentProps<{}>)
    {
        super(props);

        this.state =
        {}
        
    }
    
    render()
    {
      const css = this.props.classes;
      
      const Body = () =>
        <div></div>
        return Body();
    }

}

const DetailsPage = withRoot(withStyles(styles)(Details));
export default DetailsPage;