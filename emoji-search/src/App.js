import React, { PureComponent } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import EmojiResults from './EmojiResults';
import filterEmoji from './filterEmoji';


class App extends PureComponent{
    constructor(props){
        super(props){
            this.state = {
                filterEmoji : filterEmoji("", 20)
            };
        }

        handleSearchChange = event => {
            this.setState({
                filterEmoji: filterEmoji(event.targe.value, 20)
            });
        };

        render(){
            return (
                <div>
                    <Header />
                    <SearchInput textChange={this.handleSearchChange} />
                    <EmojiResult emojiData={this.state.filteredEmoji} />    
                </div>
            );
        }
    }
}

export default App;