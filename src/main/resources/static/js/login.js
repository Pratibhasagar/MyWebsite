import React, { Component } from 'react';

export default class Login extends Component {

	render() {
		return (
		<div>
		<br/>
		<table><tbody><tr>
			<td>Login Id</td>
			<td><input type="text" required="required"/></td>
			</tr><tr>
			<td>Password</td>
			<td><input type="password" required="required"/></td>
			</tr><tr>
			<td/><td><input type="submit" /></td>
		</tr></tbody></table>
        </div>
		);
	}
}
