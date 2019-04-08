import React, {Component, Fragment} from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "./store";

import Header from "./publicComponents/header";
import Footer from "./publicComponents/footer";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./bodyComponents/home/";
import Login from "./bodyComponents/login/";
import Post from "./bodyComponents/post";
import Detail from "./bodyComponents/detail";
import Setting from "./publicComponents/setting";
import Search from "./bodyComponents/search";
import Author from "./bodyComponents/author";

import "./testSocketio/socketio_test";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Fragment>
						<Header/>
						<Route path="/" exact component={Home}/>
						<Route path="/login" exact component={Login}/>
						<Route path="/post" exact component={Post}/>
						<Route path="/detail/:id" exact component={Detail}/>
						<Route path="/setting" exact component={Setting}/>
						<Route path="/search" exact component={Search}/>
            			<Route path="/author/:user_id" exact component={Author} />
						<Footer/>
					</Fragment>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
