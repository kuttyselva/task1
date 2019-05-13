import React,{Component} from 'react';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Page extends Component{
   
    render(){
       
        return(
            <div id="wrapper">
            <div id="main">
            <div className="inner">
            <img className="img-circle inner" src="https://scontent-sea1-1.cdninstagram.com/vp/6319a4442e25e1768dc81ddde6b3020c/5D595156/t51.2885-19/s320x320/13694575_1044185705659745_871313568_a.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com" alt=""/>
            <p id="text01">Rachael Deckard</p>
            <hr id="divider02"/>
            <p id="text02">Morbi condimentum purus quis est semper maximus integer.</p>
            <ul id="icons02" className="icons">
            <li><a className="n01" href="http://domain.tld/path">
            <svg><use xlinkHref="#icon-905"></use>
            </svg>
            <span className="label">Twitter</span></a></li><li><a className="n02" href="http://domain.tld/path">
            <svg><use xlinkHref="#icon-906"></use></svg>
            <FontAwesomeIcon icon="coffee" />
            <span className="label">Facebook</span></a></li>
            <li><a className="n03" href="http://domain.tld/path">
            <svg><use xlinkHref="#icon-904"></use></svg><span className="label">Phone</span></a></li>
            <li><a className="n04" href="http://domain.tld/path">
            <svg><use xlinkHref="#icon-90a"></use></svg>
            <span className="label">Email</span></a></li></ul></div></div></div>
        );
    }
}



