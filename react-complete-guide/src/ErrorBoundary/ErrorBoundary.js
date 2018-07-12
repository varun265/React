import React,{Component} from 'react'
class ErrorBoundary extends Component{
	state={
			hasError: false,
			errMsg: ''
		}

		componentDidCatch =(err,msg) =>{
			this.setState({hasError:err, errMsg:msg});
		}
	render(){
		if(this.state.hasError)
		{
			return <h1>this.state.errMsg</h1>
		}
		else
		{
			return this.props.children;
		}

	}
}


export default ErrorBoundary;