import React, {
  Component
} from 'react'
import PropTypes from "prop-types";
import CustomReactRouterContext from "./CustomReactRouterContext";

export default class CustomReactRouterProvider extends Component {

  static propTypes = {
    defaultPath: PropTypes.string.isRequired,
  }

  state = {
    time: new Date().getTime(),
  }

  componentDidMount() {
    window.onpopstate = () => {
      this.setState({
        time: new Date().getTime(),
      })
    }
  }

  componentDidUpdate() {
    const renderedComponents = document.getElementsByClassName('react-route')
    if (renderedComponents.length === 0) {
      window.history.pushState("", "", this.props.defaultPath)
      this.setState({
        time: new Date().getTime(),
      })
    }
  }

  history = {
    push: (url) => {
      window.history.pushState("", "", url)
      this.setState({
        time: new Date().getTime(),
      })
    },
    back: () => {
      window.history.back()
      this.setState({
        time: new Date().getTime(),
      })
    },
  }

  render() {
    const Context = this.props.context || CustomReactRouterContext;
    return ( <
      Context.Provider value = {
        {
          history: this.history,
          time: this.state.time,
          notifyMounted: () => this.setState({
            time: new Date().getTime()
          })
        }
      } > {
        this.props.children
      } <
      /Context.Provider>
    );
  }
}
