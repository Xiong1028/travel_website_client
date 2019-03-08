import React, { Component } from "react";
import { connect } from "react-redux";
import { Upload, Icon, message } from 'antd';
import { actionCreators } from '../store';

import '../setting.css';

function beforeUpload(file) {
    const isType = (file.type === 'image/jpeg') || (file.type === 'image/png');
    if (!isType) {
        message.error('You can only upload JPG or PNG file!');
    }
    const isLt4M = file.size / 1024 / 1024 < 4;
    if (!isLt4M) {
        message.error('Image must smaller than 4MB!');
    }
    return isType && isLt4M;
}




class Avatar extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        file: null,
        imgUrl: ''
    };
    

    
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        });
    }   

    handleChange = (info) => {
        console.log(info.file.originFileObj);
        this.setState({
            file: info.file.originFileObj
        });
        
        this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl: imageUrl
        }));

        
    }

    getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    render() {
        const { handleUpload } = this.props;

        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <Upload
                name="avatar"
                className="avatar-uploader"
                listType="picture-card"
                action={(file) => handleUpload(file)}
                beforeUpload={beforeUpload}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
            >
               {uploadButton}
            </Upload>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleUpload(file) {
            console.log(file);
            let formData = new FormData();
            formData.append('avatar', file);
            console.log(formData);
//            dispatch(actionCreators.handleUploadAction(formData));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Avatar);