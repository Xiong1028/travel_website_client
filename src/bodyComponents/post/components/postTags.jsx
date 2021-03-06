import React,{Component} from 'react';
import {
	Tag, Input, Tooltip, Icon,
} from 'antd';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

class EditableTagGroup extends Component {
	state = {
		tags: [],
		inputVisible: false,
		inputValue: '',
	};

	handleClose = () => {
		const tags = this.state.tags;
		this.setState({ tags });
	}

	showInput = () => {
		this.setState({ inputVisible: true }, () => this.input.focus());
	}

	handleInputChange = (e) => {
		this.setState({ inputValue: e.target.value });
	}

	handleInputConfirm = () => {
		const state = this.state;
		const inputValue = state.inputValue;
		let tags = state.tags;
		if (inputValue && tags.indexOf(inputValue) === -1) {
			tags = [...tags, inputValue];
		}

		this.setState({
			tags,
			inputVisible: false,
			inputValue: '',
		});

		this.props.renewTagsList(tags);
	}

	saveInputRef = input => this.input = input

	render() {
		const { tags, inputVisible, inputValue } = this.state;
		return (
			<div className="tags">
				{tags.map((tag, index) => {
					const isLongTag = tag.length > 20;
					const tagElem = (
						<Tag key={tag} closable={true} afterClose={() => this.handleClose()} 	color="#f50">
							{isLongTag ? `${tag.slice(0, 20)}...` : tag}
						</Tag>
					);
					return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
				})}
				{inputVisible && (
					<Input
						ref={this.saveInputRef}
						type="text"
						size="small"
						style={{ width: 78}}
						value={inputValue}
						onChange={this.handleInputChange}
						onBlur={this.handleInputConfirm}
						onPressEnter={this.handleInputConfirm}
					/>
				)}
				{!inputVisible && (
					<Tag
						onClick={this.showInput}
						style={{ background: '#fff', borderStyle: 'dashed' }}
					>
						<Icon type="plus" /> New Tag
					</Tag>
				)}
			</div>
		);
	}
}


const mapDispatchToProps = (dispatch)=>{
	return {
		renewTagsList(tags){
			dispatch(actionCreators.handleRenewTagsListAction(tags));
		}
	}
}

export default connect(null,mapDispatchToProps)(EditableTagGroup);