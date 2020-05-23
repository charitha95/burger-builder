import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Auxi from '../Auxi';

const withErrorHandler = (WrappedComponent, axios) =>
  class extends Component {

    state = {
      error: null
    }
    
    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use(res => {
        this.setState({ error: null });
        return res
      });

      this.resInterceptor = axios.interceptors.response.use(res => res, e => {
        this.setState({ error: e })
      })
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.request.eject(this.resInterceptor);
    }

    errorConfirmed = () => {
      this.setState({ error: null });
    }

    render() {
      return <Auxi>
        <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
          {this.state.error && this.state.error.message}
        </Modal>
        <WrappedComponent {...this.props} />
      </Auxi>
    }
  }

export default withErrorHandler;
