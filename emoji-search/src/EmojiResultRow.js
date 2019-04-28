import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import "./EmojiResultRow.css";

class EmojiResultRow extends PureComponent{
    render(){
        const codePointHex = this.props.symbol.codePointAt(0).toString(16);
        const src = `//cnd.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        return (
            <div className="component-emoji-result-row copy-to-clipboard"
                   data-clipboard-text={this.props.symbol} >
                   
                   <img alt={this.props.title} src={src} />
                   <span className="title">{this.props.title}</span>
                   <span className="info">Click to copy emoji</span>
            </div>
        );
    }
}
EmojiResultRow.propTypes = {
    title: propTypes.string,
    symbol: propTypes.string
};
export default EmojiResultRow;