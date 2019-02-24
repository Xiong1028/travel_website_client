import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Icon, Avatar } from 'antd';
import { MDBMask, MDBView, MDBIcon, MDBBtn } from "mdbreact";

const { Meta } = Card;

class DiaryCard extends Component {
    render() {
        return (
            <Card
                hoverable
                style={{ width: 350, height: 350, padding: '2.5%', borderRadius: '8px'}}
                cover={ <MDBView hover zoom >
                            <img alt="diary pic" src={require("../../../assets/images/diary1.jpg")} style={{height: 250}}/> 
                            <MDBMask overlay="stylish-light">
                                <MDBBtn color="danger" rounded size="xl">
                                    <MDBIcon fas icon="thumbtack" className="left" /><b>     Save</b>
                                </MDBBtn>
                            </MDBMask>
                        </MDBView>}
            >
                <Meta
                    avatar={ <img src="https://pic.qyer.com/avatar/003/10/69/98/200?v=1545986595" alt="" className="rounded-circle" style={{width: '50px'}}/> }
                    style={{fontFamily:"'Indie Flower', cursive", fontSize:'18px', fontWeight:700, color:'black'}}                           
                    description={<p style={{color:'black'}}>European Streest Beat - 12/05/2017</p>}         
                    
               />
            </Card>
            
            
            
            
        );
    }
}

// data transfer from reducer to component
const mapStateToProps = state => {
    return {};
};

// data transfer from component to reducer
const mapDispatchToProps = dispatch => { };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DiaryCard);