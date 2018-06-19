import React, {
    Component
} from 'react';
import Icons from './icons';
import './icon.css';

class IconMoon extends Component {
    render() {
        let key = 0;
        let iconName = this.props.icon;
        let paths = Icons.path[iconName].map(path => React.createElement('path', {
            d: path,
            key: key++
        }));

        let attr = Object.assign({}, this.props);
        attr.className = 'icon icon-' + iconName;
        attr.viewBox = Icons.viewBox[iconName] || '0 0 32 32';

        return React.createElement('svg', attr, paths);
    }
}

export default IconMoon;
