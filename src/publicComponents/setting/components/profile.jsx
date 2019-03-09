import React, { Component } from "react";
import { connect } from "react-redux";
import { Slider, Upload, Icon, message, Modal, Col } from 'antd';
import AvatarEditor from 'react-avatar-editor';
import { Button } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import { actionCreators } from '../store';

import '../setting.css';

class Profile extends Component {

    state = {
        file: null,
        scale: 1 
    };
    
    

    handleUpload = (file) => {
        console.log(file);
        this.setState({ file: file });
    }

    onChange = (value) => {
        this.setState({ scale: value });
    }

    onClickSave = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage().toDataURL();
            console.log(canvas);

            let imageURL;
            fetch(canvas).then(res => {
                res.blob();
                console.log(res.blob());
            })
                         .then(blob => (imageURL = window.URL.createObjectURL(blob)));
            
        }
    }

    setEditorRef = (editor) => this.editor = editor;

    render() {
        const { file, scale } = this.state;

        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div>
                <h4 style={{ marginBottom: '5%' }}>Update Profile</h4>
                <Divider style={{ width: '150%', marginBottom: '5%' }} />
                <div className="clearfix">
                    <Upload
                        listType="picture-card"
                        showUploadList={false}
                        action={this.handleUpload}
                    >
                        {uploadButton}
                    </Upload>
                </div>
                <AvatarEditor
                    ref={this.setEditorRef}
                    image={file}
                    width={200}
                    height={200}
                    border={50}
                    borderRadius={100}
                    color={[255, 255, 255, 0.4]} // RGBA
                    scale={scale}
                    rotate={0}
                />
                <Col span={12}>
                    <Slider
                        min={1}
                        max={2}
                        step={0.1}
                        onChange={this.onChange}
                    />
                </Col>
                <Button variant="outline-primary" onClick={this.onClickSave}>Save</Button>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);

// Use Antd Upload Component to upload avatar
/*
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


class Profile extends Component {
    state = {
        previewVisible: false,
        previewImage: '',
        file: [{
            uid: '-1',
            name: 'xxx.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }],
        imgUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    };

    handlePreview = (file) => {
        console.log(file);
        console.log(file.thumbUrl);
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true
        });
    }

    handleCancel = () => this.setState({ previewVisible: false });

    handleChange = (info) => {
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
        const { previewVisible, previewImage } = this.state;
        const { handleUpload } = this.props;

        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className="ant-upload-text">Upload</div>
            </div>
        );



        return (
            <div className="clearfix">
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
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
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
            let formData = new FormData();
            formData.append('avatar', file);

            // retrieve formData

            let formKeys    = formData.keys();
            var formEntries = formData.entries();
            do {
                console.log(formEntries.next().value);
            } while (!formKeys.next().done)


//            dispatch(actionCreators.handleUploadAction(formData));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
*/