import React         from 'react';

import { IndexLink } from 'react-router';

class ResponsiveImage extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
                         imageDimensions: {}, 
                         width: 800,
                         height: 182
                     };

        this.onImageLoad      = this.onImageLoad.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentWillMount() {
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions.bind(this));
    }

    updateDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    onImageLoad({ target: image }) {
        this.setState({
                         imageDimensions: {
                                             height: image.offsetHeight,
                                             width:  image.offsetWidth
                                          }
        }             );
    }

    render() {

        const staticStyles = this.state.staticStyles;
        const src = this.props.src;

        const appDimensions = this.props.appDimensions;

        const appWidth      = appDimensions.width;
        const appHeight     = appDimensions.height;

        const imageWidth    = this.state.imageDimensions.width;
        const imageHeight   = this.state.imageDimensions.height;

        const max           = imageWidth ? imageWidth + 100 : appWidth;

        // If the width of the app window is less than the size of the image + 100 then shrink the size of the image

        const imageStyle = {
                               width:       appWidth < max ? appWidth / 1.5 : imageWidth, 
                               marginLeft:  'auto', 
                               marginRight: 'auto'
                           };

        return (
            <div className={staticStyles}>
                <img style={imageStyle} onLoad={this.onImageLoad} src={src} />
            </div>
        );
    }
}

export default ResponsiveImage;
